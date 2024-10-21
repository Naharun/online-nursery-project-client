// import React, { useState } from "react";
// import { Table, Button, Modal, message, Image } from "antd";
// import {
//   useGetPlantsQuery,
//   useDeletePlantMutation,
//   useUpdatePlantMutation,
//   useUpdateDetailMutation,
// } from "../../redux/api/api";
// import UpdateProductModal from "../list/UpdateProductModal";
// import AddDetailsForm from "../list/AddDetailsForm";
// import { TCategory, TPlantDetail, TPlants, TPlantsNew } from "../../types";

// const ProductList: React.FC = () => {
//   // API calls
//   const { data: response, isLoading, isError, refetch } = useGetPlantsQuery();
//   const [deletePlant] = useDeletePlantMutation();
//   const [updatePlant] = useUpdatePlantMutation();
//   const [updateDetail] = useUpdateDetailMutation();

//   // State
//   const [selectedProduct, setSelectedProduct] = useState<
//     (TPlants & { categoryName?: string }) | null
//   >(null);
//   const [isUpdateModalVisible, setIsUpdateModalVisible] =
//     useState<boolean>(false);
//   const [isAddDetailsModalVisible, setIsAddDetailsModalVisible] =
//     useState<boolean>(false);

//   const handleDelete = (id: string) => {
//     Modal.confirm({
//       title: "Are you sure you want to delete this product?",
//       onOk: () => {
//         deletePlant(id)
//           .unwrap()
//           .then(() => {
//             message.success("Plant deleted successfully!");
//             refetch();
//           })
//           .catch((err: string) => {
//             message.error(`Failed to delete plant: ${err}`);
//           });
//       },
//     });
//   };

//   const handleUpdate = (record: TPlants) => {
//     setSelectedProduct(record);
//     setIsUpdateModalVisible(true);
//   };

//   const handleAddDetails = (record: TPlants & { categoryName: string }) => {
//     setSelectedProduct(record);
//     setIsAddDetailsModalVisible(true);
//   };

//   const handleUpdateSubmit = (updatedProduct: TPlants) => {
//     updatePlant({ id: updatedProduct._id, data: updatedProduct })
//       .unwrap()
//       .then(() => {
//         message.success("Plant updated successfully!");
//         setIsUpdateModalVisible(false);
//         refetch();
//       })
//       .catch((err: string) => {
//         message.error(`Failed to update plant: ${err}`);
//       });
//   };

//   const handleAddNewDetails = async (updatedProduct: TPlantsNew) => {
//     console.log("updatedProduct", updatedProduct);
//     try {
//       if (!updatedProduct) {
//         throw new Error("Product ID is missing");
//       }
//       await updateDetail({
//         id: updatedProduct.id,
//         data: updatedProduct.submissionData,
//       })
//         .unwrap()
//         .then(() => {
//           message.success("Details added successfully!");
//           setIsAddDetailsModalVisible(false);
//           refetch();
//         });
//     } catch (error) {
//       message.error("Failed to add details.");
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error fetching plants!</p>;

//   const validData =
//     response?.data?.flatMap((category: TCategory) =>
//       Object.keys(category).flatMap((key) => {
//         if (Array.isArray(category[key])) {
//           return category[key].map((item: TPlants) => ({
//             ...item,
//             categoryName: key,
//           }));
//         }
//         return [];
//       })
//     ) || [];

//   const columns = [
//     {
//       title: "Plant Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Details",
//       dataIndex: "details",
//       key: "details",
//       render: (details: TPlantDetail[]) => (
//         <>
//           {details.map((detail, index) => (
//             <div key={index} style={{ marginBottom: 10 }}>
//               <p>
//                 <strong>Name:</strong> {detail.name || "N/A"}
//               </p>
//               <p>
//                 <strong>Price:</strong> {detail.price || "N/A"}
//               </p>
//               <p>
//                 <strong>Dispatch Date:</strong>{" "}
//                 {detail.expected_dispatch_date || "N/A"}
//               </p>
//               <p>
//                 <strong>Stock:</strong>{" "}
//                 {detail.add_to_cart ? "In Stock" : "Out of Stock"}
//               </p>
//               <Image
//                 src={detail.image || "N/A"}
//                 alt={detail.name}
//                 width={100}
//               />
//               <hr />
//             </div>
//           ))}
//         </>
//       ),
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (record: TPlants & { categoryName: string }) => (
//         <span>
//           <Button
//             onClick={() => handleUpdate(record)}
//             style={{ marginRight: 8 }}
//           >
//             Update
//           </Button>
//           <Button
//             danger
//             onClick={() => handleDelete(record._id)}
//             style={{ marginRight: 8 }}
//           >
//             Delete
//           </Button>
//           <Button type="primary" onClick={() => handleAddDetails(record)}>
//             Add Details
//           </Button>
//         </span>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Table dataSource={validData} columns={columns} rowKey="_id" />
//       <Modal
//         title="Update Plant"
//         visible={isUpdateModalVisible}
//         onCancel={() => setIsUpdateModalVisible(false)}
//         footer={null}
//       >
//         {selectedProduct && (
//           <UpdateProductModal
//             product={selectedProduct}
//             onSubmit={handleUpdateSubmit}
//             onClose={() => setIsUpdateModalVisible(false)}
//             visible={false}
//           />
//         )}
//       </Modal>
//       {selectedProduct && (
//         <AddDetailsForm
//           handleOk={() => setIsAddDetailsModalVisible(false)}
//           handleCancel={() => setIsAddDetailsModalVisible(false)}
//           isOpen={isAddDetailsModalVisible}
//           product={selectedProduct}
//           onSubmit={handleAddNewDetails}
//         />
//       )}
//     </>
//   );
// };

// export default ProductList;

import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  message,
  Image,
  Row,
  Col,
  Form,
  Input,
} from "antd";
import {
  useGetPlantsQuery,
  useDeletePlantMutation,
  useUpdatePlantMutation,
  useUpdateDetailMutation,
  useDeleteDetailMutation,
  useDeletePlantDetailMutation,
  useUpdateEditPlantMutation,
  useUpdateEditPlantDetailMutation,
} from "../../redux/api/api";
import UpdateProductModal from "../list/UpdateProductModal";
import AddDetailsForm from "../list/AddDetailsForm";
import { TCategory, TPlantDetail, TPlants, TPlantsNew } from "../../types";

const ProductList: React.FC = () => {
  const { data: response, isLoading, isError, refetch } = useGetPlantsQuery();
  const [updatePlant] = useUpdatePlantMutation();
  const [updateDetail] = useUpdateDetailMutation();
  const [deletePlant] = useDeletePlantMutation();
  const [deletePlantDetail] = useDeletePlantDetailMutation();
  const [updateEditPlant] = useUpdateEditPlantMutation();
  const [updateEditPlantDetail] = useUpdateEditPlantDetailMutation();

  const [isPlantModalVisible, setPlantModalVisible] = useState(false);
  const [isDetailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<TCategory | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<TPlantDetail | null>(
    null
  );

  const [selectedProduct, setSelectedProduct] = useState<
    (TPlants & { categoryName?: string }) | null
  >(null);
  const [isUpdateModalVisible, setIsUpdateModalVisible] =
    useState<boolean>(false);
  const [isAddDetailsModalVisible, setIsAddDetailsModalVisible] =
    useState<boolean>(false);

  // Handle deleting an entire plant category
  const handleDeletePlant = async (category: string, name: string) => {
    try {
      await deletePlant({ category, name }).unwrap();
      message.success("Plant deleted successfully!");
      refetch();
    } catch (error) {
      message.error("Failed to delete plant.");
    }
  };
  // Handle deleting a specific plant detail
  const handleDeleteDetail = async (
    category: string,
    plantName: string,
    detailName: string
  ) => {
    try {
      await deletePlantDetail({ category, plantName, detailName }).unwrap();
      message.success("Detail deleted successfully!");
      refetch();
    } catch (error) {
      message.error("Failed to delete detail.");
    }
  };

  const handleUpdate = (record: TPlants) => {
    setSelectedProduct(record);
    setIsUpdateModalVisible(true);
  };

  const handleAddDetails = (record: TPlants & { categoryName: string }) => {
    setSelectedProduct(record);
    setIsAddDetailsModalVisible(true);
  };

  const handleUpdateSubmit = (updatedProduct: TPlants) => {
    updatePlant({ id: updatedProduct._id, data: updatedProduct })
      .unwrap()
      .then(() => {
        message.success("Plant updated successfully!");
        setIsUpdateModalVisible(false);
        refetch();
      })
      .catch((err: string) => {
        message.error(`Failed to update plant: ${err}`);
      });
  };

  const handleAddNewDetails = async (updatedProduct: TPlantsNew) => {
    try {
      if (!updatedProduct) {
        throw new Error("Product ID is missing");
      }
      await updateDetail({
        id: updatedProduct.id,
        data: updatedProduct.submissionData,
      })
        .unwrap()
        .then(() => {
          message.success("Details added successfully!");
          setIsAddDetailsModalVisible(false);
          refetch();
        });
    } catch (error) {
      message.error("Failed to add details.");
    }
  };

  const handleUpdateDetail = (record: TPlants, detail: TPlantDetail) => {
    setSelectedProduct({
      ...record,
      details: [detail],
    });
    setIsUpdateModalVisible(true);
  };

  // Handle opening plant modal
  const openPlantModal = (plant: TCategory) => {
    console.log("Selected Plant:", plant);
    setSelectedPlant(plant);
    setPlantModalVisible(true);
  };

  // Handle opening plant detail modal
  const openDetailModal = (plantDetail: TPlantDetail) => {
    console.log("Selected Detail:", plantDetail);
    setSelectedDetail(plantDetail);
    setDetailModalVisible(true);
  };

  // Function to update the entire plant
  const handleUpdateEditPlant = async (values: TCategory) => {
    if (selectedPlant) {
      try {
        // Ensure we use the correct `_id` for the plant
        await updateEditPlant({ id: selectedPlant._id, data: values }).unwrap();
        message.success("Plant updated successfully!");
        refetch();
        setPlantModalVisible(false);
      } catch (error) {
        message.error("Failed to update plant");
      }
    }
  };

  // Function to update the details of a plant
  const handleUpdateEditPlantDetail = async (values: TPlants) => {
    if (selectedDetail && selectedPlant) {
      try {
        // Use selectedPlant._id and selectedDetail._id correctly for the update
        await updateEditPlantDetail({
          id: selectedPlant._id, // Ensure plant _id is used here
          detailId: selectedDetail._id, // Ensure detail _id is used here
          data: values,
        }).unwrap();
        message.success("Plant detail updated successfully!");
        refetch();
        setDetailModalVisible(false);
      } catch (error) {
        message.error("Failed to update plant detail");
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching plants!</p>;

  const validData =
    response?.data?.flatMap((category: TCategory) =>
      Object.keys(category).flatMap((key) => {
        if (Array.isArray(category[key])) {
          return category[key].map((item: TPlants) => ({
            ...item,
            categoryName: key,
          }));
        }
        return [];
      })
    ) || [];

  const columns = [
    {
      title: (
        <Row gutter={16}>
          <Col sm={8}>
            <strong>Plant Name & Action</strong>
          </Col>
          <Col
            sm={16}
            style={{
              borderLeft: "2px solid #e0e0e0", // Add side border
              paddingLeft: "16px",
            }}
          >
            <strong>Details</strong>
          </Col>
        </Row>
      ),
      key: "plantNameAndActions",
      render: (
        plant: TCategory,
        record: TPlants & { categoryName: string }
      ) => (
        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for plant name and actions
            backgroundColor: "#fff",
            marginBottom: "20px", // Space between plant entries
            borderBottom: "2px solid #e0e0e0", // Bottom border after every plant
          }}
        >
          <Row gutter={[16, 16]} align="middle">
            <Col
              xs={24} // Full width on extra small devices
              sm={8} // 8/24 width on small devices
              style={{
                borderRight: "2px solid #e0e0e0", // Side border between columns
                paddingRight: "16px",
              }}
            >
              <strong>{record.name}</strong>
              <div style={{ marginTop: 8 }}>
                <Button onClick={() => openPlantModal(plant)}>
                  Edit Plant
                </Button>
                ,
                <Button
                  onClick={() =>
                    handleDeletePlant(record.categoryName, record.name)
                  }
                >
                  Delete Plant
                </Button>
                <Button type="primary" onClick={() => handleAddDetails(record)}>
                  Add Details
                </Button>
              </div>
            </Col>

            {/* Plant Details */}
            <Col xs={24} sm={16}>
              {record.details?.map((detail, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "12px",
                    paddingBottom: "10px",
                    borderBottom: "2px solid green", // Green bottom border for each detail
                  }}
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={8}>
                      <strong>Name:</strong> {detail.name || "N/A"}
                    </Col>
                    <Col xs={12} sm={4}>
                      <strong>Price:</strong> {detail.price || "N/A"}
                    </Col>
                    <Col xs={12} sm={6}>
                      <strong>Dispatch Date:</strong>{" "}
                      {detail.expected_dispatch_date || "N/A"}
                    </Col>
                    <Col xs={12} sm={4}>
                      <strong>Stock:</strong>{" "}
                      {detail.add_to_cart ? "In Stock" : "Out of Stock"}
                    </Col>
                    <Col xs={12} sm={4}>
                      <Image
                        src={detail.image || "N/A"}
                        alt={detail.name}
                        width={100}
                      />
                    </Col>
                  </Row>
                  <Row
                    gutter={[16, 16]}
                    justify="start"
                    style={{ marginTop: 10 }}
                  >
                    <Col>
                      <Button onClick={() => openDetailModal(detail)}>
                        Edit Details
                      </Button>
                      ,
                    </Col>
                    <Col>
                      <Button
                        onClick={() =>
                          handleDeleteDetail(
                            record.categoryName,
                            record.name,
                            record.details?.[0]?.name || "No details"
                          )
                        }
                      >
                        Delete Detail
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={validData} columns={columns} rowKey="_id" />

      <Modal
        title="Update Plant"
        visible={isPlantModalVisible}
        onCancel={() => setPlantModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={selectedPlant || {}}
          onFinish={handleUpdateEditPlant}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Plant Name"
            rules={[{ required: true, message: "Please input plant name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please input plant price!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="expected_dispatch_date" label="Dispatch Date">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update Plant
          </Button>
        </Form>
      </Modal>

      <Modal
        title="Update Plant Detail"
        visible={isDetailModalVisible}
        onCancel={() => setDetailModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={selectedDetail || {}}
          onFinish={handleUpdateEditPlantDetail}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Detail Name"
            rules={[{ required: true, message: "Please input detail name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Detail Price"
            rules={[{ required: true, message: "Please input detail price!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="expected_dispatch_date" label="Dispatch Date">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update Detail
          </Button>
        </Form>
      </Modal>
      {selectedProduct && (
        <AddDetailsForm
          handleOk={() => setIsAddDetailsModalVisible(false)}
          handleCancel={() => setIsAddDetailsModalVisible(false)}
          isOpen={isAddDetailsModalVisible}
          product={selectedProduct}
          onSubmit={handleAddNewDetails}
        />
      )}
    </>
  );
};

export default ProductList;
