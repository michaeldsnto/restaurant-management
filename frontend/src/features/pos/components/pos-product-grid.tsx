import PosProductCard
    from "./pos-product-card";

interface Props {

    products: any[];

    onAddProduct: (
        product: any
    ) => void;

}

export default function PosProductGrid({
    products,
    onAddProduct,
}: Props) {

    return (

        <div
            className="
      grid
      gap-4
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      "
        >

            {products.map(
                (
                    product
                ) => (

                    <PosProductCard
                        key={
                            product.id
                        }
                        product={
                            product
                        }
                        onAdd={() =>
                            onAddProduct(
                                product
                            )
                        }
                    />

                )
            )}

        </div>

    );

}