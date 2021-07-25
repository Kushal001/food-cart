import { useState } from "react";
import "./App.css";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };

  const cartOpenHandler = () => {
    setIsCartOpen(true);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={cartCloseHandler} />}
      <Header openCart={cartOpenHandler} />
      <main className="main">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
