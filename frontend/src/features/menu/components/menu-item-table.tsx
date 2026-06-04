import type {
    MenuItem,
} from "../types/menu-item";

interface Props {

    items:
    MenuItem[];

}

export default function MenuItemTable({
    items,
}: Props) {

    return (

        <table
            className="
      w-full
    "
        >

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Category</th>

                    <th>Price</th>

                    <th>Status</th>

                </tr>

            </thead>

            <tbody>

                {items.map(
                    (item) => (

                        <tr
                            key={item.id}
                        >

                            <td>
                                {item.name}
                            </td>

                            <td>
                                {
                                    item.category
                                        ?.name
                                }
                            </td>

                            <td>
                                Rp{" "}
                                {item.base_price.toLocaleString(
                                    "id-ID"
                                )}
                            </td>

                            <td>

                                {item.is_available
                                    ? "Available"
                                    : "Unavailable"}

                            </td>

                        </tr>

                    )
                )}

            </tbody>

        </table>

    );

}