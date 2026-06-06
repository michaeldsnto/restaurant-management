interface TimelineItem {

    status: string;

    timestamp: string;

}

interface Props {

    items:
    TimelineItem[];

}

export default function OrderTimeline({
    items,
}: Props) {

    return (

        <div
            className="
      space-y-4
    "
        >

            {items.map(
                (
                    item,
                    index
                ) => (

                    <div
                        key={index}
                        className="
            flex
            gap-4
          "
                    >

                        <div
                            className="
              h-3
              w-3
              rounded-full
              bg-primary
              mt-2
            "
                        />

                        <div>

                            <p
                                className="
                font-medium
                capitalize
              "
                            >
                                {item.status}
                            </p>

                            <p
                                className="
                text-sm
                text-muted-foreground
              "
                            >
                                {item.timestamp}
                            </p>

                        </div>

                    </div>

                )
            )}

        </div>

    );

}