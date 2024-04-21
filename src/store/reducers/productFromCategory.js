const defaultState = {};

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const GET_CHECK_PRODUCTS = 'GET_CHECK_PRODUCTS'
const CHECK_PRICE = 'CHECK_PRICE'

export const loadProductsAction = products => ({type:LOAD_PRODUCTS, payload: products})
export const sortProductsAction = (value) => ({ type: SORT_PRODUCTS, payload: value })
export const getCheckProductsAction = value => ({
   type: GET_CHECK_PRODUCTS, payload: value
})
export const checkPriceAction = (values) => ({type: CHECK_PRICE, payload: values})


export const productFromCategory = (state = defaultState, action) => {

   if(action.type === LOAD_PRODUCTS) {
      return {
         ...action.payload, 
         data: action.payload.data.map(el => ({...el, visible: true}))}
   } else if (action.type === SORT_PRODUCTS) {
      if (action.payload === 'name') {
         state.data.sort((a, b) => a.title.localeCompare(b.title))
      } else if (action.payload === 'price_asc') {
         state.data.sort((a, b) => a.price - b.price)
      } else if ( action.payload === 'price_desc') {
         state.data.sort((a, b) => b.price - a.price)
      }
      return {...state}
   } else if (action.type === GET_CHECK_PRODUCTS) {
      if(action.payload) {
         state.data.map(el => {
            if(el.discont_price) {
               el.visible = true
            } else if(!el.discont_price) {
               el.visible = false
            }
            return el
         })
         return {...state}
      } else {
         state.data.map(el => {
            el.visible = true
            return el
         })
         return {...state}
      } 
   } else if(action.type === CHECK_PRICE) {
      const { min_value, max_value } = action.payload;
      state.data.forEach(el => {
         if((el.discont_price === null ? el.price : el.discont_price) >= min_value && 
            (el.discont_price === null ? el.price : el.discont_price) <= max_value) {
            el.visible = true;
         } else {
            el.visible = false;
         }
      });
      return {...state}
   }
   
   return state
}