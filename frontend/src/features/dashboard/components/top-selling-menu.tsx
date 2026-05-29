const items = [

    {
        name: "Cheese Burger",
        sold: 145,
    },

    {
        name: "Spicy Pizza",
        sold: 121,
    },

    {
        name: "Fried Chicken",
        sold: 110,
    },

];

export default function TopSellingMenu() {

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
                Top Selling Menu
            </h3>

            <div className="
        mt-6
        space-y-4
      ">

                {items.map((item) => (

                    <div
                        key={item.name}
                        className="
              flex
              items-center
              justify-between
            "
                    >

                        <div>

                            <p className="
                font-medium
                text-white
              ">
                                {item.name}
                            </p>

                            <p className="
                mt-1
                text-xs
                text-zinc-500
              ">
                                Best seller item
                            </p>

                        </div>

                        <div className="
              rounded-xl
              bg-violet-600/10
              px-3
              py-2
              text-sm
              font-semibold
              text-violet-400
            ">
                            {item.sold} sold
                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}