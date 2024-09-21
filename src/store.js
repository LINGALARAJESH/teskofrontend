import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import
import { composeWithDevTools } from 'redux-devtools-extension'; // Correct import
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducers, userRegisterReducers } from './reducers/userReducers';
import { OrderItemReducer, ShippingReducer, OrderReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  orderdata: OrderReducer,
  shippingdata: ShippingReducer,
  orderitemdata: OrderItemReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // Applying middleware correctly
);

export default store;
