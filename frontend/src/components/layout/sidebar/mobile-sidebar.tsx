type Props = {

    open: boolean;

    children: React.ReactNode;

    onClose: () => void;

};

export default function MobileSidebar({
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
      bg-black/70
      lg:hidden
    ">

            <div className="
        h-full
        w-72
        border-r
        border-zinc-800
        bg-zinc-950
      ">

                <div className="
          flex
          items-center
          justify-between
          border-b
          border-zinc-800
          p-5
        ">

                    <h2 className="
            text-lg
            font-semibold
            text-white
          ">
                        Menu
                    </h2>

                    <button
                        onClick={onClose}
                        className="
              text-zinc-500
              hover:text-white
            "
                    >
                        ✕
                    </button>

                </div>

                <div className="p-4">

                    {children}

                </div>

            </div>

        </div>

    );
}