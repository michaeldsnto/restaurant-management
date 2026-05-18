<?php

namespace App\Models;

use App\Traits\BelongsToRestaurant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MenuItem extends Model
{
    use BelongsToRestaurant, HasFactory, SoftDeletes;

    protected $fillable = [
        'restaurant_id',
        'restaurant_branch_id',
        'menu_category_id',
        'name',
        'slug',
        'sku',
        'description',
        'price',
        'cost',
        'image_url',
        'preparation_time_minutes',
        'is_available',
        'is_featured',
        'track_inventory',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'cost' => 'decimal:2',
            'preparation_time_minutes' => 'integer',
            'is_available' => 'boolean',
            'is_featured' => 'boolean',
            'track_inventory' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(MenuCategory::class, 'menu_category_id');
    }

    public function variants(): HasMany
    {
        return $this->hasMany(MenuItemVariant::class);
    }

    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'ingredient_menu_item')
            ->withPivot(['quantity', 'unit'])
            ->withTimestamps();
    }
}
