import { combineReducers, createStore } from 'redux'
import CartReducer, { CART_ADD_ITEM, CART_DECREASE_ITEM_QUANTITY, CART_INCREASE_ITEM_QUANTITY, CART_REMOVE_ITEM } from './CartReducer';
import WishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './WishListReducer';
import ProductsReducer from './ProductsReducer';
// import { productsList } from './productsList';

//state data
// const initialState = {
//     // products: productsList,
//     products: productsList,    //There can be more than one product in the list with the details as shown above.
//     cartItems: [],  //create add & remove functionality for cart items
//     wishList: []   //create add & remove functionality for wishList
// }

//self made combine reducers function for understanding how it works:
// function combineReducer(reducers) {
//     const reducerKeys = Object.keys(reducers)

//     return function (state = {}, action) {
//         const nextState = {}

//         for(let i = 0; i < reducerKeys.length; i++) {
//             const key = reducerKeys[i]
//             const reducer = reducers[key]
//             const previousStateForKey = state[key]
//             const nextStateForKey = state(previousStateForKey, action)
//             nextState[key] = nextStateForKey
//         }
//         return nextState
//     }
// }

//state as a object with different - different reducers
const reducer = combineReducers({  //which gets imported by combineReducers function above
    //here we should give key before the reducers which we want to import as shown below:
        products: ProductsReducer,   //we can give any key name here like: a, b, c, d etc., or just like products we have give for better understanding.
        cartItems: CartReducer,
        wishList: WishListReducer
})   //But how it's working all together combined to provide data in console. ?
//how to make our own combined reducer ?

// const CART_ADD_ITEM = 'cart/addItem'
// const CART_REMOVE_ITEM = 'cart/removeItem'
// const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
// const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'
// const WISHLIST_ADD_ITEM = 'wishList/addItem'
// const WISHLIST_REMOVE_ITEM = 'wishList/removeItem' 

//state function
// function reducer(state = initialState, action) {
//     // console.log(action)
//     // return state
//     // console.log(state)

//     switch(action.type) {
//         //Adding items in the cart functionality
//         case CART_ADD_ITEM:
//             return {...state, cartItems: [...state.cartItems, action.payload]}
//         case CART_REMOVE_ITEM:
//             return {...state, cartItems: state.cartItems.filter(
//                 (cartItem) => cartItem.productId !== action.payload.productId
//             )}
//             case CART_INCREASE_ITEM_QUANTITY:
//                 return {...state, cartItems: state.cartItems.map((cartItem) => {
//                     if(cartItem.productId === action.payload.productId) {
//                         return {...cartItem, quantity: cartItem.quantity + 1}
//                     }
//                     return cartItem
//                 }),}
//             case CART_DECREASE_ITEM_QUANTITY: 
//                 return {...state, cartItems: state.cartItems.map((cartItem) => {
//                     if(cartItem.productId === action.payload.productId) {
//                         return {...cartItem, quantity: cartItem.quantity - 1}
//                     }
//                     return cartItem
//                 })
//                 .filter((cartItem) => cartItem.quantity > 0)}
//             case WISHLIST_ADD_ITEM: 
//                 return {...state, wishList: [...state.wishList, action.payload]}
//             case WISHLIST_REMOVE_ITEM: 
//                 return {...state, wishList: state.wishList.filter(
//                     (wishListItem) => wishListItem.productId !== action.payload.productId
//                 ),}
//         default: 
//             return state
//     }
// }

//reducer
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());  //we can't pass single reducer for we have to use other reducers also.
//However redux gives us function which has the ability to use multiple reducers known as combineReducers

console.log(store)

store.dispatch({type: CART_ADD_ITEM, payload: {productId: 12, quantity: 1}})   //when dispatched it calls the reducer function.
store.dispatch({type: CART_ADD_ITEM, payload: {productId: 1, quantity: 1}})   //when dispatched it calls the reducer function.
// store.dispatch({type: CART_ADD_ITEM, payload: {productId: 15, quantity: 1}})   //when dispatched it calls the reducer function.
// store.dispatch({type: CART_ADD_ITEM, payload: {productId: 7, quantity: 1}})   //when dispatched it calls the reducer function.
store.dispatch({type: CART_REMOVE_ITEM, payload: {productId: 1}})   //when dispatched it calls the reducer function.
store.dispatch({type: CART_INCREASE_ITEM_QUANTITY, payload: {productId: 12}}) //when dispatched it calls the reducer function and increment product quantity by 1.
// store.dispatch({type: CART_INCREASE_ITEM_QUANTITY, payload: {productId: 12}}) //when dispatched it calls the reducer function and increment product quantity by 1.
// store.dispatch({type: CART_INCREASE_ITEM_QUANTITY, payload: {productId: 15}}) //when dispatched it calls the reducer function and increment product quantity by 1.
store.dispatch({type: CART_DECREASE_ITEM_QUANTITY, payload: {productId: 12}}) //when dispatched it calls the reducer function and decrements product quantity by 1.
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 18}}) //when dispatched it calls the reducer function and increment wishlist quantity by 1.
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 11}}) //when dispatched it calls the reducer function and increment wishlist quantity by 1.
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 18}}) //when dispatched it calls the reducer function and decrement wishlist quantity by 1.
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 11}}) //when dispatched it calls the reducer function and decrement wishlist quantity by 1.
console.log(store.getState())

