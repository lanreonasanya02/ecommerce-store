import React, { useEffect } from "react";
import { PRODUCTS } from "../../Products";
import Products from "../Products";

const Collections = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
          </>
        );
      })}
    </>
  );
};

export default Collections;
