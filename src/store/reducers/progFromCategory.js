const defaultState = [];

const LOAD_PRODFROMCATEG = 'LOAD_PRODFROMCATEG'

export const loadProdFromCateg = products => ({type: LOAD_PRODFROMCATEG , payload:products })

export const prodFromCategReducer = (state=[] , action) =>{
if(action.type === LOAD_PRODFROMCATEG){
    return action.payload
}

    return state
}