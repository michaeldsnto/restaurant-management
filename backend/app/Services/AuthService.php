<?php

namespace App\Services;

use App\DTOs\Auth\RegisterUserData;
use App\Exceptions\ApiException;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function login(array $credentials): array
    {
        if (! Auth::attempt($credentials)) {
            throw new ApiException('Invalid email or password.', 422);
        }

        /** @var User $user */
        $user = Auth::user();

        if (! $user->is_active) {
            throw new ApiException('Your account is inactive.', 403);
        }

        $token = $user->createToken('restaurant-management-web')->plainTextToken;

        return compact('user', 'token');
    }

    public function register(RegisterUserData $data): array
    {
        return DB::transaction(function () use ($data): array {
            $user = User::query()->create([
                'name' => $data->name,
                'email' => $data->email,
                'phone' => $data->phone,
                'password' => Hash::make($data->password),
                'restaurant_id' => $data->restaurantId,
                'restaurant_branch_id' => $data->branchId,
                'is_active' => true,
            ]);

            $user->assignRole('Customer');

            $token = $user->createToken('restaurant-management-web')->plainTextToken;

            return compact('user', 'token');
        });
    }

    public function logout(User $user): void
    {
        $user->currentAccessToken()?->delete();
    }
}
