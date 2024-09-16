import React from "react";
import { useGetPlantsQuery } from "../../redux/api/api"; // Adjust the import path as necessary

const OutOfStock: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching plants data</div>;
  }

  const dataArray = data?.data || [];

  // Function to gather all out-of-stock items
  const getOutOfStockItems = () => {
    // Gather all items from various categories
    const allItems = dataArray.flatMap((dataItem: any) => [
      ...(dataItem.flowers || []).flatMap((item: any) => item.details || []),
      ...(dataItem.gardenDecor || []).flatMap(
        (item: any) => item.details || []
      ),
      ...(dataItem.gifts || []).flatMap((item: any) => item.details || []),
      ...(dataItem.pots || []).flatMap((item: any) => item.details || []),
      ...(dataItem.season || []).flatMap((item: any) => item.details || []),
      ...(dataItem.seeds || []).flatMap((item: any) => item.details || []),
    ]);

    // Filter items where `add_to_cart` is false
    return allItems.filter((item: any) => item.add_to_cart === false);
  };

  const outOfStockItems = getOutOfStockItems();

  return (
    <div>
      <h1>Out Of Stock Items</h1>
      {outOfStockItems.length > 0 ? (
        outOfStockItems.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{item.name}</h3>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p>Price: ${item.price}</p>
            <p>Expected Dispatch Date: {item.expected_dispatch_date}</p>
            <button
              disabled
              style={{ backgroundColor: "gray", color: "white" }}
            >
              Out of Stock
            </button>
          </div>
        ))
      ) : (
        <p>No out-of-stock items found.</p>
      )}
    </div>
  );
};

export default OutOfStock;
