import MealForm from "./MealForm"
import styles from './MealItem.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const MealItem = (props) => {
    const meal = props.meal
    return (
        <li className={styles.meal}>
            <h3 className={styles["meal-name"]}>{meal.name} </h3>
            <span className={styles["meal-desc"]}>{meal.description}</span>
            <h4 className={styles["meal-price"]}><FontAwesomeIcon icon={faDollarSign} /> {meal.price} </h4>
            <MealForm />
        </li>
    )
}

export default MealItem