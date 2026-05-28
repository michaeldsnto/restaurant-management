type Props = {

    open: boolean;

    children: React.ReactNode;

    onClose: () => void;

};

export default function Drawer({
    open,
    children,
    onClose,
}: Props) {

    if (!open) {
        return null;
    }

    return (

        <div className="
      fixed
      inset-0
      z-50
      bg-black/60
    ">

            <div className="
        absolute
        right-0
        top-0
        h-full
        w-full
        max-w-md
        border-l
        border-zinc-800
        bg-zinc-950
        p-6
      ">

                <button
                    onClick={onClose}
                    className="
            mb-6
            text-zinc-500
          "
                >
                    Close
                </button>

                {children}

            </div>

        </div>

    );
}