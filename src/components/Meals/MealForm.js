import Input from '../UI/Input'
import PrimaryButton from '../UI/PrimaryButton'
import styles from './MealForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
// ! Εδω θα γινεται η προσθεση ενος νεου στοιχειου στην λιστα αγορων. 
const MealForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <Input label="Amount" input={
                {
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }
            } />
            <PrimaryButton onClick={handleSubmit} ><FontAwesomeIcon icon={faPlus} />  Add to cart</PrimaryButton>
        </form>
    )
}

export default MealForm