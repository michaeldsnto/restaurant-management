type Branch = {

    name: string;

    revenue: number;

    orders: number;

};

type Props = {

    branches: Branch[];

};

export default function BranchPerformance({
    branches,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
      p-6
    ">

            <div className="
        flex
        items-center
        justify-between
      ">

                <div>

                    <h3 className="
            text-lg
            font-semibold
            text-white
          ">
                        Branch Performance
                    </h3>

                    <p className="
            mt-1
            text-sm
            text-zinc-500
          ">
                        Revenue across all branches
                    </p>

                </div>

            </div>

            <div className="
        mt-8
        space-y-5
      ">

                {branches.map(
                    (branch) => (

                        <div
                            key={branch.name}
                            className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950
                p-5
              "
                        >

                            <div className="
                flex
                items-center
                justify-between
              ">

                                <div>

                                    <h4 className="
                    font-semibold
                    text-white
                  ">
                                        {branch.name}
                                    </h4>

                                    <p className="
                    mt-1
                    text-sm
                    text-zinc-500
                  ">
                                        {branch.orders}
                                        {" "}
                                        orders
                                    </p>

                                </div>

                                <div className="
                  text-right
                ">

                                    <p className="
                    text-xl
                    font-bold
                    text-emerald-400
                  ">
                                        $
                                        {
                                            branch.revenue.toLocaleString()
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>

    );
}