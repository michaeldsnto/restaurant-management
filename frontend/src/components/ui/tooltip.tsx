type Props = {

    label: string;

    children: React.ReactNode;

};

export default function Tooltip({
    label,
    children,
}: Props) {

    return (

        <div className="
      group
      relative
      inline-flex
    ">

            {children}

            <div className="
        pointer-events-none
        absolute
        -top-10
        left-1/2
        hidden
        -translate-x-1/2
        whitespace-nowrap
        rounded-xl
        bg-zinc-800
        px-3
        py-2
        text-xs
        text-white
        group-hover:block
      ">

                {label}

            </div>

        </div>

    );
}