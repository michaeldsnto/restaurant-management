import MenuItemForm
    from "../components/menu-item-form";

export default function CreateMenuPage() {

    const submit = (
        data: any
    ) => {

        console.log(
            data
        );

    };

    return (

        <MenuItemForm
            categories={[]}
            onSubmit={submit}
        />

    );

}