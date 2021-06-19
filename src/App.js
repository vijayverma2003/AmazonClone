import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/carousel.css";
import "../src/styles/homePageGrids.css";
import "../src/styles/productCard.css";
import "./App.css";

import HomePage from "../src/components/HomePage/HomePage";
import Televisions from "./components/categories/Televisions";
import Computers from "./components/categories/Computers";

function App() {
  return (
    <main>
      <Computers />
    </main>
  );
}

export default App;
