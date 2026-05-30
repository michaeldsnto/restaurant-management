import Select from "@/components/ui/select";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function EmployeeRoleSelect({
    value,
    onChange,
}: Props) {
    return (
        <Select
            value={value}
            onChange={onChange}
            options={[
                {
                    label: "Manager",
                    value: "manager",
                },
                {
                    label: "Cashier",
                    value: "cashier",
                },
                {
                    label: "Waiter",
                    value: "waiter",
                },
                {
                    label: "Kitchen Staff",
                    value: "kitchen_staff",
                },
            ]}
        />
    );
}