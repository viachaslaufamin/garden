import { host } from "../host/host"
import { loadCategoriesAction } from "../store/reducers/categoriesReducer"


export const getCategories = (dispatch) => {
    fetch(`${ host}/categories/all`)
    .then(res=> res.json())
    .then(json => dispatch(loadCategoriesAction(json)))
}