<?php

namespace App\DTOs\Orders;

readonly class StoreOrderData
{
    public function __construct(
        public int $restaurantId,
        public int $branchId,
        public ?int $tableId,
        public ?int $customerId,
        public string $channel,
        public string $serviceType,
        public ?string $notes,
        public ?string $customerName,
        public ?string $customerPhone,
        public ?string $deliveryAddress,
        public array $items,
        public ?array $payment,
        public ?int $discountId,
        public ?int $taxId,
    ) {
    }

    public static function fromArray(array $payload): self
    {
        return new self(
            restaurantId: (int) $payload['restaurant_id'],
            branchId: (int) $payload['restaurant_branch_id'],
            tableId: isset($payload['restaurant_table_id']) ? (int) $payload['restaurant_table_id'] : null,
            customerId: isset($payload['customer_id']) ? (int) $payload['customer_id'] : null,
            channel: $payload['channel'],
            serviceType: $payload['service_type'],
            notes: $payload['notes'] ?? null,
            customerName: $payload['customer_name'] ?? null,
            customerPhone: $payload['customer_phone'] ?? null,
            deliveryAddress: $payload['delivery_address'] ?? null,
            items: $payload['items'],
            payment: $payload['payment'] ?? null,
            discountId: $payload['discount_id'] ?? null,
            taxId: $payload['tax_id'] ?? null,
        );
    }
}
