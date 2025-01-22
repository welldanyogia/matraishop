<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'admin',
            'customer',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'customer']);

        $adminRole->givePermissionTo(Permission::all());
        $userRole->givePermissionTo(['customer']);

        $adminUser = User::create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => bcrypt('12341234'),
        ]);
        $adminUser->assignRole('admin');

        $normalUser = User::create([
            'name' => 'Normal Customer',
            'email' => 'cust@cust.com',
            'password' => bcrypt('12341234'),
        ]);
        $normalUser->assignRole('customer');
    }
}
