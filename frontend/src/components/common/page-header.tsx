type Props = {

    title: string;

    description?: string;

    action?: React.ReactNode;

};

export default function PageHeader({
    title,
    description,
    action,
}: Props) {

    return (

        <div className="
      flex
      items-center
      justify-between
      gap-4
      mb-8
    ">

            <div>

                <h1 className="
          text-3xl
          font-bold
          tracking-tight
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