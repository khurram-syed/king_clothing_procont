import {createSelector}  from 'reselect'

const selectCart = state => state.cart

export const selectCartHidden = createSelector(
     [selectCart], cart=>cart.hidden
)
export const selectCartItems =createSelector(
    [selectCart], cart=> cart.cartItems
)

export const selectCartItemsCount= createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((acc,item)=>acc+item.qty,0)
)
export const selectCartItemTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,item)=>acc+(item.qty*item.price),0)
)