import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";

const { Meta } = Card;

const OutOfStock: React.FC = () => {
  const { data } = useGetPlantsQuery();

  // Log the full API data for inspection
  console.log("API Data:", data);

  // Process the data to extract out-of-stock items
  const outOfStockItems = data
    ? data.flatMap((category: any) => {
        // Log each category
        console.log("Category:", category);

        // Check all keys in the category object
        return Object.keys(category).flatMap((key) => {
          const subcategory = category[key];
          console.log("Subcategory:", subcategory);

          if (Array.isArray(subcategory)) {
            return subcategory.flatMap((item: any) => {
              // Log each item
              console.log("Item:", item);

              if (Array.isArray(item.details)) {
                return item.details.filter(
                  (detail: any) => detail.add_to_cart === false
                );
              } else {
                console.warn("Item details not an array:", item);
                return [];
              }
            });
          } else {
            console.warn("Subcategory is not an array:", subcategory);
            return [];
          }
        });
      })
    : [];

  // Log the filtered out-of-stock items
  console.log("Out of Stock Plants:", outOfStockItems);

  return (
    <>
      <h2 style={{ marginTop: "80px" }} className="plants">
        Out of Stock
      </h2>
      <Row gutter={[16, 16]}>
        {outOfStockItems.length > 0 ? (
          outOfStockItems.map((item: any, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card hoverable cover={<img alt={item.name} src={item.image} />}>
                <Meta title={item.name} description={`Price: ${item.price}`} />
                <p>Expected Dispatch: {item.expected_dispatch_date}</p>
              </Card>
            </Col>
          ))
        ) : (
          <p>No items out of stock.</p>
        )}
      </Row>
    </>
  );
};

export default OutOfStock;
