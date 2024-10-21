// // import { Button, Checkbox, Form, Input, message, Modal } from "antd";
// // import React from "react";
// // import { AddDetailsFormProps, TAddDetailsFormData } from "../../types/list";

// // const AddDetailsForm: React.FC<AddDetailsFormProps> = ({
// //   handleOk,
// //   handleCancel,
// //   isOpen,
// //   onSubmit,
// //   product,
// // }) => {
// //   const [form] = Form.useForm();

// //   const handleFormSubmit = (values: TAddDetailsFormData) => {
// //     if (!product) {
// //       message.error("No product selected.");
// //       return;
// //     }

// //     // Create submission data with all form values
// //     const submissionData: TAddDetailsFormData = {
// //       name: values.name,
// //       image: values.image,
// //       price: values.price,
// //       expected_dispatch_date: values.expected_dispatch_date,
// //       add_to_cart: values.add_to_cart,
// //     };

// //     // Pass the id separately as it's not part of TAddDetailsFormData
// //     onSubmit(submissionData);
// //   };

// //   return (
// //     <Modal
// //       footer={null}
// //       title="Add Product Details"
// //       open={isOpen}
// //       onOk={handleOk}
// //       onCancel={() => {
// //         form.resetFields();
// //         handleCancel();
// //       }}
// //     >
// //       <Form
// //         form={form}
// //         onFinish={handleFormSubmit}
// //         layout="vertical"
// //         initialValues={{}}
// //       >
// //         <Form.Item
// //           name="name"
// //           label="Product Name"
// //           rules={[{ required: true, message: "Please enter product name" }]}
// //         >
// //           <Input />
// //         </Form.Item>

// //         <Form.Item
// //           name="image"
// //           label="Product Image URL"
// //           rules={[{ required: true, message: "Please enter image URL" }]}
// //         >
// //           <Input />
// //         </Form.Item>

// //         <Form.Item
// //           name="price"
// //           label="Price"
// //           rules={[{ required: true, message: "Please enter price" }]}
// //         >
// //           <Input type="number" />
// //         </Form.Item>

// //         <Form.Item
// //           name="expected_dispatch_date"
// //           label="Expected Dispatch Date"
// //           rules={[{ required: true, message: "Please enter dispatch date" }]}
// //         >
// //           <Input type="date" />
// //         </Form.Item>

// //         <Form.Item
// //           label="Add to Cart"
// //           name="add_to_cart"
// //           valuePropName="checked"
// //         >
// //           <Checkbox />
// //         </Form.Item>

// //         <Form.Item>
// //           <Button type="primary" htmlType="submit">
// //             Submit
// //           </Button>
// //         </Form.Item>
// //       </Form>
// //     </Modal>
// //   );
// // };

// // export default AddDetailsForm;

// import { Button, Checkbox, Form, Input, message, Modal } from "antd";
// import React from "react";
// import { AddDetailsFormProps } from "../../types/list";

// const AddDetailsForm: React.FC<AddDetailsFormProps> = ({
//   handleOk,
//   handleCancel,
//   isOpen,
//   onSubmit,
//   product,
// }) => {
//   const [form] = Form.useForm();
//   const handleFormSubmit = (values: {
//     name: string;
//     image: string;
//     price: number;
//     category: string;
//   }) => {
//     if (!product) {
//       message.error("No product selected.");
//       return;
//     }
//     const submissionData = {
//       category: product.categoryName || values.category,
//       name: product.name,
//       details: [values],
//     };

//     onSubmit({ id: product._id, submissionData });
//   };
//   return (
//     <Modal
//       footer={null}
//       title="Add Product Details"
//       open={isOpen}
//       onOk={handleOk}
//       onCancel={() => {
//         form.resetFields();
//         handleCancel();
//       }}
//     >
//       <Form
//         form={form}
//         onFinish={handleFormSubmit}
//         layout="vertical"
//         initialValues={{}}
//       >
//         <Form.Item
//           name="name"
//           label="Product Name"
//           rules={[{ required: true, message: "Please enter product name" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="image"
//           label="Product Image URL"
//           rules={[{ required: true, message: "Please enter image URL" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="price"
//           label="Price"
//           rules={[{ required: true, message: "Please enter price" }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item
//           name="expected_dispatch_date"
//           label="Expected Dispatch Date"
//           rules={[{ required: true, message: "Please enter dispatch date" }]}
//         >
//           <Input type="date" />
//         </Form.Item>
//         <Form.Item
//           label="Add to Cart"
//           name="add_to_cart"
//           valuePropName="checked"
//         >
//           <Checkbox />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default AddDetailsForm;
