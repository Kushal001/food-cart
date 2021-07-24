import { Fragment, useState } from "react";
import "./App.css";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <Fragment>
      {isCartOpen && <Cart onClose={cartCloseHandler} />}
      <Header />
      <main className="main">
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
