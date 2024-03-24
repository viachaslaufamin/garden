import { host } from "../host/host"
import { loadProductsAction } from "../store/reducers/productFromCategory"


export const getProducts = (category_id) => {
   return dispatch =>{
      fetch (`${host}/categories/${category_id}`)
      .then(res => res.json())
      .then(json => dispatch(loadProductsAction(json)))
   }
}