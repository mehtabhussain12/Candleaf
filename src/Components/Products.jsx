import React from "react";
import Cards from "./Cards";

const Products = () => {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center my-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Products</h1>
          <p className="font-Poppins text-lg">
            Order it for you or for your beloved ones
          </p>
        </div>
      </div>
     <Cards/>
    </>
  );
};

export default Products;
