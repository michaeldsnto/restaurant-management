type Props = {

    title: string;

    description?: string;

};

export default function Toast({
    title,
    description,
}: Props) {

    return (

        <div className="
      min-w-[320px]
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-950
      p-4
      shadow-2xl
    ">

            <h4 className="
        text-sm
        font-semibold
        text-white
      ">
                {title}
            </h4>

            {description && (

                <p className="
          mt-1
          text-sm
          text-zinc-400
        ">
                    {description}
                </p>

            )}

        </div>

    );
}