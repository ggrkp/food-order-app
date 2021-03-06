import Header from './components/Layout/Header'
import React from 'react'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
function App() {
  return (
    <CartProvider>
      <Header />
      <Meals />
    </CartProvider>
  );
}

export default App;
