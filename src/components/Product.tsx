import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = (props: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? "bg-yellow-400" : "bg-blue-400"
  const btnClasses = ["py-2 px-4 border", btnClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img
        src={props.product.image}
        className="w-1/6"
        alt={props.product.title}
      />
      <p>{props.product.title}</p>
      <span className="font-bold">${props.product.price}</span>
      <button
        onClick={() => setDetails(!details)}
        className={btnClasses.join(" ")}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>

      {details && (
        <div>
          <p>{props.product.description}</p>
          <p><span style={{ fontWeight: "bold" }}>{props.product?.rating?.rate}</span></p>
        </div>
      )}
    </div>
  );
};

export default Product;
