import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
       cartItems: []
    },
    reducers: {
        addItemToCart: (state,action) => {
        state.cartItems.push({
            ...action.payload.item,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity*action.payload.item.price
        })
           },

        updateQuantity: (state,action) => {
            const newCart = []
            state.cartItems.forEach(element => {
                if(element.id===action.payload.item.id) {
                    let countNew = element.quantity + action.payload.quantity
                    let totalSum = element.price * countNew
                    const changeCart = {...element, quantity: countNew, totalPrice: totalSum}
                    newCart.push(changeCart)
                } else {
                    newCart.push(element)
                }
            })
            state.cartItems=newCart

           },

        removeItemFromCart: (state,action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }

})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total,cartItems) => {
        return cartItems.totalPrice + total
    },0)
}

export const getCartItems = state => state.cart.cartItems;
export const {addItemToCart,updateQuantity,removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;