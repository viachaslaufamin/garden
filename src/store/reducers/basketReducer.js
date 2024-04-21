const defaultState = JSON.parse(localStorage.getItem('cart')) || [];

const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_CARTS = 'ADD_TO_CARTS';
const COUNT_DECRIMENT = 'COUNT_DECRIMENT'
const COUNT_INCRIMENT = 'COUNT_INCRIMENT'
const CLEAR_CARD = 'CLEAR_CARD'
const CLEAR_BASKET = 'CLEAR_BASKET'

export const addToCarAction = (product) => ({ type: ADD_TO_CART, payload:product });

export const addToCarsAction = (product) => ({ type: ADD_TO_CARTS, payload:product });

export const dicrementCountAction = (id) => ({ type: COUNT_DECRIMENT, payload:id});

export const incrimentCountAction = (id) => ({ type: COUNT_INCRIMENT, payload:id});

export const clearCardAction =(id) => ({ type: CLEAR_CARD, payload:id })
export const clearBasketAction =() =>({ type: CLEAR_BASKET })




const checkProduct = (state, payload) =>{
   const productInState = state.find(el => el.id === payload.id);
   if(productInState){
      productInState.count++
      return [...state]
   } else {
      return [...state, {...payload, count:1}]
   }
}
const checkProducts = (state, payload) =>{
   const productInState = state.find(el => el.id === payload.id);
   if(productInState){
      productInState.count+= payload.count
      return [...state]
   } else {
      return [...state, {...payload}]
   }
}
export const basketReducer = (state = defaultState, action) => {
   if(action.type === ADD_TO_CART){
      return checkProduct(state, action.payload)
   }
   else if(action.type === ADD_TO_CARTS){
      return checkProducts(state, action.payload)
   }
   else if(action.type === COUNT_DECRIMENT){
      const name = state.find(el => el.id === action.payload)
      if(name.count === 1){
         state=state.filter(el => el.id !== action.payload)
      }
      else{
         name.count--
      }
      return [...state]
   }
   else if(action.type === COUNT_INCRIMENT){
      const name = state.find(el => el.id === action.payload)
      name.count++
      return [...state]
   }
   else if(action.type === CLEAR_CARD){
      state = state.filter(el=> el.id!== action.payload)
      return [...state]
   }
   else if (action.type === CLEAR_BASKET){
      return [];
   }
   return state
}