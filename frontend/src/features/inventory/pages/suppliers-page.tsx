import SupplierTable
    from "../components/supplier-table";

import {
    useSuppliers,
} from "../hooks/use-suppliers";

export default function SuppliersPage() {

    const {
        data,
    } = useSuppliers();

    return (

        <div className="space-y-6">

            <h1 className="
        text-3xl
        font-bold
      ">
                Suppliers
            </h1>

            <SupplierTable
                suppliers={
                    data?.data ?? []
                }
            />

        </div>

    );

}