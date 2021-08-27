import { ActionTypes } from '../constants/ActionTypes'

const initialState = {
    products:[]
}

export const setProductsReducer = ( state=initialState, {type, payLoad} ) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products:payLoad }
        default:
            return state
    }
}

export const selectedProductReducer = ( state={}, { type, payLoad } ) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payLoad }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}