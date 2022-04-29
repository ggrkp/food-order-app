import styles from './Button.module.css'

const PrimaryButton = (props) => {
    return (
        <button disabled={props.disabled} className={`${styles["primary-button"]} ${styles[props.className]}   ${props.className}`} onClick={props.onClick}>{props.children}</button>
    )
}

export default PrimaryButton