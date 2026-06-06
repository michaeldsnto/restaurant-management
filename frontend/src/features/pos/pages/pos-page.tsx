import { useState } from "react";

import ProductSearch from "../components/product-search";
import CategoryFilter from "../components/category-filter";
import PosProductGrid from "../components/pos-product-grid";
import PosCart from "../components/pos-cart";
import CustomerSelector from "../components/customer-selector";
import TableSelector from "../components/table-selector";

import {
  usePosProducts,
} from "../hooks/use-pos-products";

import {
  usePosCart,
} from "../hooks/use-pos-cart";

import {
  useCheckout,
} from "../hooks/use-checkout";

import {
  calculateSubtotal,
} from "../utils/cart-calculator";

export default function PosPage() {

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    categoryId,
    setCategoryId,
  ] = useState<number>();

  const {
    data: productsResponse,
  } = usePosProducts({

    search,

    category_id:
      categoryId,

  });

  const {
    items,

    addItem,

    removeItem,

    updateQuantity,

    clearCart,

  } = usePosCart();

  const checkout =
    useCheckout();

  const subtotal =
    calculateSubtotal(
      items
    );

  const tax = 0;

  const discount = 0;

  const total =
    subtotal +
    tax -
    discount;

  const handleCheckout =
    async () => {

      await checkout.mutateAsync({

        order_type:
          "dine_in",

        items,

        subtotal,

        tax_amount:
          tax,

        discount_amount:
          discount,

        grand_total:
          total,

        payment_method:
          "cash",

      });

      clearCart();

    };

  return (

    <div
      className="
      grid
      h-[calc(100vh-80px)]
      grid-cols-12
      gap-6
      "
    >

      {/* PRODUCT AREA */}

      <div
        className="
        col-span-8
        flex
        flex-col
        gap-4
        overflow-hidden
        "
      >

        <ProductSearch
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          categories={[]}
          selected={
            categoryId
          }
          onSelect={
            setCategoryId
          }
        />

        <div
          className="
          flex-1
          overflow-auto
          "
        >

          <PosProductGrid
            products={
              productsResponse?.data ??
              []
            }
            onAddProduct={(
              product
            ) => {

              addItem({

                id:
                  product.id,

                menuItemId:
                  product.id,

                name:
                  product.name,

                sku:
                  product.sku,

                quantity:
                  1,

                price:
                  product.price,

                subtotal:
                  product.price,

              });

            }}
          />

        </div>

      </div>

      {/* CART AREA */}

      <div
        className="
        col-span-4
        flex
        flex-col
        gap-4
        "
      >

        <CustomerSelector
          customers={[]}
          onChange={() => {}}
        />

        <TableSelector
          tables={[]}
          onChange={() => {}}
        />

        <div className="flex-1 overflow-hidden">
          <PosCart
            items={items}
            onDelete={(id: number) => removeItem(id)}
            onIncrease={(id: number) => {
              const item = items.find((i) => i.id === id);
              if (!item) return;
              updateQuantity(id, item.quantity + 1);
            }}
            onDecrease={(id: number) => {
              const item = items.find((i) => i.id === id);
              if (!item) return;
              updateQuantity(id, Math.max(1, item.quantity - 1));
            }}
          />
        </div>

        <div className="rounded-lg border bg-background p-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax:</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount:</span>
              <span className="font-semibold">-${discount.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={items.length === 0}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white disabled:bg-gray-300"
        >
          Checkout
        </button>

      </div>

    </div>

  );

}