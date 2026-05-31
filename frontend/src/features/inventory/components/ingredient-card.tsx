import { Package } from "lucide-react";

interface Props {

    name: string;

    stock: number;

    unit: string;

}

export default function IngredientCard({
    name,
    stock,
    unit,
}: Props) {

    return (

        <div
            className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-5
    "
        >

            <div
                className="
        flex
        items-center
        gap-3
      "
            >

                <Package />

                <h3 className="font-semibold">
                    {name}
                </h3>

            </div>

            <p
                className="
        mt-4
        text-2xl
        font-bold
      "
            >
                {stock} {unit}
            </p>

        </div>

    );

}