import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useProducts } from "./hooks/useProducts";
import { useState } from 'react';
import { IProduct } from "./models";

function App() {
  const { products, error, isLoading, addProduct } = useProducts();
  const [modal, setModal] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading ? (
        <Loader />
      ) : (
        products.map((item) => <Product key={item.id} product={item} />)
      )}
      {error && <ErrorMessage error={error} />}

      {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}
    </div>
  );
}

export default App;
