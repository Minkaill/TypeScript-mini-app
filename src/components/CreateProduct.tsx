import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 52,
    count: 22,
  },
};

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("")

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")

    if(value.trim().length === 0) {
        setError("Please enter valid title.")
        return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products", productData
    );

    onCreate(response.data)
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-[80%] outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      <button className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>

      {error && <ErrorMessage error={error} />}

    </form>
  );
};

export default CreateProduct;
