import React from "react";
import { useState } from "react";
import Header from "../Shared/Header";
import Ecommerce from "../Images/ecommerce.png";
import A from "../Images/cattura2.png";
import CategoryBox from "./CategoryBox";
import "./offerte.css";
import "./product.css";
import Nike from "./nike.png";
const Offerte = () => {
  const [hoverFromLink, setHoverFromLink] = useState(-1);
  const [navIndexHover, setNavIndexHover] = useState(-1);

  
  return (
    <>
      <Header
        hover={navIndexHover}
        setHoverFromLink={setHoverFromLink}
        page="offerte"
      />

      <div className="prova">
        <h1 id="font">Le nostre Offerte</h1>
        <img src={A} alt="" />
      </div>

      <CategoryBox />
      <div className="products">
        <div className="product">
          <div className="productContent">
            <h2>Nike Shoes</h2>
            <div className="prezzo">
              <h3>Prezzo: </h3>
              <span> €20,00 invece di €30,00</span>
            </div>
            <div className="coupon">
              <h3>Coupon:</h3>
              <span> 11111</span>
            </div>
            <div className="link">
              <button type="submit">Compra</button>
            </div>
          </div>
          <div className="imgBox">
            <img src={Nike} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerte;
