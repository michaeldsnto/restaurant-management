interface Props {
    value: string;
    onChange: (
        value: string
    ) => void;
}

export default function EmployeeFilter({
    value,
    onChange,
}: Props) {
    return (
        <select
            value={value}
            onChange={(e) =>
                onChange(e.target.value)
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
                All Roles
            </option>

            <option value="manager">
                Manager
            </option>

            <option value="cashier">
                Cashier
            </option>

            <option value="waiter">
                Waiter
            </option>

            <option value="kitchen_staff">
                Kitchen Staff
            </option>
        </select>
    );
}