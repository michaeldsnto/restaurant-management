import {
    useParams,
} from "react-router-dom";

import {
    useIngredient,
} from "../hooks/use-ingredient";

import IngredientDetails
    from "../components/ingredient-details";

export default function IngredientDetailsPage() {

    const { id } =
        useParams();

    const {
        data,
        isLoading,
    } = useIngredient(
        Number(id)
    );

    if (isLoading) {

        return (
            <div>
                Loading...
            </div>
        );

    }

    if (!data) {

        return (
            <div>
                Ingredient not found
            </div>
        );

    }

    return (

        <IngredientDetails
            ingredient={
                data.data
            }
        />

    );

}