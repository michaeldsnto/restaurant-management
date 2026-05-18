<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'restaurant_id' => ['required', 'exists:restaurants,id'],
            'restaurant_branch_id' => ['required', 'exists:restaurant_branches,id'],
            'restaurant_table_id' => ['nullable', 'exists:restaurant_tables,id'],
            'customer_id' => ['nullable', 'exists:users,id'],
            'channel' => ['required', Rule::in(['pos', 'waiter', 'qr', 'online'])],
            'service_type' => ['required', Rule::in(['dine_in', 'pickup', 'delivery'])],
            'customer_name' => ['nullable', 'string', 'max:255'],
            'customer_phone' => ['nullable', 'string', 'max:50'],
            'delivery_address' => ['nullable', 'string'],
            'notes' => ['nullable', 'string'],
            'discount_id' => ['nullable', 'exists:discounts,id'],
            'tax_id' => ['nullable', 'exists:taxes,id'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.menu_item_id' => ['required', 'exists:menu_items,id'],
            'items.*.menu_item_variant_id' => ['nullable', 'exists:menu_item_variants,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
            'items.*.notes' => ['nullable', 'string'],
            'payment' => ['nullable', 'array'],
            'payment.method' => ['required_with:payment', Rule::in(['cash', 'card', 'qris', 'transfer'])],
            'payment.reference_number' => ['nullable', 'string', 'max:100'],
        ];
    }
}
