type Props = {

    open: boolean;

    title: string;

    description?: string;

    onConfirm: () => void;

    onCancel: () => void;

};

export default function ConfirmDialog({
    open,
    title,
    description,
    onConfirm,
    onCancel,
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
    ">

            <div className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        p-6
      ">

                <h3 className="
          text-lg
          font-semibold
          text-white
        ">
                    {title}
                </h3>

                {description && (

                    <p className="
            mt-2
            text-sm
            text-zinc-400
          ">
                        {description}
                    </p>

                )}

                <div className="
          mt-6
          flex
          justify-end
          gap-3
        ">

                    <button
                        onClick={onCancel}
                        className="
              rounded-2xl
              border
              border-zinc-800
              px-5
              py-2.5
              text-sm
              text-zinc-300
              hover:bg-zinc-900
            "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
              rounded-2xl
              bg-red-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              hover:bg-red-500
            "
                    >
                        Confirm
                    </button>

                </div>

            </div>

        </div>

    );
}