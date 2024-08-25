import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";

const { Meta } = Card;

const InStock: React.FC = () => {
  const { data } = useGetPlantsQuery();

  // Process the data to extract in-stock items
  const inStockItems =
    data?.flatMap((category: any) =>
      Object.values(category).flatMap((subcategory: any) => {
        // Check if subcategory is an array
        if (Array.isArray(subcategory)) {
          return subcategory.flatMap((item: any) => {
            // Ensure that item.details is an array
            if (Array.isArray(item.details)) {
              return item.details.filter((detail: any) => detail.add_to_cart);
            }
            return [];
          });
        }
        return [];
      })
    ) || [];

  return (
    <>
      <h2 style={{ marginTop: "80px" }} className="plants">
        In Stock
      </h2>
      <Row gutter={[16, 16]}>
        {inStockItems.length > 0 ? (
          inStockItems.map((item: any, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card hoverable cover={<img alt={item.name} src={item.image} />}>
                <Meta title={item.name} description={`Price: ${item.price}`} />
                <p>Expected Dispatch: {item.expected_dispatch_date}</p>
              </Card>
            </Col>
          ))
        ) : (
          <p>No items in stock.</p>
        )}
      </Row>
    </>
  );
};

export default InStock;
