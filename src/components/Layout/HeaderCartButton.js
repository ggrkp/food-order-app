import styles from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context' //Here we want the context itself in order to use it. Not Context Provider.

const HeaderCartButton = props => {
    
    const cartCtx = useContext(CartContext)
    const { items } = cartCtx
    const cartAmount = items.reduce((prevVal, currVal) => prevVal + currVal.amount, 0)
    const [btnHL, setBtnHL] = useState(false)
    useEffect(() => {
        
        if (items.length === 0) {
            return
        }

        setBtnHL(true)
        const timer = setTimeout(() =>{
            setBtnHL(false)
        }, 300)

        return ()=>{
            clearTimeout(timer)
        }

    }, [items])

    const btnClasses = `${styles.cartbutton} ${btnHL ? styles.bump : ''}`

    return (
        <>
            <button
                onClick={props.onClick}
                className={btnClasses} >
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