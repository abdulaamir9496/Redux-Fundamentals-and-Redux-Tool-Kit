//wishlist action types:
export const WISHLIST_ADD_ITEM = 'wishList/addItem'
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem' 

//Action creator
export function removeWishListItem(productId) {
    return {
        type: WISHLIST_REMOVE_ITEM, 
    // payload: {productId : productId}  //In modern JS if both key and value are same we can write only one.
        payload: {productId}  //It works if we write only one as only productId. It will take key value automatically.
    }
}

//Reducer
export default function WishListReducer(state = [], action) {
    switch(action.type) {
        //Adding items in the wishlist functionality
            case WISHLIST_ADD_ITEM: 
                return [...state, action.payload]
            case WISHLIST_REMOVE_ITEM: 
                return state.filter(
                    (wishListItem) => wishListItem.productId !== action.payload.productId
                )
        default: 
            return state
    }
}
