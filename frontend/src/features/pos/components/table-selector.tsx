interface Table {

    id: number;

    name: string;

}

interface Props {

    tables: Table[];

    value?: number;

    onChange: (
        tableId: number
    ) => void;

}

export default function TableSelector({
    tables,
    value,
    onChange,
}: Props) {

    return (

        <select
            value={value}
            onChange={(e) =>
                onChange(
                    Number(
                        e.target.value
                    )
                )
            }
            className="
      w-full
      rounded-lg
      border
      px-3
      py-2
      "
        >

            <option value="">
                Select Table
            </option>

            {tables.map(
                (
                    table
                ) => (

                    <option
                        key={
                            table.id
                        }
                        value={
                            table.id
                        }
                    >
                        {table.name}
                    </option>

                )
            )}

        </select>

    );

}