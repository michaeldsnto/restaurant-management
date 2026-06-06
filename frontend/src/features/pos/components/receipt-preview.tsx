interface Props {

    orderNumber: string;

    total: number;

}

export default function ReceiptPreview({
    orderNumber,
    total,
}: Props) {

    return (

        <div
            className="
      rounded-lg
      border
      p-4
      bg-white
      text-black
      "
        >

            <h3
                className="
        text-center
        font-bold
        "
            >
                RESTAURANT
            </h3>

            <p>
                Order :
                {orderNumber}
            </p>

            <p>
                Total :
                Rp {total.toLocaleString()}
            </p>

        </div>

    );

}