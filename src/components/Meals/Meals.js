import MealSummary from './MealSummary'
import MealsList from './MealsList'
import styles from './Meals.module.css'

const Meals = () => {
    return (
        <div className={styles.container}>
            <MealSummary />
            <MealsList/>
        </div>
    )
}
export default Meals