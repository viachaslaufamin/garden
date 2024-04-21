const defaultState = [];

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';


export const loadCategoriesAction = category => ({type:LOAD_CATEGORIES, payload: category})

export const categoryReducer = (state = defaultState, action) => {
   if(action.type === LOAD_CATEGORIES){
      return action.payload
   }
   return state
};