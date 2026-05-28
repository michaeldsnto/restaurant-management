type Props = {

    title: string;

    description?: string;

    action?: React.ReactNode;

};

export default function SectionHeader({
    title,
    description,
    action,
}: Props) {

    return (

        <div className="
      mb-5
      flex
      items-start
      justify-between
      gap-4
    ">

            <div>

                <h2 className="
          text-lg
          font-semibold
          text-white
        ">
                    {title}
                </h2>

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

            {action}

        </div>

    );
}