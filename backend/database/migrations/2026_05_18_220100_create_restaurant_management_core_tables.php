<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('restaurants', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('timezone')->default('Asia/Jakarta');
            $table->string('currency', 8)->default('IDR');
            $table->json('settings')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('restaurant_branches', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('restaurant_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('code')->unique();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->boolean('is_head_office')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['restaurant_id', 'is_active']);
        });

        Schema::create('restaurant_tables', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('restaurant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('restaurant_branch_id')->constrained('restaurant_branches')->cascadeOnDelete();
            $table->string('name');
            $table->string('code');
            $table->unsignedInteger('capacity')->default(2);
            $table->string('status')->default('available');
            $table->string('qr_token')->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->unique(['restaurant_branch_id', 'code']);
            $table->index(['restaurant_branch_id', 'status']);
        });

        Schema::create('discounts', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('restaurant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('restaurant_branch_id')->constrained('restaurant_branches')->cascadeOnDelete();
            $table->string('name');
            $table->string('type');
            $table->decimal('value', 12, 2);
            $table->timestamp('starts_at')->nullable();
            $table->timestamp('ends_at')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('taxes', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('restaurant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('restaurant_branch_id')->constrained('restaurant_branches')->cascadeOnDelete();
            $table->string('name');
            $table->decimal('rate', 8, 2);
            $table->boolean('is_inclusive')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('taxes');
        Schema::dropIfExists('discounts');
        Schema::dropIfExists('restaurant_tables');
        Schema::dropIfExists('restaurant_branches');
        Schema::dropIfExists('restaurants');
    }
};
