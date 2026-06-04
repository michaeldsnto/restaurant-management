interface Props {

    ingredients: any[];

    onSelect: (
        ingredient: any
    ) => void;

}

export default function IngredientSelector({
    ingredients,
    onSelect,
}: Props) {

    return (

        <div
            className="
      grid
      gap-3
    "
        >

            {ingredients.map(
                (
                    ingredient
                ) => (

                    <button
                        key={
                            ingredient.id
                        }
                        onClick={() =>
                            onSelect(
                                ingredient
                            )
                        }
                        className="
            rounded-xl
            border
            p-3
            text-left
          "
                    >

                        {
                            ingredient.name
                        }

                    </button>

                )
            )}

        </div>

    );

}