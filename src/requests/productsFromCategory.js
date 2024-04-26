import { host } from "../host/host"
import { loadProdFromCateg } from "../store/reducers/progFromCategory"



export const getProdFromCategory = (category_id) => (dispatch) =>{
    fetch(`${host}/categories/${category_id}`)
    .then(res => res.json())
    .then(json => {console.log(json);
        dispatch(loadProdFromCateg(json))})
    .catch(error => console.error('Error fetching products:', error));
}
