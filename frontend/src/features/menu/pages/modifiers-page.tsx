import ModifierTable from "../components/modifier-table";
import { useModifiers } from "../hooks/use-modifiers";

export default function ModifiersPage() {

    const {
        data,
    } = useModifiers(1);

    return (

        <ModifierTable
            modifiers={
                data?.data ??
                []
            }
        />

    );

}