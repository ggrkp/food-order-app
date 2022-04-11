import styles from './CartModal.module.css'
import ReactDom from 'react-dom'
// ! εδω πρεπει να εμφανιζονται τα στοιχεια της λιστας αγορων.
import PrimaryButton from '../UI/PrimaryButton'
// import CartItemList from './CartItemList'
import CartItem from './CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const CartModal = (props) => {

    //  ! dummy cart items 
    const cartItemsArray = [
        { name: 'Item 1', price: 100 },
        { name: 'Item 2', price: 40 },

    ]
    const itemList = cartItemsArray.map(item => <CartItem item={item} />)

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

                    {/* Modal Content - Cart Items */}
                    {itemList}

                    {/* <CartItemList /> Mporei na ginei kai me ksexwristo component... */}

                    {/* Order Button */}
                    <div className={styles["float-right"]}>
                        
                        <div
                            className={styles["total-amount"]}>
                            Total Amount: <FontAwesomeIcon icon={faDollarSign} /> 50
                        </div>

                        <div className={styles["btn-container"]}>
                            <PrimaryButton
                                id="order-btn"
                                buttonText={<>Place Order<FontAwesomeIcon icon={faPaperPlane} /></>}
                                onClick={orderHandler}
                            />
                        </div>

                    </div>
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
