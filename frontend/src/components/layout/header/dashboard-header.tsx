type Props = {

    title: string;

    description?: string;

    action?: React.ReactNode;

};

export default function DashboardHeader({
    title,
    description,
    action,
}: Props) {

    return (

        <div className="
      mb-8
      flex
      flex-col
      gap-5
      lg:flex-row
      lg:items-center
      lg:justify-between
    ">

            <div>

                <h1 className="
          text-3xl
          font-bold
          tracking-tight
          text-white
        ">
                    {title}
                </h1>

                {description && (

                    <p className="
            mt-2
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