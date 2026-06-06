interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function OrderFilter({
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
      border
      rounded-lg
      px-3
      py-2
    "
        >

            <option value="">
                All
            </option>

            <option value="pending">
                Pending
            </option>

            <option value="preparing">
                Preparing
            </option>

            <option value="completed">
                Completed
            </option>

        </select>

    );

}