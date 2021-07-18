import { Fragment, useState } from "react";
import "./App.css";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Modal from "./Components/UI/Modal";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <Fragment>
      {isCartOpen && (
        <Modal onClose={cartCloseHandler}>
          Hello modal
        </Modal>
      )}
      <Header />
      <main className="main">
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
