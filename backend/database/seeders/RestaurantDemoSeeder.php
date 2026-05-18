<?php

namespace Database\Seeders;

use App\Models\Discount;
use App\Models\MenuCategory;
use App\Models\MenuItem;
use App\Models\Restaurant;
use App\Models\RestaurantBranch;
use App\Models\RestaurantTable;
use App\Models\Tax;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class RestaurantDemoSeeder extends Seeder
{
    public function run(): void
    {
        $restaurant = Restaurant::query()->firstOrCreate(
            ['slug' => 'nova-bistro'],
            [
                'name' => 'Nova Bistro',
                'email' => 'owner@novabistro.test',
                'phone' => '+628123456789',
                'timezone' => 'Asia/Makassar',
                'currency' => 'IDR',
                'is_active' => true,
            ]
        );

        $branch = RestaurantBranch::query()->firstOrCreate(
            ['code' => 'NB-MKS-01'],
            [
                'restaurant_id' => $restaurant->id,
                'name' => 'Nova Bistro Makassar',
                'phone' => '+628123456780',
                'email' => 'makassar@novabistro.test',
                'address' => 'Jl. Nusantara No. 10',
                'city' => 'Makassar',
                'is_head_office' => true,
                'is_active' => true,
            ]
        );

        foreach (range(1, 8) as $number) {
            RestaurantTable::query()->firstOrCreate(
                ['restaurant_branch_id' => $branch->id, 'code' => "T{$number}"],
                [
                    'restaurant_id' => $restaurant->id,
                    'name' => "Table {$number}",
                    'capacity' => $number <= 4 ? 2 : 4,
                    'status' => 'available',
                    'qr_token' => Str::uuid()->toString(),
                    'is_active' => true,
                ]
            );
        }

        $categories = collect([
            ['name' => 'Signature Mains', 'description' => 'High-margin mains'],
            ['name' => 'Craft Beverages', 'description' => 'Cold and hot beverages'],
            ['name' => 'Desserts', 'description' => 'Sweet finishers'],
        ])->map(function (array $category) use ($restaurant, $branch) {
            return MenuCategory::query()->firstOrCreate(
                ['restaurant_branch_id' => $branch->id, 'slug' => Str::slug($category['name'])],
                [
                    'restaurant_id' => $restaurant->id,
                    'name' => $category['name'],
                    'description' => $category['description'],
                    'sort_order' => 1,
                    'is_active' => true,
                ]
            );
        })->keyBy('name');

        MenuItem::query()->firstOrCreate(
            ['restaurant_branch_id' => $branch->id, 'slug' => 'smoked-beef-rice-bowl'],
            [
                'restaurant_id' => $restaurant->id,
                'menu_category_id' => $categories['Signature Mains']->id,
                'name' => 'Smoked Beef Rice Bowl',
                'sku' => 'MNU-001',
                'description' => 'Beef brisket, egg yolk, and tare glaze.',
                'price' => 68000,
                'cost' => 29000,
                'preparation_time_minutes' => 12,
                'is_available' => true,
                'is_featured' => true,
                'track_inventory' => false,
            ]
        );

        Discount::query()->firstOrCreate(
            ['restaurant_branch_id' => $branch->id, 'name' => 'Member Discount'],
            [
                'restaurant_id' => $restaurant->id,
                'type' => 'percentage',
                'value' => 10,
                'is_active' => true,
            ]
        );

        Tax::query()->firstOrCreate(
            ['restaurant_branch_id' => $branch->id, 'name' => 'Service & Tax'],
            [
                'restaurant_id' => $restaurant->id,
                'rate' => 11,
                'is_inclusive' => false,
                'is_active' => true,
            ]
        );

        $owner = User::query()->firstOrCreate(
            ['email' => 'owner@novabistro.test'],
            [
                'restaurant_id' => $restaurant->id,
                'restaurant_branch_id' => $branch->id,
                'name' => 'Nova Owner',
                'phone' => '+628123450000',
                'password' => Hash::make('password123'),
                'is_active' => true,
            ]
        );

        $owner->syncRoles(['Restaurant Owner']);
    }
}
