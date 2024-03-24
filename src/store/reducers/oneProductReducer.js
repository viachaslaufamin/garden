const defaultState = [];

const LOAD_ONE_PRODUCT = 'LOAD_ONE_PRODUCT';


export const loadOneProductAction = id => ({type:LOAD_ONE_PRODUCT, payload: id})

export const oneProductReducers = (state = defaultState, action) => {

   if(action.type === LOAD_ONE_PRODUCT){
      return action.payload
   }
   return state
};