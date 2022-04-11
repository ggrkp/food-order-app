import styles from './HeaderCartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const HeaderCartButton = props => {
    return (
        <>
            <button onClick={props.onClick} className={styles.cartbutton}><FontAwesomeIcon icon={faCartShopping} />  Your Cart <span className={styles["item-count"]}>10</span></button>
        </>
    )
}

export default HeaderCartButton