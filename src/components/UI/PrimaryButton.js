import styles from './Button.module.css'

const PrimaryButton = (props) =>{
    return(
        <button className={styles["primary-button"]} onClick={props.onClick}>{props.children}</button>
    )
}

export default PrimaryButton