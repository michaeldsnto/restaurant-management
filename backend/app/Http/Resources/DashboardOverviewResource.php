<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DashboardOverviewResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'metrics' => $this['metrics'],
            'sales_series' => $this['sales_series'],
            'top_items' => $this['top_items'],
        ];
    }
}
