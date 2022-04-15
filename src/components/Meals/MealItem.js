import MealForm from "./MealForm"
import styles from './MealItem.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const MealItem = (props) => {

    const cartCtx = useContext(CartContext)
    // We call that here because here we do have all the information
    //  we need about the meal item to be added to cart.
    const addToCartHandler = (amount) => {
        const newItem = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        }
        console.log(newItem)
        cartCtx.addItem(newItem)
    }

    return (
        <li className={styles.meal}>
            <div className={styles["flex-container"]}>
                <div>
                    <h3 className={styles["meal-name"]}>{props.name} </h3>
                    <span className={styles["meal-desc"]}>{props.description}</span>
                    <h4 className={styles["meal-price"]}><FontAwesomeIcon icon={faDollarSign} /> {props.price} </h4>
                </div>
                <div className={styles["meal-form"]}>
                    {/* Into this form, meal amount is calculated and returned. */}
                    <MealForm onAddToCart={addToCartHandler} />
                </div>
            </div>
        </li >
    )
}

export default MealItem