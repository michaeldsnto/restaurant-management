import CategoryTable from "../components/category-table";
import { useMenuCategories } from "../hooks/use-menu-categories";

export default function CategoriesPage() {

    const {
        data,
        isLoading,
    } =
        useMenuCategories();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (

        <CategoryTable
            categories={
                data?.data ??
                []
            }
        />

    );

}