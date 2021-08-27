import { ActionTypes } from '../constants/ActionTypes'

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payLoad: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payLoad: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}