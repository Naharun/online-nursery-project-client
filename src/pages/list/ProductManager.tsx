import React, { useState } from "react";
import ProductList from "./ProductList";
import UpdateProductModal from "./UpdateProductModal";
import { Product } from "../../types/list";

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleFormSubmit = (updatedProduct: Product) => {
    if (selectedProduct) {
      // Editing an existing product
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    } else {
      // Adding a new product
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...updatedProduct, id: `${Math.random()}` }, // Generate a unique ID
      ]);
    }
    setModalVisible(false);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productId)
    );
  };

  const handleAddProduct = () => {
    setSelectedProduct(null); // Set to null for adding new product
    setModalVisible(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product); // Set selected product for editing
    setModalVisible(true);
  };

  return (
    <div>
      <ProductList
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      <button onClick={handleAddProduct}>Add New Product</button>

      {isModalVisible && (
        <UpdateProductModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          product={selectedProduct} // Pass selected product, can be null
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default ProductManager;
