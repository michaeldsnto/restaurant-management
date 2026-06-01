interface Props {

    active: string;

    onChange: (
        value: string
    ) => void;

}

export default function KitchenStatusTabs({
    active,
    onChange,
}: Props) {

    const tabs = [

        "all",

        "pending",

        "preparing",

        "ready",

        "served",

    ];

    return (

        <div
            className="
      flex
      gap-2
      flex-wrap
    "
        >

            {tabs.map(
                (tab) => (

                    <button
                        key={tab}
                        onClick={() =>
                            onChange(
                                tab
                            )
                        }
                        className={`
              rounded-xl
              px-4
              py-2
              text-sm

              ${active === tab

                                ? "bg-violet-600 text-white"

                                : "bg-zinc-900"
                            }
            `}
                    >

                        {tab}

                    </button>

                )
            )}

        </div>

    );

}