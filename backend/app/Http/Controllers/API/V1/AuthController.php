<?php

namespace App\Http\Controllers\API\V1;

use App\DTOs\Auth\RegisterUserData;
use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $authService,
    ) {
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $payload = $this->authService->login($request->validated());

        return ApiResponse::success([
            'user' => UserResource::make($payload['user']),
            'token' => $payload['token'],
        ], 'Login successful.');
    }

    public function register(RegisterRequest $request): JsonResponse
    {
        $payload = $this->authService->register(
            RegisterUserData::fromArray($request->validated())
        );

        return ApiResponse::success([
            'user' => UserResource::make($payload['user']),
            'token' => $payload['token'],
        ], 'Registration successful.', 201);
    }

    public function me(Request $request): JsonResponse
    {
        return ApiResponse::success(
            UserResource::make($request->user()),
            'Authenticated user retrieved successfully.'
        );
    }

    public function logout(Request $request): JsonResponse
    {
        $this->authService->logout($request->user());

        return ApiResponse::success(null, 'Logout successful.');
    }
}
