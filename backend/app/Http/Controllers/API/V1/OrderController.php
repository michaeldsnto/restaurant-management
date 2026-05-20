<?php

namespace App\Http\Controllers\API\V1;

use App\DTOs\Orders\StoreOrderData;
use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Http\Requests\Order\UpdateOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __construct(
        private readonly OrderService $orderService,
    ) {
    }

    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', Order::class);

        $orders = $this->orderService->paginate($request->only([
            'restaurant_branch_id',
            'status',
            'channel',
            'search',
            'per_page',
        ]));

        return ApiResponse::success(
            OrderResource::collection($orders),
            'Orders retrieved successfully.'
        );
    }

    public function store(StoreOrderRequest $request): JsonResponse
    {
        $this->authorize('create', Order::class);

        $order = $this->orderService->create(
            StoreOrderData::fromArray($request->validated()),
            $request->user()?->id,
        );

        return ApiResponse::success(
            OrderResource::make($order),
            'Order created successfully.',
            201
        );
    }

    public function show(Order $order): JsonResponse
    {
        $this->authorize('update', $order);

        return ApiResponse::success(
            OrderResource::make($order->load(['items', 'kitchenOrders', 'table', 'creator'])),
            'Order retrieved successfully.'
        );
    }

    public function update(UpdateOrderRequest $request, Order $order): JsonResponse
    {
        $this->authorize('update', $order);

        $order = $this->orderService->updateStatus($order, $request->validated());

        return ApiResponse::success(
            OrderResource::make($order),
            'Order updated successfully.'
        );
    }
}
