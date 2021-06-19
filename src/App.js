import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "../src/styles/carousel.css";
import "../src/styles/homePageGrids.css";
import "../src/styles/productsPage.css";
import "../src/styles/productCard.css";

import Computers from "./components/categories/Computers";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/Pages/ProductPage";
import Televisions from "./components/categories/Televisions";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/televisions" component={Televisions} />
        <Route path="/computers" component={Computers} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </main>
  );
}

export default App;
