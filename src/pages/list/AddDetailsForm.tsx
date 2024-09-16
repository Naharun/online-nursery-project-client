import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Modal, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { AddDetailsFormProps } from "../../types/list";
import { TPlantDetail } from "../../types";

const AddDetailsForm: React.FC<AddDetailsFormProps> = ({
  visible,
  onClose,
  onSubmit,
  product,
}) => {
  const [form] = Form.useForm();
  const [details, setDetails] = useState<TPlantDetail[]>(
    product?.details || []
  );

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
      setDetails(product.details || []);
    }
  }, [product, form]);

  const handleFormSubmit = (values: any) => {
    const updatedProduct = { ...values, details };
    onSubmit(updatedProduct);
    form.resetFields();
  };

  const addDetail = () => {
    setDetails([
      ...details,
      {
        name: "",
        image: "",
        price: "",
        expected_dispatch_date: "",
        add_to_cart: false,
      },
    ]);
  };

  const removeDetail = (index: number) => {
    const updatedDetails = details.filter((_, i) => i !== index);
    setDetails(updatedDetails);
  };

  const updateDetail = (
    index: number,
    field: keyof TPlantDetail, // Valid keys of TPlantDetail
    value: any // Accepts any type for now
  ) => {
    setDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = {
        ...updatedDetails[index],
        [field]: value, // Safely update the field
      };
      return updatedDetails;
    });
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={product ? "Edit Product Details" : "Add Product Details"}
    >
      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        initialValues={product}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="image"
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
          name="expected_dispatch_date"
          label="Expected Dispatch Date"
          rules={[{ required: true, message: "Please enter dispatch date" }]}
        >
          <Input type="date" />
        </Form.Item>

        <h3>Product Details</h3>
        {details.map((detail, index) => (
          <Space key={index} direction="vertical" style={{ width: "100%" }}>
            <Form.Item label={`Detail ${index + 1} - Name`}>
              <Input
                value={detail.name}
                onChange={(e) => updateDetail(index, "name", e.target.value)}
                placeholder="Enter detail name"
              />
            </Form.Item>

            <Form.Item label={`Detail ${index + 1} - Image URL`}>
              <Input
                value={detail.image}
                onChange={(e) => updateDetail(index, "image", e.target.value)}
                placeholder="Enter image URL"
              />
            </Form.Item>

            <Form.Item label={`Detail ${index + 1} - Price`}>
              <Input
                type="number"
                value={detail.price}
                onChange={(e) => updateDetail(index, "price", e.target.value)}
                placeholder="Enter price"
              />
            </Form.Item>

            <Form.Item label={`Detail ${index + 1} - Expected Dispatch Date`}>
              <Input
                type="date"
                value={detail.expected_dispatch_date}
                onChange={(e) =>
                  updateDetail(index, "expected_dispatch_date", e.target.value)
                }
                placeholder="Enter dispatch date"
              />
            </Form.Item>

            <Form.Item label="Add to Cart">
              <Checkbox
                checked={detail.add_to_cart}
                onChange={(e) =>
                  updateDetail(index, "add_to_cart", e.target.checked)
                }
              />
            </Form.Item>

            <Button
              type="dashed"
              danger
              icon={<MinusCircleOutlined />}
              onClick={() => removeDetail(index)}
            >
              Remove Detail
            </Button>
          </Space>
        ))}

        <Button type="dashed" onClick={addDetail} icon={<PlusOutlined />}>
          Add New Detail
        </Button>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddDetailsForm;
