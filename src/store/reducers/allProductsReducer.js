const defaultState = [];

const LOAD_ALLPRODUCTS = 'LOAD_ALLPRODUCTS'

export const loadAllProducts = allproducts =>(
    {type:LOAD_ALLPRODUCTS , payload:allproducts}
)

export const allProductsReducer = (state=[], action) =>{
    if(action.type === LOAD_ALLPRODUCTS){
        return action.payload
    }
     return state
}