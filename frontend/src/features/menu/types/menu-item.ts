import type { MenuCategory } from "./menu-category";
import type { MenuVariant } from "./menu-variant";
import type { MenuModifier } from "./menu-modifier";

export interface MenuItem {

    id: number;

    category_id: number;

    category?: MenuCategory;

    name: string;

    slug: string;

    description?: string;

    image?: string;

    base_price: number;

    is_available: boolean;

    variants?: MenuVariant[];

    modifiers?: MenuModifier[];

    created_at: string;

    updated_at: string;

}