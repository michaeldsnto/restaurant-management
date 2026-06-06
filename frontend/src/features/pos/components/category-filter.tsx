interface Category {

    id: number;

    name: string;

}

interface Props {

    categories: Category[];

    selected?: number;

    onSelect: (
        id?: number
    ) => void;

}

export default function CategoryFilter({
    categories,
    selected,
    onSelect,
}: Props) {

    return (

        <div
            className="
      flex
      gap-2
      overflow-x-auto
      "
        >

            <button
                onClick={() =>
                    onSelect(
                        undefined
                    )
                }
                className={`
          rounded-full
          px-4
          py-2
          text-sm
          ${!selected
                        ? "bg-primary text-white"
                        : "border"
                    }
        `}
            >
                All
            </button>

            {categories.map(
                (
                    category
                ) => (

                    <button
                        key={
                            category.id
                        }
                        onClick={() =>
                            onSelect(
                                category.id
                            )
                        }
                        className={`
              rounded-full
              px-4
              py-2
              text-sm
              ${selected ===
                                category.id
                                ? "bg-primary text-white"
                                : "border"
                            }
            `}
                    >
                        {category.name}
                    </button>

                )
            )}

        </div>

    );

}