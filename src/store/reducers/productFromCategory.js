const defaultState = {};

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const loadProductsAction = products => ({type:LOAD_PRODUCTS, payload: products})

export const productFromCategory = (state = defaultState, action) => {

   if(action.type === LOAD_PRODUCTS){
      return action.payload
   }
   return state
}