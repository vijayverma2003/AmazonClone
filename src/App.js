import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "../src/styles/carousel.css";
import "../src/styles/homePageGrids.css";
import "../src/styles/productsPage.css";
import "../src/styles/productCard.css";
import "../src/styles/navbar.css";
import "../src/styles/cartPage.css";
import "../src/styles/forms.css";
import "../src/styles/checkout.css";

import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import CartContext from "./context/CartContext";
import Computers from "./components/categories/Computers";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar";
import ProductPage from "./components/Pages/ProductPage";
import Televisions from "./components/categories/Televisions";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import BeautyPicks from "./components/categories/BeautyPicks";
import Checkout from "./components/Pages/Checkout";

function App() {
  // Quantity in cart
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <CartContext.Provider value={{ quantity, setQuantity }}>
        <Navbar />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/beauty" component={BeautyPicks} />
          <Route path="/tv" component={Televisions} />
          <Route path="/computers" component={Computers} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
