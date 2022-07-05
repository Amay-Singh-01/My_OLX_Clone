import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">SELECT</option>
              <option value="Headphones">Headphones</option>
              <option value="Cameras">Cameras</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Laptops and Accessories">Laptops and Accessories</option>
              <option value="Sunglasses">Sunglasses</option>
              <option value="Shoes and Apparel">Shoes and Apparel</option>
              <option value="Miscalleneous">Miscalleneous</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Headphones")} >Headphones</span>
            <span onClick={()=>setCategory("Cameras")} >Cameras</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Laptops and Accessories")} >Laptops and Accessories</span>
            <span onClick={()=>setCategory("Sunglasses")} >Sunglasses</span>
            <span onClick={()=>setCategory("Shoes and Apparel")} >Shoes and Apparel</span>
            <span onClick={()=>setCategory("Miscalleneous")} >Miscalleneous</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
