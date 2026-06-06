import PosCartItem from "./pos-cart-item";

import type {
    CartItem,
} from "../types/cart-item";

interface Props {
    items: CartItem[];
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function PosCart({
    items,
    onIncrease,
    onDecrease,
    onDelete,
}: Props) {
    return (
        <div className="flex h-full flex-col rounded-2xl border bg-background">
            <div className="border-b p-4">
                <h3 className="font-semibold">Shopping Cart</h3>
                <p className="text-sm text-muted-foreground">
                    {items.length} item{items.length !== 1 ? 's' : ''}
                </p>
            </div>

            <div className="flex-1 overflow-auto">
                {items.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        Cart is empty
                    </div>
                ) : (
                    items.map((item) => (
                        <PosCartItem
                            key={item.id}
                            item={item}
                            onIncrease={() => onIncrease(item.id)}
                            onDecrease={() => onDecrease(item.id)}
                            onDelete={() => onDelete(item.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}