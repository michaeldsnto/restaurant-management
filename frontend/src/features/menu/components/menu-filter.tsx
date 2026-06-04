import type {
    MenuCategory,
} from "../types/menu-category";

interface Props {

    categories:
    MenuCategory[];

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function MenuFilter({
    categories,
    value,
    onChange,
}: Props) {

    return (

        <select
            value={value}
            onChange={(e) =>
                onChange(
                    e.target.value
                )
            }
            className="
      rounded-xl
      border
      border-zinc-800
      bg-zinc-900
      px-4
      py-3
    "
        >

            <option value="">
                All Categories
            </option>

            {categories.map(
                (category) => (

                    <option
                        key={
                            category.id
                        }
                        value={
                            category.id
                        }
                    >

                        {category.name}

                    </option>

                )
            )}

        </select>

    );

}