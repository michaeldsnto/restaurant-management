interface Props {

    onClear: () => void;

}

export default function CartActions({
    onClear,
}: Props) {

    return (

        <div
            className="
      flex
      gap-2
      "
        >

            <button
                onClick={onClear}
                className="
        flex-1
        rounded-lg
        border
        py-3
        "
            >
                Clear Cart
            </button>

        </div>

    );

}