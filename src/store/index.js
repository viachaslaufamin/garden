import { combineReducers, createStore , applyMiddleware } from "redux";
import { categoriesReducer } from './reducers/categoriesReducer';
import {thunk} from 'redux-thunk'
import { salesReducer } from "./reducers/salesreducer";
import { allProductsReducer } from "./reducers/allProductsReducer";
import { prodFromCategReducer } from "./reducers/progFromCategory";
import { productReducer } from "./reducers/product";

const rootReducer = combineReducers({
   categories:categoriesReducer,
   sales:salesReducer,
   allProducts:allProductsReducer,
   productsFromCategory:prodFromCategReducer,
   product:productReducer
});

export const store = createStore(rootReducer , applyMiddleware(thunk));