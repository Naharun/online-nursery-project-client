// import React, { useState } from "react";
// import { Table, Button, Modal, message, Image } from "antd";
// import {
//   useGetPlantsQuery,
//   useDeletePlantMutation,
//   useUpdatePlantMutation,
//   useUpdateDetailMutation,
// } from "../../redux/api/api";
// import UpdateProductModal from "../list/UpdateProductModal";
// import AddDetailsForm from "../list/AddDetailsForm"; // Form to add details

// const ProductList: React.FC = () => {
//   const { data: response, isLoading, isError, refetch } = useGetPlantsQuery();
//   const [deletePlant] = useDeletePlantMutation();
//   const [updatePlant] = useUpdatePlantMutation();
//   const [updateDetail] = useUpdateDetailMutation(); // Replace updatePlant with updateDetail
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
//   const [isAddDetailsModalVisible, setIsAddDetailsModalVisible] =
//     useState(false);

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
//           .catch((err: any) => {
//             console.error("Failed to delete plant:", err);
//             message.error("Failed to delete plant.");
//           });
//       },
//     });
//   };

//   const handleUpdate = (record: any) => {
//     setSelectedProduct(record);
//     setIsUpdateModalVisible(true);
//   };

//   const handleAddDetails = (record: any) => {
//     setSelectedProduct(record);
//     setIsAddDetailsModalVisible(true);
//   };

//   const handleUpdateSubmit = (updatedProduct: any) => {
//     updatePlant({ id: updatedProduct._id, data: updatedProduct })
//       .unwrap()
//       .then(() => {
//         message.success("Plant updated successfully!");
//         setIsUpdateModalVisible(false);
//         refetch();
//       })
//       .catch((err: any) => {
//         console.error("Failed to update plant:", err);
//         message.error("Failed to update plant.");
//       });
//   };

//   // Flatten nested data from the API response
//   const validData =
//     response?.data?.flatMap((category: any) => [
//       ...(category.flowers || []),
//       ...(category.gardenDecor || []),
//       ...(category.gifts || []),
//       ...(category.pots || []),
//     ]) || [];

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
//       render: (details: any[]) => (
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
//                 {detail.inStock ? "In Stock" : "Out of Stock"}
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
//       render: (_text: any, record: any) => (
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

//   const handleAddNewDetails = async (product: any) => {
//     try {
//       if (!product || !product._id) {
//         throw new Error("Product ID is missing");
//       }

//       const detailToUpdate = product.details[0]; // Example: update the first detail

//       const requestBody = {
//         name: detailToUpdate.name,
//         price: detailToUpdate.price,
//         expected_dispatch_date: detailToUpdate.expected_dispatch_date,
//         add_to_cart: detailToUpdate.add_to_cart,
//         image: detailToUpdate.image,
//       };

//       await updateDetail({
//         plantId: product._id,
//         detailId: detailToUpdate._id,
//         body: requestBody,
//       }).unwrap();

//       message.success("Details updated successfully!");
//     } catch (error) {
//       message.error("Failed to update details.");
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error fetching plants!</p>;

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

//       <Modal
//         title="Add Details"
//         visible={isAddDetailsModalVisible}
//         onCancel={() => setIsAddDetailsModalVisible(false)}
//         footer={null}
//       >
//         {selectedProduct && (
//           <AddDetailsForm
//             visible={isAddDetailsModalVisible}
//             onClose={() => setIsAddDetailsModalVisible(false)}
//             product={selectedProduct}
//             onSubmit={handleAddNewDetails}
//           />
//         )}
//       </Modal>
//     </>
//   );
// };

// export default ProductList;
import React, { useState } from "react";
import { Table, Button, Modal, message, Image } from "antd";
import {
  useGetPlantsQuery,
  useDeletePlantMutation,
  useUpdatePlantMutation,
  useUpdateDetailMutation,
} from "../../redux/api/api";
import UpdateProductModal from "../list/UpdateProductModal";
import AddDetailsForm from "../list/AddDetailsForm"; // Form to add details

const ProductList: React.FC = () => {
  const { data: response, isLoading, isError, refetch } = useGetPlantsQuery();
  const [deletePlant] = useDeletePlantMutation();
  const [updatePlant] = useUpdatePlantMutation();
  const [updateDetail] = useUpdateDetailMutation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isAddDetailsModalVisible, setIsAddDetailsModalVisible] =
    useState(false);

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      onOk: () => {
        deletePlant(id)
          .unwrap()
          .then(() => {
            message.success("Plant deleted successfully!");
            refetch();
          })
          .catch((err: any) => {
            console.error("Failed to delete plant:", err);
            message.error("Failed to delete plant.");
          });
      },
    });
  };

  const handleUpdate = (record: any) => {
    setSelectedProduct(record);
    setIsUpdateModalVisible(true);
  };

  const handleAddDetails = (record: any) => {
    setSelectedProduct(record);
    setIsAddDetailsModalVisible(true);
  };

  const handleUpdateSubmit = (updatedProduct: any) => {
    updatePlant({ id: updatedProduct._id, data: updatedProduct })
      .unwrap()
      .then(() => {
        message.success("Plant updated successfully!");
        setIsUpdateModalVisible(false);
        refetch();
      })
      .catch((err: any) => {
        console.error("Failed to update plant:", err);
        message.error("Failed to update plant.");
      });
  };

  const handleAddNewDetails = async (updatedProduct: any) => {
    try {
      if (!updatedProduct || !updatedProduct._id) {
        throw new Error("Product ID is missing");
      }

      // Update product details
      await updatePlant({ id: updatedProduct._id, data: updatedProduct })
        .unwrap()
        .then(() => {
          message.success("Details added successfully!");
          setIsAddDetailsModalVisible(false);
          refetch(); // Refresh the list to show updated details
        });
    } catch (error) {
      message.error("Failed to add details.");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching plants!</p>;

  const validData =
    response?.data?.flatMap((category: any) => [
      ...(category.flowers || []),
      ...(category.gardenDecor || []),
      ...(category.gifts || []),
      ...(category.pots || []),
    ]) || [];

  const columns = [
    {
      title: "Plant Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (details: any[]) => (
        <>
          {details.map((detail, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              <p>
                <strong>Name:</strong> {detail.name || "N/A"}
              </p>
              <p>
                <strong>Price:</strong> {detail.price || "N/A"}
              </p>
              <p>
                <strong>Dispatch Date:</strong>{" "}
                {detail.expected_dispatch_date || "N/A"}
              </p>
              <p>
                <strong>Stock:</strong>{" "}
                {detail.add_to_cart ? "In Stock" : "Out of Stock"}
              </p>
              <Image
                src={detail.image || "N/A"}
                alt={detail.name}
                width={100}
              />
              <hr />
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_text: any, record: any) => (
        <span>
          <Button
            onClick={() => handleUpdate(record)}
            style={{ marginRight: 8 }}
          >
            Update
          </Button>
          <Button
            danger
            onClick={() => handleDelete(record._id)}
            style={{ marginRight: 8 }}
          >
            Delete
          </Button>
          <Button type="primary" onClick={() => handleAddDetails(record)}>
            Add Details
          </Button>
        </span>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={validData} columns={columns} rowKey="_id" />

      <Modal
        title="Update Plant"
        visible={isUpdateModalVisible}
        onCancel={() => setIsUpdateModalVisible(false)}
        footer={null}
      >
        {selectedProduct && (
          <UpdateProductModal
            product={selectedProduct}
            onSubmit={handleUpdateSubmit}
            onClose={() => setIsUpdateModalVisible(false)}
            visible={false}
          />
        )}
      </Modal>

      <Modal
        title="Add Details"
        visible={isAddDetailsModalVisible}
        onCancel={() => setIsAddDetailsModalVisible(false)}
        footer={null}
      >
        {selectedProduct && (
          <AddDetailsForm
            visible={isAddDetailsModalVisible}
            onClose={() => setIsAddDetailsModalVisible(false)}
            product={selectedProduct}
            onSubmit={handleAddNewDetails}
          />
        )}
      </Modal>
    </>
  );
};

export default ProductList;
