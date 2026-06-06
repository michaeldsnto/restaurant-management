import type {
    PaymentMethod,
} from "../types/payment-method";

interface Props {

    methods:
    PaymentMethod[];

    onSelect: (
        method: string
    ) => void;

}

export default function PaymentModal({
    methods,
    onSelect,
}: Props) {

    return (

        <div
            className="
      space-y-3
      "
        >

            <h3
                className="
        text-lg
        font-semibold
        "
            >
                Payment Method
            </h3>

            {methods.map(
                (
                    method
                ) => (

                    <button
                        key={
                            method.id
                        }
                        onClick={() =>
                            onSelect(
                                method.code
                            )
                        }
                        className="
            w-full
            rounded-lg
            border
            p-3
            text-left
            "
                    >
                        {method.name}
                    </button>

                )
            )}

        </div>

    );

}