import styles from './CartForm.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton'
import useValidation from '../../hooks/use-validation'
const CartForm = (props) => {

    const validator = name => name.trim() !== ''

    const {
        value: nameValue,
        valueValid: nameValid,
        invalidInput: nameInvalid,
        onChangeHandler: nameChanged,
        onBlurHandler: nameBlurred,
        resetValue: nameReset } = useValidation(validator)
    const {
        value: postalValue,
        valueValid: postalValid,
        invalidInput: postalInvalid,
        onChangeHandler: postalChanged,
        onBlurHandler: postalBlurred,
        resetValue: postalReset } = useValidation(validator)
    const {
        value: cityValue,
        valueValid: cityValid,
        invalidInput: cityInvalid,
        onChangeHandler: cityChanged,
        onBlurHandler: cityBlurred,
        resetValue: cityReset } = useValidation(validator)
    const {
        value: streetValue,
        valueValid: streetValid,
        invalidInput: streetInvalid,
        onChangeHandler: streetChanged,
        onBlurHandler: streetBlurred,
        resetValue: streetReset } = useValidation(validator)

    let formIsValid = false
    if (nameValid && streetValid && cityValid && postalValid) {
        formIsValid = true
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!nameValid || !streetValid || !cityValid || !postalValid) {
            return;
        }

        fetch('', )
        nameReset()
        postalReset()
        streetReset()
        cityReset()
    }



    return (
        <form onSubmit={submitHandler}>
            <Card className={styles["center-align"]}>
                <h3 className={styles["form-title"]}>Fill in your information.</h3>
            </Card>

            <Card className={styles["mobile-form"]}>

                <div>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        value={nameValue}
                        type="text"
                        id="name"
                        className={styles.input}
                        placeholder='Your full name'
                        onChange={nameChanged}
                        onBlur={nameBlurred}
                    />
                    {nameInvalid && <p className={styles.error}>Name field is required.</p>}
                </div>

                <div>
                    <label htmlFor="street" className={styles.label}>Street</label>
                    <input
                        value={streetValue}
                        type="text"
                        id="street"
                        className={styles.input}
                        placeholder='Your street'
                        onChange={streetChanged}
                        onBlur={streetBlurred}
                    />
                    {streetInvalid && <p className={styles.error}>Street field is required.</p>}

                </div>

                <div>
                    <label htmlFor="postal" className={styles.label}>Postal Code</label>
                    <input
                        value={postalValue}
                        type="text"
                        id="postal"
                        className={styles.input}
                        placeholder='Your Postal Code'
                        onChange={postalChanged}
                        onBlur={postalBlurred}
                    />
                    {postalInvalid && <p className={styles.error}>Postal field Code is required.</p>}

                </div>

                <div>
                    <label htmlFor="city" className={styles.label}>City</label>
                    <input
                        id="city"
                        type="text"
                        className={styles.input}
                        placeholder='Your city'
                        onChange={cityChanged}
                        onBlur={cityBlurred}
                        value={cityValue}
                    />
                    {cityInvalid && <p className={styles.error}>City field is required.</p>}

                </div>

                <div className={styles.confirm}>
                    <PrimaryButton disabled={!formIsValid} className="confirm-button">Confirm</PrimaryButton>
                </div>
            </Card>
        </form>)

}
export default CartForm