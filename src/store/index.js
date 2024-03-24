import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer.js";
import { allProductsReducer } from "./reducers/allProductsReducer.js";
import { productFromCategory } from "./reducers/productFromCategory.js";
import { oneProductReducers } from "./reducers/oneProductReducer.js";

const rootReducer = combineReducers({
   categories: categoryReducer,
   all_products: allProductsReducer,
   categories_product: productFromCategory,
   one_product: oneProductReducers
});

export const store = createStore(rootReducer, applyMiddleware(thunk));