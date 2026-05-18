<?php

namespace App\Traits;

use App\Models\Restaurant;
use App\Models\RestaurantBranch;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait BelongsToRestaurant
{
    public function restaurant(): BelongsTo
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(RestaurantBranch::class, 'restaurant_branch_id');
    }
}
