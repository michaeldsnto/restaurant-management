import { TriangleAlert } from "lucide-react";

type Props = {

    title?: string;

    description?: string;

    action?: React.ReactNode;

};

export default function ErrorState({
    title = "Something went wrong",
    description = "An unexpected error occurred while processing your request.",
    action,
}: Props) {

    return (

        <div className="
      flex
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-red-500/20
      bg-red-500/5
      px-8
      py-16
      text-center
    ">

            <div className="
        mb-5
        rounded-2xl
        bg-red-500/10
        p-4
      ">

                <TriangleAlert
                    className="
            h-8
            w-8
            text-red-400
          "
                />

            </div>

            <h3 className="
        text-lg
        font-semibold
        text-white
      ">
                {title}
            </h3>

            <p className="
        mt-2
        max-w-md
        text-sm
        leading-relaxed
        text-zinc-400
      ">
                {description}
            </p>

            {action && (

                <div className="mt-6">
                    {action}
                </div>

            )}

        </div>

    );
}