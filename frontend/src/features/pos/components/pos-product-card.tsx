import { ShoppingCart }
    from "lucide-react";

interface Props {

    product: {

        id: number;

        name: string;

        image?: string;

        price: number;

    };

    onAdd: () => void;

}

export default function PosProductCard({
    product,
    onAdd,
}: Props) {

    return (

        <div
            className="
      rounded-2xl
      border
      overflow-hidden
      bg-background
      hover:shadow-lg
      transition
      "
        >

            <img
                src={
                    product.image ??
                    "/placeholder-food.jpg"
                }
                alt={product.name}
                className="
        h-40
        w-full
        object-cover
        "
            />

            <div className="p-4">

                <h3
                    className="
          font-semibold
          "
                >
                    {product.name}
                </h3>

                <p
                    className="
          mt-2
          text-lg
          font-bold
          "
                >
                    Rp{" "}
                    {product.price.toLocaleString()}
                </p>

                <button
                    onClick={onAdd}
                    className="
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-primary
          py-2
          text-white
          "
                >

                    <ShoppingCart
                        size={18}
                    />

                    Add

                </button>

            </div>

        </div>

    );

}