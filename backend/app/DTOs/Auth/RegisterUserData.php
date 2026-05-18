<?php

namespace App\DTOs\Auth;

readonly class RegisterUserData
{
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
        public ?string $phone,
        public ?int $restaurantId,
        public ?int $branchId,
    ) {
    }

    public static function fromArray(array $payload): self
    {
        return new self(
            name: $payload['name'],
            email: $payload['email'],
            password: $payload['password'],
            phone: $payload['phone'] ?? null,
            restaurantId: $payload['restaurant_id'] ?? null,
            branchId: $payload['restaurant_branch_id'] ?? null,
        );
    }
}
