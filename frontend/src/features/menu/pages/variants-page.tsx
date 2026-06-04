import VariantTable from "../components/variant-table";
import { useVariants } from "../hooks/use-variants";

export default function VariantsPage() {

    const {
        data,
    } = useVariants(1);

    return (

        <VariantTable
            variants={
                data?.data ??
                []
            }
        />

    );

}