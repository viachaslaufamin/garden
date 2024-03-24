import { host } from "../host/host"
import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadOneProductAction } from "../store/reducers/oneProductReducer"



export const getAllProducts = (dispatch) => {
   fetch (`${host}/products/all`)
   .then(res => res.json())
   .then(json => dispatch(loadAllProductsAction(json)))
}



export const getOneProduct = (id) => {
   return dispatch =>{
      fetch (`${host}/products/${id}`)
      .then(res => res.json())
      .then(json =>dispatch(loadOneProductAction(json)))
   }
}


