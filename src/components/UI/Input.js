import styles from './Input.module.css'

const Input = props => {
    return (
        <div className={styles["input-container"]}>
            <label className={styles["item-label"]} htmlFor={props.input.id}>{props.label}</label>
            <input className={styles["item-input"]} {...props.input}/>
        </div>
    )
}
export default Input