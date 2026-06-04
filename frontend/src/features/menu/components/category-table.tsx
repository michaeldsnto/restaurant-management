import type {
    MenuCategory,
} from "../types/menu-category";

interface Props {

    categories:
    MenuCategory[];

}

export default function CategoryTable({
    categories,
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

                    <th>Status</th>

                </tr>

            </thead>

            <tbody>

                {categories.map(
                    (category) => (

                        <tr
                            key={
                                category.id
                            }
                        >

                            <td>
                                {
                                    category.name
                                }
                            </td>

                            <td>

                                {category.is_active
                                    ? "Active"
                                    : "Inactive"}

                            </td>

                        </tr>

                    )
                )}

            </tbody>

        </table>

    );

}