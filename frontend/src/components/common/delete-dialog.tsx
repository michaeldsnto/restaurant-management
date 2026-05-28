import ConfirmDialog
    from "./confirm-dialog";

type Props = {

    open: boolean;

    itemName?: string;

    onConfirm: () => void;

    onCancel: () => void;

};

export default function DeleteDialog({
    open,
    itemName,
    onConfirm,
    onCancel,
}: Props) {

    return (

        <ConfirmDialog
            open={open}
            title="Delete Data"
            description={`Are you sure you want to delete ${itemName ?? "this item"}? This action cannot be undone.`}
            onConfirm={onConfirm}
            onCancel={onCancel}
        />

    );
}