import type {
    MenuVariant,
} from "../types/menu-variant";

interface Props {
    variants: MenuVariant[];
}

export default function VariantTable({
    variants,
}: Props) {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Adjustment</th>
                </tr>
            </thead>

            <tbody>
                {variants.map(
                    (variant) => (
                        <tr
                            key={
                                variant.id
                            }
                        >
                            <td>
                                {variant.name}
                            </td>

                            <td>
                                {
                                    variant.price_adjustment
                                }
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}