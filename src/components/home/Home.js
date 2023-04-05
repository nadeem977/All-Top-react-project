import React from "react";
import "./home.css";
import Cards from "./Cards";
import logo from "../../assetes/images/logo-2.png";
export default function Home() {
  return (
    <>
      <div className="main-contexxt">
        <div className="logos">
          <div className="img-div">
            <img src={logo} alt="" />
            <h2>Tha Sun</h2>
          </div>
          <div className="img-div">
            <img src={logo} alt="" />
            <h2>Tha Sun</h2>
          </div>
          <div className="img-div">
            <img src={logo} alt="" />
            <h2>Tha Sun</h2>
          </div>
        </div>
        <div className="cards-content">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="logos">
          <div className="img-div btns">
            <button className="btn">Read More</button>
          </div>
          <div className="img-div btns">
            <button className="btn">Read More</button>
          </div>
          <div className="img-div btns">
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
      <div className="main-contexxt">
        <div className="logos">
          <div className="img-div">
            <img src={logo} alt="" />
            <h2>Tha Sun</h2>
          </div>
          <div className="img-div">
            <img src={logo} alt="" />
            <h2>Tha Sun</h2>
          </div>
          <div className="img-div">
            <img src={logo} alt="" />
            <h2>Tha Sun</h2>
          </div>
        </div>
        <div className="cards-content">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="logos">
          <div className="img-div btns">
            <button className="btn">Read More</button>
          </div>
          <div className="img-div btns">
            <button className="btn">Read More</button>
          </div>
          <div className="img-div btns">
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}
