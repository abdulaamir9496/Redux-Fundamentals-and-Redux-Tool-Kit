//cart  action types:
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

export default function CartReducer(state = [], action) {
    switch (action.type) {
    //Adding items in the cart functionality
    case CART_ADD_ITEM:
        return [...state, action.payload];
    case CART_REMOVE_ITEM:
        return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
        )
    case CART_INCREASE_ITEM_QUANTITY:
        return state.map((cartItem) => {
                if (cartItem.productId === action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        })
    case CART_DECREASE_ITEM_QUANTITY:
        return state.map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
            })
            .filter((cartItem) => cartItem.quantity > 0)
    // case WISHLIST_ADD_ITEM:
    //     return {...state, wishList: [...state.wishList, action.payload]}
    // case WISHLIST_REMOVE_ITEM:
    //     return {...state, wishList: state.wishList.filter(
    //         (wishListItem) => wishListItem.productId !== action.payload.productId
    //     ),}
    default:
        return state;
    }
}