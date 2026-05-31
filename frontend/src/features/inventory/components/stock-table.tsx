import type {
    Ingredient,
} from "../types/ingredient";

import IngredientStatusBadge
    from "./ingredient-status-badge";

interface Props {

    ingredients:
    Ingredient[];

}

export default function StockTable({
    ingredients,
}: Props) {

    return (

        <div className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
    ">

            <table className="w-full">

                <thead>

                    <tr className="bg-zinc-900">

                        <th className="p-4 text-left">
                            SKU
                        </th>

                        <th className="p-4 text-left">
                            Ingredient
                        </th>

                        <th className="p-4 text-left">
                            Stock
                        </th>

                        <th className="p-4 text-left">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {ingredients.map(
                        (ingredient) => (

                            <tr
                                key={ingredient.id}
                                className="
                  border-t
                  border-zinc-800
                "
                            >

                                <td className="p-4">
                                    {ingredient.sku}
                                </td>

                                <td className="p-4">
                                    {ingredient.name}
                                </td>

                                <td className="p-4">
                                    {ingredient.current_stock}
                                </td>

                                <td className="p-4">

                                    <IngredientStatusBadge
                                        status={
                                            ingredient.status
                                        }
                                    />

                                </td>

                            </tr>

                        )
                    )}

                </tbody>

            </table>

        </div>

    );
}