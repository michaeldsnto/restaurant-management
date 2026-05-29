const activities = [

  "New order received from table A12",

  "Kitchen completed order #3021",

  "Inventory stock updated",

  "New reservation created",

];

export default function ActivityFeed() {

  return (

    <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
      p-6
    ">

      <h3 className="
        text-lg
        font-semibold
        text-white
      ">
        Activity Feed
      </h3>

      <div className="
        mt-6
        space-y-5
      ">

        {activities.map(
          (
            activity,
            index
          ) => (

            <div
              key={index}
              className="
                flex
                gap-4
              "
            >

              <div className="
                mt-2
                h-2
                w-2
                rounded-full
                bg-emerald-400
              " />

              <p className="
                text-sm
                text-zinc-300
              ">
                {activity}
              </p>

            </div>

          )
        )}

      </div>

    </div>

  );
}