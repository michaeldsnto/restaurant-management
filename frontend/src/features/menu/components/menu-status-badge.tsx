interface Props {

    active: boolean;

}

export default function MenuStatusBadge({
    active,
}: Props) {

    return (

        <span
            className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-medium

      ${active

                    ? "bg-green-500/10 text-green-500"

                    : "bg-red-500/10 text-red-500"
                }
    `}
        >

            {active
                ? "Available"
                : "Unavailable"}

        </span>

    );

}