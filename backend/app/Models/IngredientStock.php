<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IngredientStock extends Model
{
    use HasFactory;

    protected $fillable = [
        'ingredient_id',
        'quantity',
        'reserved_quantity',
        'average_cost',
        'last_restocked_at',
    ];

    protected function casts(): array
    {
        return [
            'quantity' => 'decimal:2',
            'reserved_quantity' => 'decimal:2',
            'average_cost' => 'decimal:2',
            'last_restocked_at' => 'datetime',
        ];
    }

    public function ingredient(): BelongsTo
    {
        return $this->belongsTo(Ingredient::class);
    }
}
