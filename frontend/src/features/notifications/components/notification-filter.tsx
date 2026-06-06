interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function NotificationFilter({
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
      rounded-lg
      border
      px-3
      py-2
    "
        >

            <option value="">
                All
            </option>

            <option value="order">
                Order
            </option>

            <option value="inventory">
                Inventory
            </option>

            <option value="kitchen">
                Kitchen
            </option>

            <option value="reservation">
                Reservation
            </option>

            <option value="payment">
                Payment
            </option>

        </select>

    );

}