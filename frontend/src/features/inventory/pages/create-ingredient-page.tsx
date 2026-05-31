import IngredientForm
    from "../components/ingredient-form";

import {
    useCreateIngredient,
} from "../hooks/use-create-ingredient";

export default function CreateIngredientPage() {

    const mutation =
        useCreateIngredient();

    return (

        <div className="
      max-w-3xl
      space-y-6
    ">

            <h1 className="
        text-3xl
        font-bold
      ">
                Create Ingredient
            </h1>

            <IngredientForm
                onSubmit={(data) =>
                    mutation.mutate(
                        data
                    )
                }
            />

        </div>

    );

}