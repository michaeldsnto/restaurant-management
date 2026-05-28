type Props = {

    checked: boolean;

    onChange: (
        checked: boolean
    ) => void;

};

export default function Switch({
    checked,
    onChange,
}: Props) {

    return (

        <button
            onClick={() =>
                onChange(!checked)
            }
            className={`
        relative
        h-7
        w-12
        rounded-full
        transition-all
        ${checked
                    ? "bg-violet-600"
                    : "bg-zinc-700"}
      `}
        >

            <span
                className={`
          absolute
          top-1
          h-5
          w-5
          rounded-full
          bg-white
          transition-all
          ${checked
                        ? "left-6"
                        : "left-1"}
        `}
            />

        </button>

    );
}