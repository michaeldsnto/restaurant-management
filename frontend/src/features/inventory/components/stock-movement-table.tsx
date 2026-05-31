import type {
    StockMovement,
} from "../types/stock-movement";

interface Props {

    data:
    StockMovement[];

}

export default function StockMovementTable({
    data,
}: Props) {

    return (

        <div
            className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
    "
        >

            <table
                className="w-full"
            >

                <thead>

                    <tr>

                        <th>
                            Ingredient
                        </th>

                        <th>
                            Type
                        </th>

                        <th>
                            Qty
                        </th>

                        <th>
                            User
                        </th>

                        <th>
                            Date
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {data.map(
                        (movement) => (

                            <tr
                                key={
                                    movement.id
                                }
                            >

                                <td>
                                    {
                                        movement.ingredient_name
                                    }
                                </td>

                                <td>
                                    {
                                        movement.type
                                    }
                                </td>

                                <td>
                                    {
                                        movement.quantity
                                    }
                                </td>

                                <td>
                                    {
                                        movement.created_by
                                    }
                                </td>

                                <td>
                                    {
                                        movement.created_at
                                    }
                                </td>

                            </tr>

                        )
                    )}

                </tbody>

            </table>

        </div>

    );

}