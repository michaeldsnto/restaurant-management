interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

export default function InventoryFilter({
    value,
    onChange,
}: Props) {

    return (

        <select
            value={value}
            onChange={(e) =>
                onChange(
                    e.target.value
                )
            }
            className="
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900
        px-4
        py-2.5
      "
        >

            <option value="">
                All Status
            </option>

            <option value="in_stock">
                In Stock
            </option>

            <option value="low_stock">
                Low Stock
            </option>

            <option value="out_of_stock">
                Out Of Stock
            </option>

        </select>

    );

}