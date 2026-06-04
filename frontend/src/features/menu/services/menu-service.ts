import { menuApi } from "../api/menu-api";

export const menuService = {

    getItems:
        menuApi.getItems,

    getItem:
        menuApi.getItem,

    getCategories:
        menuApi.getCategories,

};