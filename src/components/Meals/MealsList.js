import MealItem from './MealItem'
import PrimaryButton from '../UI/PrimaryButton'
import styles from "./MealsList.module.css"
import { useEffect, useState, useCallback } from 'react'
const MealsList = () => {

    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')


    const fetchHandler = useCallback(() => {
        setLoading(true)
        const mealList = []
        fetch('https://react-http-56e5c-default-rtdb.firebaseio.com/Meals.json')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to fetch data.')
                }
            })
            .then(data => {
                for (let key in data) {
                    console.log(key)
                    mealList.push({ id: key, ...data[key] })
                }
                setMeals(mealList)
                setLoading(false)

            })
            .catch(err => {
                setError(err)
            })
    }, [])

    useEffect(() => {
        fetchHandler()
    }, [fetchHandler])

    let buttonText = "Loading..."
    let disabled = true
    if (!loading) {
        disabled = false
        buttonText = 'Load Meals'
    }

    if (loading && error) {
        buttonText = 'Loading failed'
    }

    const menu = meals.map((meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />)

    return (
        <>
            <ul className={styles["menu-container"]}>
                <PrimaryButton disabled={disabled} onClick={fetchHandler}> {buttonText} </PrimaryButton>
                {error
                    ?
                    <p className={styles.error}> {`${error}`}</p>
                    :
                    menu
                }
            </ul>
        </>
    )
}
export default MealsList