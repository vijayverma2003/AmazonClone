import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AddProduct from "./components/Pages/AddProduct";
import Bugsnag from "@bugsnag/js";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/CartContext";
import Categories from "./components/Pages/Categories";
import Checkout from "./components/Pages/Checkout";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import Navbar from "./components/Navbar";
import ProductPage from "./components/Pages/ProductPage";
import RegisterPage from "./components/Pages/RegisterPage";
import SearchContext from "./context/SearchContext";
import SearchPage from "./components/Pages/SearchPage";
import UserContext from "./context/UserContext";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
  }, []);

  Bugsnag.notify("Test error message");

  return (
    <UserContext.Provider value={{ user }}>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <CartContext.Provider value={{ quantity, setQuantity }}>
          <Navbar />
          <Switch>
            <ProtectedRoute path="/new" component={AddProduct} />
            <Route path="/search" component={SearchPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/category/:id" component={Categories} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </CartContext.Provider>
      </SearchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
