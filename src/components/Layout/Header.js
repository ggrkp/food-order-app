import React from "react"
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import CartModal from '../Cart/CartModal'
import { useState } from "react"

const Header = props => {

    const [openModal, setOpenModal] = useState()

    const closeModalHandler = () => {
        setOpenModal(false)
    }

    const cartClickHandler = () => {
        setOpenModal(true)
        console.log('Cart clicked')
    }

    return (
        <>
            {openModal && <CartModal onCloseModal={closeModalHandler} />}
            <header className={styles.header}>
                <h1 className={styles.title}>yummy.</h1>
                <div className={styles["header-right"]}>
                    <HeaderCartButton onClick={cartClickHandler} />
                </div>
                <div className={styles.clearfix}></div>
            </header>
        </>
    )

}

export default Header