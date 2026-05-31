import { create } from "zustand";

interface InventoryState {

    search: string;

    status: string;

    setSearch: (
        value: string
    ) => void;

    setStatus: (
        value: string
    ) => void;

}

export const useInventoryStore =
    create<InventoryState>(
        (set) => ({

            search: "",

            status: "",

            setSearch: (
                value
            ) =>
                set({
                    search: value,
                }),

            setStatus: (
                value
            ) =>
                set({
                    status: value,
                }),

        })
    );