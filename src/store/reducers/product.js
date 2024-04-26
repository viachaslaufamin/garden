const defaultState = [];

const LOAD_PRODUCT = 'LOAD_PRODUCT'

export const loadProduct = product => ({type: LOAD_PRODUCT , payload: product})

export const productReducer = (state=[], action) =>{
    if(action.type === LOAD_PRODUCT){
        return action.payload
    }
    return state
}