<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->foreignId('restaurant_id')->nullable()->after('id')->constrained()->nullOnDelete();
            $table->foreignId('restaurant_branch_id')->nullable()->after('restaurant_id')->constrained('restaurant_branches')->nullOnDelete();
            $table->string('phone')->nullable()->after('email');
            $table->boolean('is_active')->default(true)->after('password');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('restaurant_id');
            $table->dropConstrainedForeignId('restaurant_branch_id');
            $table->dropColumn(['phone', 'is_active']);
        });
    }
};
