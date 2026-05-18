<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'dashboard.view',
            'menu-category.manage',
            'menu-item.manage',
            'order.view',
            'order.create',
            'order.update',
            'reservation.manage',
            'inventory.manage',
            'analytics.view',
            'settings.manage',
        ];

        foreach ($permissions as $permission) {
            Permission::findOrCreate($permission, 'web');
        }

        $roleMap = [
            'Super Admin' => $permissions,
            'Restaurant Owner' => $permissions,
            'Manager' => $permissions,
            'Cashier' => ['dashboard.view', 'menu-item.manage', 'order.view', 'order.create', 'order.update', 'analytics.view'],
            'Waiter' => ['dashboard.view', 'order.view', 'order.create', 'order.update'],
            'Kitchen Staff' => ['dashboard.view', 'order.view', 'order.update'],
            'Customer' => [],
        ];

        foreach ($roleMap as $role => $grants) {
            $roleModel = Role::findOrCreate($role, 'web');
            $roleModel->syncPermissions(
                Permission::query()->whereIn('name', $grants)->get()
            );
        }
    }
}
