import { ChefHat } from "lucide-react";

export default function KitchenHeader() {

    return (

        <div
            className="
      flex
      items-center
      gap-3
      mb-8
    "
        >

            <div
                className="
        p-2
        bg-orange-500/10
        rounded-lg
      "
            >

                <ChefHat className="
          text-orange-400
          w-6
          h-6
        " />

            </div>

            <div>

                <h1 className="
          text-3xl
          font-bold
          text-white
        ">
                    Kitchen Display
                </h1>

                <p className="
          text-sm
          text-zinc-400
        ">
                    Manage and track
                    orders
                </p>

            </div>

        </div>

    );

}
