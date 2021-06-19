import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "../src/styles/carousel.css";
import "../src/styles/homePageGrids.css";
import "../src/styles/productsPage.css";
import "../src/styles/productCard.css";

import Computers from "./components/categories/Computers";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <main>
      <Computers />
    </main>
  );
}

export default App;
