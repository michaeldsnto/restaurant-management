import {
    useState,
} from "react";

export default function RecipeBuilder() {

    const [
        ingredients,
        setIngredients,
    ] = useState<any[]>([]);

    const addIngredient = (
        ingredient: any
    ) => {

        setIngredients(
            [
                ...ingredients,

                {
                    ...ingredient,

                    quantity: 1,
                },
            ]
        );

    };

    return (

        <div
            className="
      space-y-4
    "
        >

            <h3
                className="
        text-lg
        font-semibold
      "
            >
                Recipe Builder
            </h3>

            {ingredients.map(
                (
                    ingredient,
                    index
                ) => (

                    <div
                        key={index}
                        className="
            flex
            items-center
            gap-3
          "
                    >

                        <span>
                            {
                                ingredient.name
                            }
                        </span>

                        <input
                            type="number"
                            value={
                                ingredient.quantity
                            }
                            className="
              w-24
              rounded-lg
              border
              p-2
            "
                        />

                    </div>

                )
            )}

        </div>

    );

}