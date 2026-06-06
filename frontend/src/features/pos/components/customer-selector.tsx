interface Customer {

    id: number;

    name: string;

}

interface Props {

    customers: Customer[];

    value?: number;

    onChange: (
        customerId: number
    ) => void;

}

export default function CustomerSelector({
    customers,
    value,
    onChange,
}: Props) {

    return (

        <select
            value={value}
            onChange={(e) =>
                onChange(
                    Number(
                        e.target.value
                    )
                )
            }
            className="
      w-full
      rounded-lg
      border
      px-3
      py-2
      "
        >

            <option value="">
                Walk In Customer
            </option>

            {customers.map(
                (
                    customer
                ) => (

                    <option
                        key={
                            customer.id
                        }
                        value={
                            customer.id
                        }
                    >
                        {customer.name}
                    </option>

                )
            )}

        </select>

    );

}