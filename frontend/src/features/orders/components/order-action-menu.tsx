import {
    MoreHorizontal,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {

    onView: () => void;

    onEdit: () => void;

    onDelete: () => void;

}

export default function OrderActionMenu({
    onView,
    onEdit,
    onDelete,
}: Props) {

    return (

        <DropdownMenu>

            <DropdownMenuTrigger
                asChild
            >

                <button>

                    <MoreHorizontal />

                </button>

            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <DropdownMenuItem
                    onClick={
                        onView
                    }
                >
                    View
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={
                        onEdit
                    }
                >
                    Edit
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={
                        onDelete
                    }
                >
                    Delete
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>

    );

}