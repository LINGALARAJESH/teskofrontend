import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducers, userRegisterReducers } from './reducers/userReducers';
import { OrderItemReducer, ShippingReducer, OrderReducer } from './reducers/cartReducers';

// Combine reducers
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

// Fetch user info from local storage
const userInfoFromStorage = localStorage.getItem('userInfo') 
  ? JSON.parse(localStorage.getItem('userInfo')) 
  : null;

// Define the initial state
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

// Set up middleware
const middleware = [thunk];

// Create the store with reducer, initial state, and middleware
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
