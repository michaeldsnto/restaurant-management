<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'status' => ['sometimes', Rule::in(['pending', 'preparing', 'ready', 'served', 'cancelled'])],
            'payment_status' => ['sometimes', Rule::in(['unpaid', 'paid', 'refunded'])],
            'notes' => ['nullable', 'string'],
        ];
    }
}
