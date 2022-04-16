import styles from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../../store/cart-context' //Here we want the context itself in order to use it. Not Context Provider.

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)
    const cartAmount = cartCtx.items.reduce((prevVal,currVal) => prevVal + currVal.amount, 0)
    
    return (
        <>
            <button
                onClick={props.onClick}
                className={styles.cartbutton}>
                <FontAwesomeIcon icon={faCartShopping} />
                Your Cart
                <span className={styles["item-count"]}>
                    {cartAmount}
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton