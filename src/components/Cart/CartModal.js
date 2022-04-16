import styles from './CartModal.module.css'
import ReactDom from 'react-dom'
// ! εδω πρεπει να εμφανιζονται τα στοιχεια της λιστας αγορων.
import PrimaryButton from '../UI/PrimaryButton'
// import CartItemList from './CartItemList'
import CartItem from './CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'


const CartModal = (props) => {
    const cartCtx = useContext(CartContext)

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
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />)

    const hasItems = cartCtx.items.length > 0

    const closeModalHandler = () => {
        props.onCloseModal()
    }

    const orderHandler = () => {
        console.log('Ordering...')
    }

    const ModalOverlay = (props) => {
        return (

            <div id="cart-modal" className={styles["modal"]}>
                <div className={styles["modal-content"]}>
                    <span onClick={closeModalHandler} className={styles["close"]}>&times;</span>

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

                            <div className={styles["btn-container"]}>
                                <PrimaryButton
                                    id="order-btn"
                                    onClick={orderHandler}>
                                    Place Order
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </PrimaryButton>
                            </div>

                        </div>}

                    <div className={styles.clearfix}></div>

                </div>
            </div>

        )
    }

    return (
        <>
            {ReactDom.createPortal(<ModalOverlay />, document.getElementById('modal'))}
        </>
    )
}

export default CartModal
