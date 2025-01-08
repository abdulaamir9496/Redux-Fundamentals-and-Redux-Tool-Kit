import { createStore } from 'redux'
import { productsList } from './productsList';

//state data
const initialState = {
    // products: productsList,
    products: productsList,    //There can be more than one product in the list with the details as shown above.
    cartItems: [],  //create add & remove functionality for cart items
    wishList: []   //create add & remove functionality for wishList
}

const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem' 

//state function
function reducer(state = initialState, action) {
    // console.log(action)
    // return state
    // console.log(state)

    switch(action.type) {
        //Adding items in the cart functionality
        case CART_ADD_ITEM:
            return {...state, cartItems: [...state.cartItems, action.payload]}
        case CART_REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(
                (cartItem) => cartItem.productId !== action.payload.productId
            )}
            case CART_INCREASE_ITEM_QUANTITY:
                return {...state, cartItems: state.cartItems.map((cartItem) => {
                    if(cartItem.productId === action.payload.productId) {
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    }
                    return cartItem
                }),}
            case CART_DECREASE_ITEM_QUANTITY: 
                return {...state, cartItems: state.cartItems.map((cartItem) => {
                    if(cartItem.productId === action.payload.productId) {
                        return {...cartItem, quantity: cartItem.quantity - 1}
                    }
                    return cartItem
                })
                .filter((cartItem) => cartItem.quantity > 0)}
            case WISHLIST_ADD_ITEM: 
                return {...state, wishList: [...state.wishList, action.payload]}
            case WISHLIST_REMOVE_ITEM: 
                return {...state, wishList: state.wishList.filter(
                    (wishListItem) => wishListItem.productId !== action.payload.productId
                ),}
        default: 
            return state
    }
}

//reducer
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
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
store.dispatch({type: CART_DECREASE_ITEM_QUANTITY, payload: {productId: 12}}) //when dispatched it calls the reducer function and decrements product quantity by 1.
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 18}}) //when dispatched it calls the reducer function and increment wishlist quantity by 1.
store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId: 11}}) //when dispatched it calls the reducer function and increment wishlist quantity by 1.
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 18}}) //when dispatched it calls the reducer function and decrement wishlist quantity by 1.
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 11}}) //when dispatched it calls the reducer function and decrement wishlist quantity by 1.
console.log(store.getState())

