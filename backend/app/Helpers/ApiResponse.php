<?php

namespace App\Helpers;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ApiResponse
{
    public static function success(
        mixed $data = null,
        string $message = 'Request completed successfully',
        int $status = 200,
        array $meta = []
    ): JsonResponse {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => self::normalizeData($data),
            'meta' => $meta ?: self::extractMeta($data),
        ], $status);
    }

    public static function error(
        string $message = 'Request failed',
        int $status = 422,
        array $errors = []
    ): JsonResponse {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $status);
    }

    private static function normalizeData(mixed $data): mixed
    {
        if ($data instanceof JsonResource || $data instanceof ResourceCollection) {
            return $data->resolve();
        }

        return $data;
    }

    private static function extractMeta(mixed $data): array
    {
        if (! $data instanceof LengthAwarePaginator) {
            return [];
        }

        return [
            'pagination' => [
                'current_page' => $data->currentPage(),
                'last_page' => $data->lastPage(),
                'per_page' => $data->perPage(),
                'total' => $data->total(),
            ],
        ];
    }
}
