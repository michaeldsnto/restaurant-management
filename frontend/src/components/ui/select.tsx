import clsx from "clsx";

type Option = {

    label: string;

    value: string;

    disabled?: boolean;

};

type Props = {

    label?: string;

    placeholder?: string;

    value?: string;

    error?: string;

    options: Option[];

    onChange: (
        value: string
    ) => void;

    className?: string;

};

export default function Select({
    label,
    placeholder = "Select option",
    value,
    error,
    options,
    onChange,
    className,
}: Props) {

    return (

        <div className="w-full">

            {label && (

                <label className="
          mb-2
          block
          text-sm
          font-medium
          text-zinc-300
        ">
                    {label}
                </label>

            )}

            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className={clsx(
                    "h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 text-sm text-white outline-none transition-all focus:border-violet-500 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
            >

                <option value="">
                    {placeholder}
                </option>

                {options.map((option) => (

                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>

                ))}

            </select>

            {error && (

                <p className="
          mt-2
          text-xs
          text-red-400
        ">
                    {error}
                </p>

            )}

        </div>

    );
}