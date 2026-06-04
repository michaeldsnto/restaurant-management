import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import MenuItemForm from "../components/menu-item-form";

import { useMenuItem } from "../hooks/use-menu-item";
import { useMenuCategories } from "../hooks/use-menu-categories";
import { useUpdateMenuItem } from "../hooks/use-update-menu-item";

import LoadingScreen from "@/components/common/loading-screen";
import ErrorState from "@/components/common/error-state";

export default function EditMenuPage() {

    const navigate =
        useNavigate();

    const { id } =
        useParams();

    const menuId =
        Number(id);

    const {
        data: menuResponse,
        isLoading,
        isError,
    } =
        useMenuItem(
            menuId
        );

    const {
        data: categoryResponse,
    } =
        useMenuCategories();

    const updateMutation =
        useUpdateMenuItem();

    const handleSubmit =
        async (
            values: any
        ) => {

            await updateMutation.mutateAsync({

                id: menuId,

                payload:
                    values,

            });

            navigate(
                "/menu"
            );

        };

    if (isLoading) {

        return (
            <LoadingScreen />
        );

    }

    if (isError) {

        return (

            <ErrorState
                title="
        Failed to load menu
      "
                description="
        Unable to retrieve menu data.
      "
            />

        );

    }

    const menu =
        menuResponse?.data;

    const categories =
        categoryResponse?.data ??
        [];

    return (

        <div
            className="
      mx-auto
      max-w-5xl
      space-y-6
    "
        >

            <div>

                <h1
                    className="
          text-2xl
          font-bold
        "
                >
                    Edit Menu Item
                </h1>

                <p
                    className="
          text-sm
          text-zinc-500
        "
                >
                    Update menu information
                </p>

            </div>

            <div
                className="
        rounded-2xl
        border
        bg-white
        p-6
        shadow-sm
        dark:border-zinc-800
        dark:bg-zinc-900
      "
            >

                <MenuItemForm

                    categories={
                        categories
                    }

                    defaultValues={{
                        category_id:
                            menu.category_id,

                        name:
                            menu.name,

                        description:
                            menu.description,

                        base_price:
                            menu.base_price,

                        is_available:
                            menu.is_available,

                        image:
                            menu.image,
                    }}

                    onSubmit={
                        handleSubmit
                    }

                />

            </div>

        </div>

    );

}