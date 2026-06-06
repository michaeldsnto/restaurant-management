interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function CartNote({
    value,
    onChange,
}: Props) {

    return (

        <textarea
            rows={3}
            value={value}
            onChange={(e) =>
                onChange(
                    e.target.value
                )
            }
            placeholder="Order note..."
            className="
      w-full
      rounded-lg
      border
      px-3
      py-2
      "
        />

    );

}