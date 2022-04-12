import styles from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)

    const cartItemsNumber = cartCtx.items
        .reduce((currNum, item) => {
            return currNum + item.amount
        }, 0)

    return (
        <>
            <button
                onClick={props.onClick}
                className={styles.cartbutton}>
                <FontAwesomeIcon icon={faCartShopping} />
                Your Cart
                <span className={styles["item-count"]}>
                    {cartItemsNumber}
                </span>
            </button>
        </>
    )
}

export default HeaderCartButton