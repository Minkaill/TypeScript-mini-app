import React from "react";
import CreateProduct from "../components/CreateProduct";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Product from "../components/Product";
import { useProducts } from "../hooks/useProducts";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

const ProductsPage = () => {
  const { products, error, isLoading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading ? (
        <Loader />
      ) : (
        products.map((item) => <Product key={item.id} product={item} />)
      )}
      {error && <ErrorMessage error={error} />}

      {modal && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        onClick={() => open()}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 text-center py-2"
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
