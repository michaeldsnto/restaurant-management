interface Tax {

    id: number;

    name: string;

    percentage: number;

}

interface Props {

    taxes: Tax[];

    onSelect: (
        tax: Tax
    ) => void;

}

export default function TaxSelector({
    taxes,
    onSelect,
}: Props) {

    return (

        <select
            onChange={(e) => {

                const tax =
                    taxes.find(
                        (
                            item
                        ) =>
                            item.id ===
                            Number(
                                e.target.value
                            )
                    );

                if (tax) {

                    onSelect(
                        tax
                    );

                }

            }}
            className="
      w-full
      rounded-lg
      border
      px-3
      py-2
      "
        >

            <option>
                Select Tax
            </option>

            {taxes.map(
                (
                    tax
                ) => (

                    <option
                        key={
                            tax.id
                        }
                        value={
                            tax.id
                        }
                    >
                        {tax.name}
                        {" "}
                        (
                        {tax.percentage}
                        %)
                    </option>

                )
            )}

        </select>

    );

}