import { create } from "zustand";

interface MenuStore {

    selectedCategory:
    string;

    search:
    string;

    setSearch: (
        value: string
    ) => void;

    setCategory: (
        value: string
    ) => void;

}

export const useMenuStore =
    create<MenuStore>(
        (set) => ({

            selectedCategory:
                "",

            search:
                "",

            setSearch: (
                value
            ) =>
                set({
                    search: value,
                }),

            setCategory: (
                value
            ) =>
                set({
                    selectedCategory:
                        value,
                }),

        })
    );