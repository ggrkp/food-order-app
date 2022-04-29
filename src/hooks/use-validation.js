import { useState } from 'react';
const useValidation = (validateValue) => {
    
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueValid = validateValue(value)
    const invalidInput = !valueValid && isTouched

    const onChangeHandler = (event) => {
        console.log(event.target.value)
        setValue(event.target.value) 
    }

    const onBlurHandler = () => {
        setIsTouched(true)
    }

    const resetValue = () => {
        setIsTouched(false)
        setValue('')
    }

    return {
        value,
        valueValid,
        invalidInput,
        resetValue,
        onChangeHandler,
        onBlurHandler
    }
}

export default useValidation