type Props<T> = {

    columns: string[];

    data: T[];

    renderRow: (
        item: T
    ) => React.ReactNode;

};

export default function DataTable<T>({
    columns,
    data,
    renderRow,
}: Props<T>) {

    return (

        <div className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/50
    ">

            <table className="w-full">

                <thead className="bg-zinc-900">

                    <tr>

                        {columns.map((column) => (

                            <th
                                key={column}
                                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-400
                "
                            >
                                {column}
                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {data.map((item, index) => (

                        <tr
                            key={index}
                            className="
                border-t
                border-zinc-800
              "
                        >
                            {renderRow(item)}
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}