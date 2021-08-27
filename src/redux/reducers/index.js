import { combineReducers } from 'redux'
import { setProductsReducer, selectedProductReducer } from './productsReducer'

const reducers = combineReducers({
    allProducts: setProductsReducer,
    product: selectedProductReducer
})
export default reducers