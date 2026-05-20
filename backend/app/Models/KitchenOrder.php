<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KitchenOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'station',
        'status',
        'started_at',
        'ready_at',
        'served_at',
    ];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'ready_at' => 'datetime',
            'served_at' => 'datetime',
        ];
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
