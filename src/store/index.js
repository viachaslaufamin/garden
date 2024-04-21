import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer.js";
import { allProductsReducer } from "./reducers/allProductsReducer.js";
import { productFromCategory } from "./reducers/productFromCategory.js";
import { oneProductReducers } from "./reducers/oneProductReducer.js";
import { basketReducer } from "./reducers/basketReducer.js";

const rootReducer = combineReducers({
   categories: categoryReducer,
   all_products: allProductsReducer,
   categories_product: productFromCategory,
   one_product: oneProductReducers,
   basket: basketReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));