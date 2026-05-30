import {
    MoreHorizontal,
    Pencil,
    Trash2,
    Eye,
} from "lucide-react";

interface Props {

    onView: () => void;

    onEdit: () => void;

    onDelete: () => void;

}

export default function EmployeeActionMenu({
    onView,
    onEdit,
    onDelete,
}: Props) {

    return (

        <div className="
      flex
      items-center
      gap-2
    ">

            <button
                onClick={onView}
                className="
          rounded-xl
          p-2
          hover:bg-zinc-800
        "
            >

                <Eye size={18} />

            </button>

            <button
                onClick={onEdit}
                className="
          rounded-xl
          p-2
          hover:bg-zinc-800
        "
            >

                <Pencil size={18} />

            </button>

            <button
                onClick={onDelete}
                className="
          rounded-xl
          p-2
          text-red-400
          hover:bg-zinc-800
        "
            >

                <Trash2 size={18} />

            </button>

            <button
                className="
          rounded-xl
          p-2
          hover:bg-zinc-800
        "
            >

                <MoreHorizontal size={18} />

            </button>

        </div>

    );

}