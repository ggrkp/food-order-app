import React from 'react'

const CartItem = (props) => {
    const meal = props.item
    return (
        <li >
            <h3>{meal.name} </h3>
            <h4 >{meal.price} </h4>
        </li>
    )
}

export default CartItem