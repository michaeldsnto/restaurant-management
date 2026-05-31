import {
    useParams,
} from "react-router-dom";

import IngredientForm
    from "../components/ingredient-form";

import {
    useIngredient,
} from "../hooks/use-ingredient";

import {
    useUpdateIngredient,
} from "../hooks/use-update-ingredient";

export default function EditIngredientPage() {

    const { id } =
        useParams();

    const {
        data,
    } = useIngredient(
        Number(id)
    );

    const mutation =
        useUpdateIngredient();

    if (!data) {
        return null;
    }

    return (

        <div className="
      max-w-3xl
      space-y-6
    ">

            <h1 className="
        text-3xl
        font-bold
      ">
                Edit Ingredient
            </h1>

            <IngredientForm
                defaultValues={
                    data.data
                }
                onSubmit={(
                    formData
                ) =>
                    mutation.mutate({
                        id: Number(id),
                        data: formData,
                    })
                }
            />

        </div>

    );

}