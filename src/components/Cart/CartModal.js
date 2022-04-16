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
    const itemList = cartCtx.itemList.map(item => <CartItem item={item} />)
    const hasItems = itemList.length > 0

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

                    {hasItems ? (itemList) : <p>Currently, there are no items in your cart.</p>}

                    {/* <CartItemList /> Mporei na ginei kai me ksexwristo component... */}

                    {/* Order Button */}
                    {hasItems > 0 &&
                        <div className={styles["float-right"]}>

                            <div
                                className={styles["total-amount"]}>
                                Total Amount: <FontAwesomeIcon icon={faDollarSign} /> {cartCtx.totalAmount}
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
