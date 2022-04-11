import styles from './Button.module.css'

const PrimaryButton = (props) =>{
    return(
        <button className={styles["primary-button"]} onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default PrimaryButton