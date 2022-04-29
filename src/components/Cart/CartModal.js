import styles from './CartModal.module.css'
import ReactDom from 'react-dom'
import CartForm from './CartForm'
// ! εδω πρεπει να εμφανιζονται τα στοιχεια της λιστας αγορων.
import PrimaryButton from '../UI/PrimaryButton'
// import CartItemList from './CartItemList'
import CartItem from './CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'


const CartModal = (props) => {
    const cartCtx = useContext(CartContext)
    const [checkOut, setCheckOut] = useState(false)
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const itemList = cartCtx.items.map(item =>
        <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price * item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />)

    const hasItems = cartCtx.items.length > 0

    const closeModalHandler = () => {
        props.onCloseModal()
    }

    const orderHandler = () => {
        setCheckOut(true)
    }

    const [posting, setPosting] = useState(false)
    const [posted, setPosted] = useState(false)

    const confirmOrderHandler = (userData) => {
        setPosting(true)
        fetch('https://react-http-56e5c-default-rtdb.firebaseio.com/Orders.json',
            {
                method: 'POST',
                body: JSON.stringify({ user: userData, order: cartCtx.items })
            })

        setPosting(false)
        setPosted(true)
        cartCtx.clearCart()


    }
    const postingContent = <p>Posting order data... </p>
    const postedContent = <p>Order placed successfully. Thanks for choosing us.</p>
    const cartModalContent = <>
        {/* Modal Title */}
        <h1 className={styles["modal-title"]}>Your Cart</h1>

        {/* Modal Content - Cart Items List! */}
        <div className={styles["item-list"]}>
            {hasItems ? (itemList) : <p>Currently, there are no items in your cart.</p>}
        </div>

        {/* Order Button */}
        {hasItems > 0 &&
            <div className={styles["float-right"]}>

                <div
                    className={styles["total-amount"]}>
                    Total Amount: <FontAwesomeIcon icon={faDollarSign} /> {cartCtx.totalAmount.toFixed(2)}
                </div>

                {!checkOut && <div className={styles["btn-container"]}>
                    <PrimaryButton id="order-btn" onClick={orderHandler}>Place Order<FontAwesomeIcon icon={faPaperPlane} /></PrimaryButton>
                </div>}
            </div>}

        <div className={styles.clearfix}></div>

        {checkOut && <CartForm onConfirm={confirmOrderHandler} />}
    </>

    const ModalOverlay = (props) => {
        return (
            <div id="cart-modal" className={styles["modal"]}>
                <div className={styles["modal-content"]}>
                    <span onClick={closeModalHandler} className={styles["close"]}>&times;</span>
                    {!posting && !posted && cartModalContent}
                    {posting && postingContent}
                    {!posting && posted && postedContent}
                </div >
            </div >

        )
    }

    return (
        <>
            {ReactDom.createPortal(<ModalOverlay />, document.getElementById('modal'))}
        </>
    )
}

export default CartModal
