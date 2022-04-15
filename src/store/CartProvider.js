import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item)
        const updatedAmount = state.totalAmount + (action.item.amount * action.item.price)

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }

    }
    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item })
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const cartContext = {
        itemList: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider >
    )
}

export default CartProvider