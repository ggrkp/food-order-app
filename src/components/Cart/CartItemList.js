
import CartItem from './CartItem'
const CartItemList = () => {

    //! Meal Form should change the state of cartItemsArray by adding items in it!

    const cartItemsArray= [
        { name: 'Item 1', price: 100 },
        { name: 'Item 2', price: 40 },

    ]

    const itemList = cartItemsArray.map(item => <CartItem item={item} />)
    return (
        <ul>
            {itemList}
        </ul>
    )
}
export default CartItemList