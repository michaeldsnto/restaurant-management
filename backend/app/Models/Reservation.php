<?php

namespace App\Models;

use App\Traits\BelongsToRestaurant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reservation extends Model
{
    use BelongsToRestaurant, HasFactory;

    protected $fillable = [
        'restaurant_id',
        'restaurant_branch_id',
        'restaurant_table_id',
        'customer_name',
        'customer_phone',
        'customer_email',
        'guest_count',
        'status',
        'reserved_at',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'guest_count' => 'integer',
            'reserved_at' => 'datetime',
        ];
    }

    public function table(): BelongsTo
    {
        return $this->belongsTo(RestaurantTable::class, 'restaurant_table_id');
    }
}
