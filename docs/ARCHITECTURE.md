# Restaurant Management System Architecture

## Stack

- Backend: Laravel 12, Sanctum, Reverb-ready event flow, queue, Spatie Permission
- Frontend: React, TypeScript, Vite, TailwindCSS, TanStack Query, Zustand, Axios
- Infra: MySQL, Redis, Docker, Nginx, Supervisor, GitHub Actions

## Backend structure

The backend is organized to keep controllers thin and business logic isolated.

```text
app/
├── DTOs
├── Events
├── Exceptions
├── Helpers
├── Http
│   ├── Controllers/API/V1
│   ├── Requests
│   └── Resources
├── Interfaces/Repositories
├── Jobs
├── Listeners
├── Models
├── Notifications
├── Policies
├── Providers
├── Repositories/Eloquent
├── Services
└── Traits
```

## Service flow

1. `FormRequest` validates input.
2. Controller authorizes and forwards payload to service.
3. Service coordinates transactions and domain rules.
4. Repository performs persistence operations.
5. `API Resource` transforms output.
6. `Event -> Listener -> Job/Notification` handles side effects.

## Frontend structure

```text
src/
├── api
├── app
├── components
│   ├── layout
│   └── ui
├── features
│   ├── auth
│   ├── dashboard
│   └── kitchen
├── layouts
├── pages
├── services
├── store
├── styles
├── types
└── utils
```

## Authentication and authorization

- Sanctum token auth for SPA/mobile integration
- Spatie roles for:
  - Super Admin
  - Restaurant Owner
  - Manager
  - Cashier
  - Waiter
  - Kitchen Staff
  - Customer
- Policy layer protects menu and order operations

## Realtime path

- `OrderPlaced` event dispatches queueable listener
- Listener writes activity log, sends notifications, and invalidates dashboard cache
- Reverb/Pusher can be attached at the event or notification broadcast layer next

## Scaling notes

- Scope all operational entities by `restaurant_id` and `restaurant_branch_id`
- Keep analytics read models separate if dashboard volume grows
- Move inventory deduction into dedicated stock ledger services before enabling auto-consumption
- Add websocket channels per branch for kitchen, waiter, and reservation updates
