type Props = {

    open: boolean;

    title?: string;

    children: React.ReactNode;

    onClose: () => void;

};

export default function Modal({
    open,
    title,
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
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-sm
      p-4
    ">

            <div className="
        w-full
        max-w-lg
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        p-6
      ">

                <div className="
          mb-6
          flex
          items-center
          justify-between
        ">

                    <h2 className="
            text-lg
            font-semibold
            text-white
          ">
                        {title}
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

                {children}

            </div>

        </div>

    );
}