import {
    useForm,
} from "react-hook-form";

interface Props {

    categories: any[];

    defaultValues?: any;

    onSubmit: (
        data: any
    ) => void;

}

export default function MenuItemForm({
    categories,
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
      space-y-5
    "
        >

            <select
                {...register(
                    "category_id"
                )}
                className="
        w-full
        rounded-xl
        border
        p-3
      "
            >

                {categories.map(
                    (
                        category
                    ) => (

                        <option
                            key={
                                category.id
                            }
                            value={
                                category.id
                            }
                        >

                            {
                                category.name
                            }

                        </option>

                    )
                )}

            </select>

            <input
                {...register("name")}
                placeholder="Menu Name"
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

            <input
                type="number"
                {...register(
                    "base_price"
                )}
                placeholder="Price"
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
                Save Menu
            </button>

        </form>

    );

}