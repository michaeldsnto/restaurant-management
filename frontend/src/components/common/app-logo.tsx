import clsx from "clsx";

type Props = {
    collapsed?: boolean;
};

export default function AppLogo({
    collapsed = false,
}: Props) {

    return (

        <div className="
      flex
      items-center
      gap-3
    ">

            <div className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-violet-600
        to-indigo-600
        font-bold
        text-white
        shadow-lg
        shadow-violet-600/20
      ">
                RMS
            </div>

            {!collapsed && (

                <div>

                    <h1 className="
            text-lg
            font-bold
            tracking-tight
            text-white
          ">
                        RestaurantOS
                    </h1>

                    <p className="
            text-xs
            text-zinc-400
          ">
                        Management System
                    </p>

                </div>

            )}

        </div>

    );
}