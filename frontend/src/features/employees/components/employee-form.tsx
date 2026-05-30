import { useForm } from "react-hook-form";
import type { EmployeeFormData } from "../types/employee";

interface Props {
    defaultValues?: EmployeeFormData;
    onSubmit: (
        data: EmployeeFormData
    ) => void;
}

export default function EmployeeForm({
    defaultValues,
    onSubmit,
}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<EmployeeFormData>({
        defaultValues,
    });

    return (
        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            className="space-y-6"
        >
            <input
                {...register(
                    "full_name"
                )}
                placeholder="Full Name"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register("email")}
                placeholder="Email"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register("phone")}
                placeholder="Phone"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <input
                {...register("salary", {
                    valueAsNumber: true,
                })}
                type="number"
                placeholder="Salary"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
            />

            <button
                type="submit"
                className="
          rounded-xl
          bg-violet-600
          px-5
          py-3
          font-medium
          text-white
        "
            >
                Save Employee
            </button>
        </form>
    );
}