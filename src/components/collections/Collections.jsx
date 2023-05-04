import React from "react";
import { PRODUCTS } from "../../Products";
import Products from "../Products";
// import Products from "../Products";

const Collections = () => {
  return (
    <>
      <div className="filter">
        Filter Category:{" "}
        <select name="" id="">
          <option value="">All</option>
          <option value="">Men</option>
          <option value="">Women</option>
        </select>
      </div>

      {PRODUCTS.map((product) => {
        return <Products data={product} />;
      })}
    </>
  );
};

export default Collections;
