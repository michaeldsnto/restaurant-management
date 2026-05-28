import { Inbox } from "lucide-react";

type Props = {

    title: string;

    description?: string;

};

export default function EmptyState({
    title,
    description,
}: Props) {

    return (

        <div className="
      flex
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-dashed
      border-zinc-800
      bg-zinc-900/40
      p-14
      text-center
    ">

            <div className="
        mb-4
        rounded-2xl
        bg-zinc-800
        p-4
      ">
                <Inbox className="h-8 w-8 text-zinc-400" />
            </div>

            <h3 className="
        text-lg
        font-semibold
      ">
                {title}
            </h3>

            {description && (

                <p className="
          mt-2
          max-w-sm
          text-sm
          text-zinc-400
        ">
                    {description}
                </p>

            )}

        </div>

    );
}