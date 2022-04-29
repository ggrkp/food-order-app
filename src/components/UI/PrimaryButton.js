import styles from './Button.module.css'

const PrimaryButton = (props) =>{
    return(
        <button disabled = {props.disabled} className={`${styles["primary-button"]}  ${props.className}`} onClick={props.onClick}>{props.children}</button>
    )
}

export default PrimaryButton