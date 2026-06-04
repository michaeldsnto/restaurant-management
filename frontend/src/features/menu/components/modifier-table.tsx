import type {
    MenuModifier,
} from "../types/menu-modifier";

interface Props {
    modifiers: MenuModifier[];
}

export default function ModifierTable({
    modifiers,
}: Props) {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {modifiers.map(
                    (modifier) => (
                        <tr
                            key={
                                modifier.id
                            }
                        >
                            <td>
                                {
                                    modifier.name
                                }
                            </td>

                            <td>
                                {modifier.price}
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}