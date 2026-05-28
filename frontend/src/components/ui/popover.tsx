type Props = {

    open: boolean;

    content: React.ReactNode;

    children: React.ReactNode;

};

export default function Popover({
    open,
    content,
    children,
}: Props) {

    return (

        <div className="relative">

            {children}

            {open && (

                <div className="
          absolute
          z-50
          mt-3
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950
          p-4
          shadow-2xl
        ">

                    {content}

                </div>

            )}

        </div>

    );
}