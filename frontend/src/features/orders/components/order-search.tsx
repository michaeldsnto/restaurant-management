interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function OrderSearch({
    value,
    onChange,
}: Props) {

    return (

        <input
            value={value}
            onChange={(e) =>
                onChange(
                    e.target.value
                )
            }
            placeholder="Search order..."
            className="
      border
      rounded-lg
      px-4
      py-2
      w-full
    "
        />

    );

}