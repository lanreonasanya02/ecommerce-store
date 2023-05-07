import React from "react";
import { PRODUCTS } from "../../Products";
import Products from "../Products";
import Navbar from "../navbar/Navbar";

const Collections = () => {
  return (
    <>
      <div className="filter">
        <span> Filter Category:</span>{" "}
        <select name="" id="">
          <option value="">All</option>
          <option value="">Men</option>
          <option value="">Women</option>
        </select>
      </div>

      {PRODUCTS.map((product) => {
        return (
          <>
            <Products data={product} />
            <div style={{ display: "none" }}>
              <Navbar data={product} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Collections;
