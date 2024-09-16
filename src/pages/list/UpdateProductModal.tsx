import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { UpdateProductModalProps, Product } from "../../types/list";

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  visible,
  onClose,
  onSubmit,
  product,
}) => {
  const [form] = Form.useForm();
  const [inStock, setInStock] = useState(product?.inStock || false);

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
      setInStock(product.inStock);
    } else {
      form.resetFields(); // Reset form if no product is selected (for adding new)
      setInStock(false); // Default to false for new product
    }
  }, [product, form]);

  const handleFormSubmit = (values: any) => {
    const updatedProduct: Product = {
      ...product, // Retain current product values if editing
      ...values,
      inStock,
    } as Product;
    onSubmit(updatedProduct);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={product ? "Edit Product" : "Add Product"}
    >
      <Form form={form} onFinish={handleFormSubmit} layout="vertical">
        <Form.Item
          name="title"
          label="Product Name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="Image URL"
          rules={[{ required: true, message: "Please enter image URL" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please enter category" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="expectedDispatch"
          label="Expected Dispatch Date"
          rules={[{ required: true, message: "Please enter dispatch date" }]}
        >
          <Input type="date" />
        </Form.Item>

        <Form.Item label="In Stock">
          <Checkbox
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          >
            In Stock
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateProductModal;
