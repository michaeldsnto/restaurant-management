type Option = {

    label: string;

    value: string;

};

type Props = {

    options: Option[];

    value: string;

    onChange: (
        value: string
    ) => void;

};

export default function RadioGroup({
    options,
    value,
    onChange,
}: Props) {

    return (

        <div className="
      flex
      flex-wrap
      gap-3
    ">

            {options.map((option) => (

                <button
                    key={option.value}
                    onClick={() =>
                        onChange(option.value)
                    }
                    className={`
            rounded-2xl
            border
            px-4
            py-2
            text-sm
            transition-all
            ${value === option.value
                            ? "border-violet-500 bg-violet-600 text-white"
                            : "border-zinc-800 bg-zinc-900 text-zinc-400"}
          `}
                >
                    {option.label}
                </button>

            ))}

        </div>

    );
}