import {
    useState,
} from "react";

import MenuSearch
    from "../components/menu-search";

import MenuFilter
    from "../components/menu-filter";

import MenuItemCard
    from "../components/menu-item-card";

import {
    useMenuItems,
} from "../hooks/use-menu-items";

import {
    useMenuCategories,
} from "../hooks/use-menu-categories";

export default function MenuPage() {

    const [
        search,
        setSearch,
    ] = useState("");

    const [
        category,
        setCategory,
    ] = useState("");

    const {
        data: items,
    } =
        useMenuItems({

            search,

            category,

        });

    const {
        data: categories,
    } =
        useMenuCategories();

    return (

        <div
            className="
      space-y-6
    "
        >

            <div
                className="
        flex
        gap-4
      "
            >

                <MenuSearch
                    value={search}
                    onChange={
                        setSearch
                    }
                />

                <MenuFilter
                    value={
                        category
                    }
                    onChange={
                        setCategory
                    }
                    categories={
                        categories
                            ?.data ??
                        []
                    }
                />

            </div>

            <div
                className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
            >

                {items?.data?.map(
                    (item: any) => (

                        <MenuItemCard
                            key={item.id}
                            item={item}
                        />

                    )
                )}

            </div>

        </div>

    );

}