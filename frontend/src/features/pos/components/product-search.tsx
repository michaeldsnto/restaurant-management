interface ProductSearchProps {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function ProductSearch({
    value,
    onChange,
}: ProductSearchProps) {

    return (

        <input
            type="text"
            value={value}
            onChange={(e) =>
                onChange(
                    e.target.value
                )
            }
            placeholder="Search menu..."
            className="
      w-full
      rounded-xl
      border
      bg-background
      px-4
      py-3
      outline-none
      focus:ring-2
      focus:ring-primary
      "
        />

    );

}