# API Reference

Base prefix: `/api/v1`

## Auth

- `POST /auth/login`
- `POST /auth/register`
- `GET /auth/me`
- `POST /auth/logout`

## Dashboard

- `GET /dashboard/overview`

Query params:

- `restaurant_branch_id`
- `date_from`
- `date_to`

## Menu categories

- `GET /menu-categories`
- `POST /menu-categories`
- `PUT /menu-categories/{menuCategory}`
- `DELETE /menu-categories/{menuCategory}`

Filters:

- `restaurant_branch_id`
- `search`
- `per_page`

## Menu items

- `GET /menu-items`
- `POST /menu-items`
- `PUT /menu-items/{menuItem}`

Filters:

- `restaurant_branch_id`
- `menu_category_id`
- `search`
- `per_page`

## Orders

- `GET /orders`
- `POST /orders`
- `GET /orders/{order}`
- `PUT /orders/{order}`

Filters:

- `restaurant_branch_id`
- `status`
- `channel`
- `search`
- `per_page`

## Standard response

```json
{
  "success": true,
  "message": "Order created successfully.",
  "data": {}
}
```
