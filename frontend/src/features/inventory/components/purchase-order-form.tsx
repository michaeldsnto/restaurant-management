import {
    useForm,
} from "react-hook-form";

export default function PurchaseOrderForm() {

    const {
        register,
        handleSubmit,
    } = useForm();

    return (

        <form
            onSubmit={handleSubmit(
                console.log
            )}
            className="space-y-4"
        >

            <input
                {...register(
                    "supplier_id"
                )}
                placeholder="Supplier"
                className="input"
            />

            <input
                type="date"
                {...register(
                    "expected_date"
                )}
                className="input"
            />

        </form>

    );

}