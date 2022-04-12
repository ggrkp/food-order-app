import MealForm from "./MealForm"
import styles from './MealItem.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const MealItem = (props) => {
    const meal = props.meal
    return (
        <li className={styles.meal}>
            <div className={styles["flex-container"]}>
                <div>
                    <h3 className={styles["meal-name"]}>{meal.name} </h3>
                    <span className={styles["meal-desc"]}>{meal.description}</span>
                    <h4 className={styles["meal-price"]}><FontAwesomeIcon icon={faDollarSign} /> {meal.price} </h4>
                </div>
                <div className={styles["meal-form"]}>
                    <MealForm />
                </div>
            </div>
        </li >
    )
}

export default MealItem