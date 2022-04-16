import React from 'react'
import Card from '../UI/Card'
import styles from './CartItem.module.css'
import PrimaryButton from '../UI/PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faMultiply } from '@fortawesome/free-solid-svg-icons'

const CartItem = (props) => {
    return (
        <Card >
            <div>
                <h3 className={styles.name}>{props.name} </h3>
                <h4 className={styles.price}>$ {props.price} </h4>
                <p><FontAwesomeIcon icon={faMultiply} /> {props.amount}</p>
            </div>
            <div>
                <PrimaryButton onClick={props.onRemove}>
                    <FontAwesomeIcon icon={faMinus} />
                </PrimaryButton>

                <PrimaryButton onClick={props.onAdd}>
                    <FontAwesomeIcon icon={faPlus} />
                </PrimaryButton>
            </div>
        </Card>
    )
}

export default CartItem