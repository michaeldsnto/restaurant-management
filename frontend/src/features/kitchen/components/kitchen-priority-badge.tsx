interface Props {

    priority:
    | "normal"
    | "high"
    | "urgent";

}

export default function KitchenPriorityBadge({
    priority,
}: Props) {

    const colors = {

        normal:
            "bg-sky-500/10 text-sky-400",

        high:
            "bg-yellow-500/10 text-yellow-400",

        urgent:
            "bg-red-500/10 text-red-400",

    };

    return (

        <span
            className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-medium
      ${colors[priority]}
    `}
        >

            {priority}

        </span>

    );

}