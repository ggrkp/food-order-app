import styles from './CartModal.module.css'
import ReactDom from 'react-dom'
// ! εδω πρεπει να εμφανιζονται τα στοιχεια της λιστας αγορων.
import PrimaryButton from '../UI/PrimaryButton'
import CartItemList from './CartItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const CartModal = (props) => {



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
                    <h1 className={styles["modal-title"]}>Your Cart</h1>
                    <CartItemList />
                    <div className={styles["float-right"]}>
                        <PrimaryButton buttonText={<>Place Order <FontAwesomeIcon icon={faPaperPlane} /></>} onClick={orderHandler} />
                        <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                    </div>
                    <div className={styles.clearfix}></div>

                    <footer className={styles["modal-footer"]}>More text on footer section</footer>
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
