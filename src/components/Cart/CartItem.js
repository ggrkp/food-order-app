import React from 'react'
import Card from '../UI/Card'
import styles from './CartItem.module.css'
import PrimaryButton from '../UI/PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const CartItem = (props) => {

    const plusHandler = props => {

     }
    const minusHandler = props => {

     }

    const meal = props.item
   
    return (
        <Card >
            <div>
                <h3 className={styles.name}>{meal.name} </h3>
                <h4 className={styles.price}>$ {meal.price} </h4>
                <p>Quantity: {meal.amount}</p>
            </div>
            <div>
                <PrimaryButton onClick={minusHandler}>
                    <FontAwesomeIcon icon={faMinus} />
                </PrimaryButton>
                
                <PrimaryButton onClick={plusHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                </PrimaryButton>
            </div>
        </Card>
    )
}

export default CartItem