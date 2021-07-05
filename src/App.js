import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

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
import SearchPage from "./components/Pages/SearchPage";
import SearchContext from "./context/SearchContext";
import Bugsnag from "@bugsnag/js";
import AddProduct from "./components/Pages/AddProduct";
import Fitness from "./components/categories/Fitness";
import Oculus from "./components/categories/Oculus";
import Categories from "./components/Pages/Categories";

function App() {
  // Quantity in cart
  const [quantity, setQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  Bugsnag.notify("Test error message");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <CartContext.Provider value={{ quantity, setQuantity }}>
        <Navbar />
        <Switch>
          <Route path="/new" component={AddProduct} />
          <Route path="/search" component={SearchPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/category/:id" component={Categories} />
          <Route path="/oculus" component={Oculus} />
          <Route path="/fitness" component={Fitness} />
          <Route path="/beauty" component={BeautyPicks} />
          <Route path="/tv" component={Televisions} />
          <Route path="/computers" component={Computers} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </CartContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
