import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedAmount = state.totalAmount + (action.item.amount * action.item.price)

        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]

        let updatedItems

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem

        } else {
            updatedItems = state.items.concat(action.item)
        }


        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }

    }

    if (action.type === "REMOVE") {
        const itemToRemoveIndex = state.items.findIndex(
            (item) => item.id === action.id
        
            )
        const itemToRemove = state.items[itemToRemoveIndex]
        const updatedAmount = state.totalAmount - itemToRemove.price
        let updatedItems;

        if (itemToRemove.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else {
            const updatedItem = {
                ...itemToRemove, amount: (itemToRemove.amount - 1)
            }
            updatedItems = [...state.items]
            updatedItems[itemToRemoveIndex] = updatedItem
        }
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
        items: cartState.items,
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