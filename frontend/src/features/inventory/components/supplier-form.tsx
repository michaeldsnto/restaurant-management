import {
    useForm,
} from "react-hook-form";

export default function SupplierForm() {

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
                {...register("code")}
                placeholder="Supplier Code"
                className="input"
            />

            <input
                {...register("name")}
                placeholder="Supplier Name"
                className="input"
            />

            <input
                {...register("contact_person")}
                placeholder="Contact Person"
                className="input"
            />

            <input
                {...register("email")}
                placeholder="Email"
                className="input"
            />

            <input
                {...register("phone")}
                placeholder="Phone"
                className="input"
            />

            <textarea
                {...register("address")}
                placeholder="Address"
                className="input"
            />

        </form>

    );

}