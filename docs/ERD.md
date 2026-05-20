# ERD Summary

## Core relationships

- `restaurants` 1..n `restaurant_branches`
- `restaurant_branches` 1..n `restaurant_tables`
- `restaurant_branches` 1..n `menu_categories`
- `menu_categories` 1..n `menu_items`
- `menu_items` 1..n `menu_item_variants`
- `menu_items` n..n `ingredients` through `ingredient_menu_item`
- `restaurant_branches` 1..n `orders`
- `orders` 1..n `order_items`
- `orders` 1..n `payments`
- `orders` 1..n `transactions`
- `orders` 1..n `kitchen_orders`
- `restaurant_branches` 1..n `reservations`
- `restaurant_branches` 1..n `ingredients`
- `restaurant_branches` 1..n `suppliers`
- `suppliers` 1..n `purchase_orders`
- `purchase_orders` 1..n `purchase_order_items`
- `users` n..1 `restaurants`
- `users` n..1 `restaurant_branches`

## Why this schema

- Branch scoping keeps multi-location analytics and operations separate.
- Orders are decoupled from payments and transactions so split payments, retries, refunds, and gateways can evolve cleanly.
- `kitchen_orders` keeps kitchen workflow independent from payment workflow.
- `ingredient_menu_item` allows recipe/BOM tracking for automatic stock consumption later.
- `activity_logs` provides auditability without polluting transactional tables.

## Indexing strategy

- Frequent filters are indexed on branch and status fields.
- Slugs and branch codes are unique.
- Order number is globally unique for receipt and tracking workflows.
- Reservation time is indexed for calendar queries.
