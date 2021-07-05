import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homePageGrids.css";

function HomePageGrids() {
  return (
    <div className="home-grid">
      <div className="grid grid-2x4">
        <div className="card">
          <header className="card-header-primary">
            <h2 className="bolder">Beauty Picks</h2>
          </header>
          <div className="card-body-primary">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
              alt="Beauty Picks"
            />
          </div>
          <footer>
            <Link className="btn btn-link" to="/beauty">
              Shop Now
            </Link>
          </footer>
        </div>
        <div className="card">
          <header className="card-header-primary">
            <h2 className="bolder">Find your ideal TV</h2>
          </header>
          <div className="card-body-primary">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
              alt="Find your ideal TV"
            />
          </div>
          <footer>
            <Link className="btn btn-link" to="/tv">
              Shop Now
            </Link>
          </footer>
        </div>
        <div className="card">
          <header className="card-header-primary">
            <h2 className="bolder">Computer & Accessories</h2>
          </header>
          <div className="card-body-primary">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
              alt="Computer & Accessories"
            />
          </div>
          <footer>
            <Link className="btn btn-link" to="/computers">
              Shop Now
            </Link>
          </footer>
        </div>
        <div>
          <div className="card">
            <header>
              <h2 className="bolder">Sign in for best Experience</h2>
            </header>
            <div className="card-body-primary">
              <Link to="/login" className="btn btn-primary">
                Sign in securely
              </Link>
            </div>
          </div>
          <img
            className="photo-shipping"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <header className="card-header-primary">
            <h2 className="bolder">Oculus</h2>
          </header>
          <div className="card-body-primary">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_2x._SY608_CB667158353_.jpg"
              alt="We ship over 45 Millions prodcuts over the world."
            />
          </div>
          <footer>
            <Link className="btn btn-link" to="/oculus">
              See More
            </Link>
          </footer>
        </div>
        <div className="card">
          <header className="card-header-primary">
            <h2 className="bolder">Get fit at home</h2>
          </header>
          <div className="card-body-primary">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg"
              alt="Get fit at home"
            />
          </div>
          <footer>
            <Link className="btn btn-link" to="/fitness">
              Explore Now
            </Link>
          </footer>
        </div>
        <div className="card">
          <header className="card-header-primary">
            <h2 className="bolder">AmazonBasics</h2>
          </header>
          <div className="card-body-primary">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
              alt="AmazonBaiscs"
            />
          </div>
          <footer>
            <Link className="btn btn-link" to="/tv">
              See More
            </Link>
          </footer>
        </div>
        <div className="card">
          <header>
            <h2 className="bolder">Shop by Category</h2>
          </header>
          <div className="small-card-body-primary">
            <div className="grid grid-2x2">
              <div>
                <img
                  className="small-image-2"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <Link className="btn btn-link" to="/computers">
                    Computer & Accessories
                  </Link>
                </div>
              </div>
              <div>
                <img
                  className="small-image"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <button className="btn btn-link">Video Games</button>
                </div>
              </div>
              <div>
                <img
                  className="small-image"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <button className="btn btn-link">Baby</button>
                </div>
              </div>
              <div>
                <img
                  className="small-image"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <div className="link-container">
                    <button className="btn btn-link">Toys and Games</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <Link className="btn btn-link" to="/tv">
              See More
            </Link>
          </footer>
        </div>
        <div className="card card-secondary">
          <header>
            <h2 className="bolder">Gaming Accessories</h2>
          </header>
          <div className="small-card-body-primary">
            <div className="grid grid-2x2">
              <div>
                <img
                  className="small-image-2"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <Link className="btn btn-link" to="/computers">
                    Headsets
                  </Link>
                </div>
              </div>
              <div>
                <img
                  className="small-image-2"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <button className="btn btn-link">KeyBoards</button>
                </div>
              </div>
              <div>
                <img
                  className="small-image-2"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <button className="btn btn-link">Mice</button>
                </div>
              </div>
              <div>
                <img
                  className="small-image-2"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg"
                  alt=""
                />
                <div className="link-container">
                  <div className="link-container">
                    <button className="btn btn-link">Chairs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <Link className="btn btn-link" to="/tv">
              See More
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default HomePageGrids;
