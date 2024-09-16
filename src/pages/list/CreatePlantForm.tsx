import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  message,
  Checkbox,
  InputNumber,
} from "antd";
import {
  useCreatePlantsMutation,
  useGetPlantsQuery,
} from "../../redux/api/api";

const { Option } = Select;

interface CreatePlantFormProps {
  onClose: () => void; // Accept onClose prop
  onSuccess: () => void; // Accept onSuccess prop
}

const CreatePlantForm: React.FC<CreatePlantFormProps> = ({
  onClose,
  onSuccess,
}) => {
  // Add props to the component
  const [form] = Form.useForm();
  const [createPlant] = useCreatePlantsMutation();
  const { data: plantsData, isLoading } = useGetPlantsQuery();

  const handleCreate = () => {
    form
      .validateFields()
      .then((values) => {
        // Define available categories and map them
        const categoryMapping: { [key: string]: string } = {
          flowers: "flowers",
          gardenDecor: "gardenDecor",
          gifts: "gifts",
          pots: "pots",
          season: "season",
          seeds: "seeds",
        };

        const selectedCategory = categoryMapping[values.category];

        if (!selectedCategory) {
          message.error("Invalid category selected.");
          return;
        }

        const newDetails = {
          name: values.detailsName,
          image: values.detailsImage,
          price: values.price,
          expected_dispatch_date: values.expected_dispatch_date,
          add_to_cart: values.addToCart || false,
        };

        let updatedData;

        if (plantsData && plantsData[selectedCategory]) {
          const existingProduct = plantsData[selectedCategory].find(
            (product: any) =>
              product.name === values.name && product.image === values.image
          );

          if (existingProduct) {
            existingProduct.details.push(newDetails);

            updatedData = {
              [selectedCategory]: plantsData[selectedCategory].map(
                (product: any) =>
                  product.name === values.name ? existingProduct : product
              ),
            };
          } else {
            updatedData = {
              [selectedCategory]: [
                ...plantsData[selectedCategory],
                {
                  name: values.name,
                  image: values.image,
                  details: [newDetails],
                },
              ],
            };
          }
        } else {
          updatedData = {
            [selectedCategory]: [
              {
                name: values.name,
                image: values.image,
                details: [newDetails],
              },
            ],
          };
        }

        createPlant(updatedData)
          .unwrap()
          .then(() => {
            message.success("Plant created/updated successfully!");
            form.resetFields();
            onSuccess(); // Call onSuccess after creation
          })
          .catch((err: any) => {
            const errorMessage = err?.data?.message || "Unknown error";
            message.error(`Failed to create plant: ${errorMessage}`);
          });
      })
      .catch((_errorInfo) => {
        message.error("Please correct the errors in the form.");
      });
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please select a category" }]}
      >
        <Select placeholder="Select category">
          <Option value="flowers">Flowers</Option>
          <Option value="gardenDecor">Garden Decor</Option>
          <Option value="gifts">Gifts</Option>
          <Option value="pots">Pots</Option>
          <Option value="season">Seasonal Plants</Option>
          <Option value="seeds">Seeds</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        label="Plant Name"
        rules={[{ required: true, message: "Please enter the plant name" }]}
      >
        <Input placeholder="Enter plant name" />
      </Form.Item>

      <Form.Item
        name="image"
        label="Plant Image URL"
        rules={[
          { required: true, message: "Please enter the plant image URL" },
          { type: "url", message: "Please enter a valid URL" },
        ]}
      >
        <Input placeholder="Enter plant image URL" />
      </Form.Item>

      <Form.Item
        name="detailsName"
        label="Details Name"
        rules={[{ required: true, message: "Please enter the details name" }]}
      >
        <Input placeholder="Enter details name" />
      </Form.Item>

      <Form.Item
        name="detailsImage"
        label="Details Image URL"
        rules={[
          { required: true, message: "Please enter the details image URL" },
          { type: "url", message: "Please enter a valid URL" },
        ]}
      >
        <Input placeholder="Enter details image URL" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please enter the price" }]}
      >
        <InputNumber
          placeholder="Enter price"
          min={0}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name="expected_dispatch_date"
        label="Expected Dispatch Date"
        rules={[
          {
            required: true,
            message: "Please enter the expected dispatch date",
          },
        ]}
      >
        <Input placeholder="Enter dispatch date" />
      </Form.Item>

      <Form.Item
        name="addToCart"
        label="Add to Cart"
        valuePropName="checked"
        initialValue={false}
      >
        <Checkbox />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleCreate} loading={isLoading}>
          {isLoading ? "Saving..." : "Create Plant"}
        </Button>
        <Button onClick={onClose} style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePlantForm;
