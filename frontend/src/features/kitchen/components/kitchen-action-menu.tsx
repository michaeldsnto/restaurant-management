import {
    MoreVertical,
} from "lucide-react";

interface Props {

    onView: () => void;

}

export default function KitchenActionMenu({
    onView,
}: Props) {

    return (

        <button
            onClick={onView}
            className="
      rounded-lg
      p-2
      hover:bg-zinc-800
    "
        >

            <MoreVertical
                size={18}
            />

        </button>

    );

}