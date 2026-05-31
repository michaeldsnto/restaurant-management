import type { Ingredient } from "../types/ingredient";

interface Props {

    ingredient: Ingredient;

}

export default function IngredientDetails({
    ingredient,
}: Props) {

    return (

        <div
            className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
    "
        >

            <h2
                className="
        text-2xl
        font-bold
      "
            >
                {ingredient.name}
            </h2>

            <div
                className="
        mt-6
        grid
        gap-4
        md:grid-cols-2
      "
            >

                <div>

                    <p>SKU</p>

                    <strong>
                        {ingredient.sku}
                    </strong>

                </div>

                <div>

                    <p>Unit</p>

                    <strong>
                        {ingredient.unit}
                    </strong>

                </div>

                <div>

                    <p>Current Stock</p>

                    <strong>
                        {
                            ingredient.current_stock
                        }
                    </strong>

                </div>

                <div>

                    <p>Minimum Stock</p>

                    <strong>
                        {
                            ingredient.minimum_stock
                        }
                    </strong>

                </div>

            </div>

        </div>

    );

}