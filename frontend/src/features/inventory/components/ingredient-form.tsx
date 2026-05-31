import { useForm }
    from "react-hook-form";

import type {
    IngredientFormData,
} from "../types/ingredient";

interface Props {

    defaultValues?: IngredientFormData;

    onSubmit: (
        data: IngredientFormData
    ) => void;

}

export default function IngredientForm({
    defaultValues,
    onSubmit,
}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<IngredientFormData>({
        defaultValues,
    });

    return (

        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            className="space-y-4"
        >

            <input
                {...register("sku")}
                placeholder="SKU"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register("name")}
                placeholder="Ingredient Name"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register(
                    "current_stock",
                    {
                        valueAsNumber: true,
                    }
                )}
                type="number"
                placeholder="Current Stock"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register(
                    "minimum_stock",
                    {
                        valueAsNumber: true,
                    }
                )}
                type="number"
                placeholder="Minimum Stock"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register(
                    "cost_per_unit",
                    {
                        valueAsNumber: true,
                    }
                )}
                type="number"
                placeholder="Cost"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <button
                type="submit"
                className="
        rounded-xl
        bg-violet-600
        px-5
        py-3
        text-white
      "
            >
                Save Ingredient
            </button>

        </form>

    );
}