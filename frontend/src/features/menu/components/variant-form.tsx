import {
    useForm,
} from "react-hook-form";

export default function VariantForm({
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
          Variant Name
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
                {...register(
                    "price_adjustment"
                )}
                placeholder="
          Additional Price
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
                Save Variant
            </button>

        </form>

    );

}