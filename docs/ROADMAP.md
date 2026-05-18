# Development Roadmap

## Phase 1

- Stabilize migrations against MySQL
- Seed roles, branch, tables, base menu, and tax/discount rules
- Replace static frontend dashboard data with live TanStack Query hooks
- Add reservation, inventory, and settings API modules matching the current structure

## Phase 2

- Add waiter mobile ordering flow
- Add QR guest ordering endpoints and public menu session flow
- Add stock ledger and automatic ingredient deduction
- Add payment gateway abstraction and refund handling

## Phase 3

- Add Reverb channels per branch
- Add KDS live updates with optimistic status handling
- Add reservation conflict detection and time-slot capacity engine
- Add analytics aggregates and cached reporting tables

## Phase 4

- Add multi-tenant onboarding
- Add branch-aware billing and subscription layer
- Add report exports, scheduled summaries, and owner notifications
- Add observability, smoke tests, and release workflows
