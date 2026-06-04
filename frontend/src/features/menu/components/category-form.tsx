import {
    useForm,
} from "react-hook-form";

interface Props {

    defaultValues?: any;

    onSubmit: (
        data: any
    ) => void;

}

export default function CategoryForm({
    defaultValues,
    onSubmit,
}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm({

        defaultValues,

    });

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
          Category Name
        "
                className="
        w-full
        rounded-xl
        border
        p-3
      "
            />

            <textarea
                {...register(
                    "description"
                )}
                placeholder="
          Description
        "
                className="
        w-full
        rounded-xl
        border
        p-3
      "
            />

            <button
                type="submit"
                className="
        rounded-xl
        bg-violet-600
        px-5
        py-3
      "
            >
                Save Category
            </button>

        </form>

    );

}