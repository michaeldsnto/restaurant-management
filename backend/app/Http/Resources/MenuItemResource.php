<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'restaurant_id' => $this->restaurant_id,
            'restaurant_branch_id' => $this->restaurant_branch_id,
            'menu_category_id' => $this->menu_category_id,
            'category' => $this->whenLoaded('category', fn () => [
                'id' => $this->category?->id,
                'name' => $this->category?->name,
            ]),
            'name' => $this->name,
            'slug' => $this->slug,
            'sku' => $this->sku,
            'description' => $this->description,
            'price' => $this->price,
            'cost' => $this->cost,
            'image_url' => $this->image_url,
            'preparation_time_minutes' => $this->preparation_time_minutes,
            'is_available' => $this->is_available,
            'is_featured' => $this->is_featured,
            'track_inventory' => $this->track_inventory,
            'variants' => $this->whenLoaded('variants', fn () => $this->variants->map(fn ($variant) => [
                'id' => $variant->id,
                'name' => $variant->name,
                'sku' => $variant->sku,
                'price_delta' => $variant->price_delta,
                'is_default' => $variant->is_default,
            ])),
        ];
    }
}
