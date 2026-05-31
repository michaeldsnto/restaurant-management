import type { Supplier } from "../types/supplier";

interface Props {

    suppliers:
    Supplier[];

}

export default function SupplierTable({
    suppliers,
}: Props) {

    return (

        <table className="w-full">

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Contact</th>

                    <th>Email</th>

                    <th>Phone</th>

                </tr>

            </thead>

            <tbody>

                {suppliers.map(
                    (supplier) => (

                        <tr key={supplier.id}>

                            <td>
                                {supplier.name}
                            </td>

                            <td>
                                {supplier.contact_person}
                            </td>

                            <td>
                                {supplier.email}
                            </td>

                            <td>
                                {supplier.phone}
                            </td>

                        </tr>

                    )
                )}

            </tbody>

        </table>

    );

}