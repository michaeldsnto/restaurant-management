import {
    useForm,
} from "react-hook-form";

export default function ModifierForm({
    onSubmit,
}: any) {

    const {
        register,
        handleSubmit,
    } = useForm();

    return (

        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            className="
      space-y-4
    "
        >

            <input
                {...register("name")}
                placeholder="
          Modifier Name
        "
                className="
        w-full
        rounded-xl
        border
        p-3
      "
            />

            <input
                type="number"
                {...register("price")}
                placeholder="
          Price
        "
                className="
        w-full
        rounded-xl
        border
        p-3
      "
            />

            <button
                className="
        rounded-xl
        bg-violet-600
        px-5
        py-3
      "
            >
                Save Modifier
            </button>

        </form>

    );

}