import React from 'react';

const CartContext = React.createContext(
    
    {
        itemList: [],
        totalAmount: 0,
        addItem: (item) => {},
        removeItem: (id) => {},
    }
)

export default CartContext;