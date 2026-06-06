interface Discount {

    id: number;

    name: string;

    amount: number;

}

interface Props {

    discounts:
    Discount[];

    onSelect: (
        discount:
            Discount
    ) => void;

}

export default function DiscountModal({
    discounts,
    onSelect,
}: Props) {

    return (

        <div
            className="
      space-y-3
      "
        >

            {discounts.map(
                (
                    discount
                ) => (

                    <button
                        key={
                            discount.id
                        }
                        onClick={() =>
                            onSelect(
                                discount
                            )
                        }
                        className="
            w-full
            rounded-lg
            border
            p-3
            text-left
            "
                    >

                        {discount.name}

                    </button>

                )
            )}

        </div>

    );

}