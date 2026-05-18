<?php

namespace App\Models;

use App\Traits\BelongsToRestaurant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ingredient extends Model
{
    use BelongsToRestaurant, HasFactory;

    protected $fillable = [
        'restaurant_id',
        'restaurant_branch_id',
        'name',
        'sku',
        'unit',
        'minimum_stock',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'minimum_stock' => 'decimal:2',
            'is_active' => 'boolean',
        ];
    }

    public function stocks(): HasMany
    {
        return $this->hasMany(IngredientStock::class);
    }
}
