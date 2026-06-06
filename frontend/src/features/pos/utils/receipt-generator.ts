export interface ReceiptItem {

    name: string;

    quantity: number;

    subtotal: number;

}

export interface ReceiptData {

    orderNumber: string;

    items: ReceiptItem[];

    subtotal: number;

    tax: number;

    discount: number;

    total: number;

}

export function generateReceiptText(
    data: ReceiptData
) {

    const lines: string[] = [];

    lines.push(
        "===================="
    );

    lines.push(
        "RESTAURANT RECEIPT"
    );

    lines.push(
        "===================="
    );

    lines.push(
        `Order : ${data.orderNumber}`
    );

    lines.push("");

    data.items.forEach(
        (item) => {

            lines.push(
                `${item.name}`
            );

            lines.push(
                `${item.quantity} x ${item.subtotal.toLocaleString()}`
            );

        }
    );

    lines.push("");

    lines.push(
        `Subtotal : ${data.subtotal.toLocaleString()}`
    );

    lines.push(
        `Tax : ${data.tax.toLocaleString()}`
    );

    lines.push(
        `Discount : ${data.discount.toLocaleString()}`
    );

    lines.push(
        `TOTAL : ${data.total.toLocaleString()}`
    );

    return lines.join("\n");

}