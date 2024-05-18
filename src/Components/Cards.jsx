import React from 'react'
import p1 from "../assets/product.png";
import p2 from "../assets/image 1.png";
import p3 from "../assets/img2.png";
import p4 from "../assets/img3.png";
import Benefits from './Benefits';

const Cards = () => {
    const products = [
        { name: "Spiced Mint", price: "9.99$", img: p1 },
        { name: "Strawberry", price: "9.99$", img: p2 },
        { name: "Cool Blueberries", price: "9.99$", img: p3 },
        { name: "Juicy Lemon", price: "9.99$", img: p4 },
      ];
    
  return (
  <>
   <div className="flex flex-wrap items-center justify-center gap-10">
        {products.map((product, index) => (
          <div key={index} className="mb-4 rounded-lg shadow-md max-w-sm">
            <div className="flex justify-center mb-4 bg-[#F7F8FA] ">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white px-4 py-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-[#56B280] float-end pb-4 font-semibold">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {products.map((product, index) => (
          <div key={index} className="mb-4 rounded-lg shadow-md max-w-sm">
            <div className="flex justify-center mb-4 bg-[#F7F8FA] ">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white px-4 py-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-[#56B280] float-end pb-4 font-semibold">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Benefits/>
  </>
  )
}

export default Cards
