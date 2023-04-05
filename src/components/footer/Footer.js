import React from "react";
import "./Footer.css"
import Logo from "../../assetes/images/AllTop.png";
export default function Footer() {
  return (
    <footer>
      <div className="main-foter-context">
        <div className="logo-div">
          <img src={Logo} alt="" />
        </div>
        <div className="icons-div">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-instagram"></i>
        </div>
          <div className="context-div">
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
      </div>
      <div className="Footer-text-div">
        <h6>© All Right Reserved, 2022</h6>
      </div>
    </footer>
  );
}
