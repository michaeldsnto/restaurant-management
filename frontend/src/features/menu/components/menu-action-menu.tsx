import {
    MoreVertical,
    Pencil,
    Trash2,
} from "lucide-react";

interface Props {

    onEdit: () => void;

    onDelete: () => void;

}

export default function MenuActionMenu({
    onEdit,
    onDelete,
}: Props) {

    return (

        <div
            className="
      flex
      items-center
      gap-2
    "
        >

            <button
                onClick={onEdit}
                className="
        rounded-lg
        p-2
        hover:bg-zinc-100
      "
            >

                <Pencil
                    size={18}
                />

            </button>

            <button
                onClick={onDelete}
                className="
        rounded-lg
        p-2
        text-red-500
        hover:bg-red-50
      "
            >

                <Trash2
                    size={18}
                />

            </button>

            <button
                className="
        rounded-lg
        p-2
      "
            >

                <MoreVertical
                    size={18}
                />

            </button>

        </div>

    );

}