import Input from '../UI/Input'
import PrimaryButton from '../UI/PrimaryButton'
import styles from './MealForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
// ! Εδω θα γινεται η προσθεση ενος νεου στοιχειου στην λιστα αγορων. 
const MealForm = (props) => {

    const amountRef = useRef()
    
    const [amountIsValid, setAmountIsValid] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault()
        const enteredAmount = amountRef.current.value
        const enteredAmountNum = +enteredAmount

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNum < 1 ||
            enteredAmountNum > 5) {
            setAmountIsValid(false)
            return
        }
        else{
            setAmountIsValid(true)
        }
        props.onAddToCart(enteredAmountNum)
    }

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <Input ref={amountRef} label="Amount" input={
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
            {!amountIsValid && <p>Amount is invalid.</p>}
        </form>
    )
}

export default MealForm