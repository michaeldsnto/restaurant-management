interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function MenuSearch({
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
            placeholder="
      Search menu...
    "
            className="
      w-full
      rounded-xl
      border
      border-zinc-800
      bg-zinc-900
      px-4
      py-3
    "
        />

    );

}