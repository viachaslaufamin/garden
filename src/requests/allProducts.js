import { host } from "../host/host"
import { loadAllProducts } from "../store/reducers/allProductsReducer"
import { loadProduct } from "../store/reducers/product"




export const getAllProducts = (dispatch) => {

    fetch(`${host}/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllProducts(json)))
}

export const getProduct = (id) => (dispatch)=> {
    fetch(`${host}/products/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProduct(json)))
}