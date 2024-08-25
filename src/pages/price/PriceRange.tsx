import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";

const { Meta } = Card;

const PriceRange: React.FC = () => {
  const { data } = useGetPlantsQuery();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const minPrice = parseFloat(queryParams.get("min") || "20");
  const maxPrice = parseFloat(queryParams.get("max") || "2000");

  // Filter data based on the price range
  const filteredItems =
    data?.flatMap((category: any) =>
      Object.values(category).flatMap((subcategory: any) => {
        if (Array.isArray(subcategory)) {
          return subcategory.flatMap((item: any) => {
            if (Array.isArray(item.details)) {
              return item.details.filter((detail: any) => {
                const price = parseFloat(detail.price.replace("$", ""));
                return price >= minPrice && price <= maxPrice;
              });
            }
            return [];
          });
        }
        return [];
      })
    ) || [];

  return (
    <>
      <h2 className="plants">Items Within Price Range</h2>
      <Row gutter={[16, 16]}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item: any, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card hoverable cover={<img alt={item.name} src={item.image} />}>
                <Meta title={item.name} description={`Price: ${item.price}`} />
                <p>Expected Dispatch: {item.expected_dispatch_date}</p>
              </Card>
            </Col>
          ))
        ) : (
          <p>No items within the selected price range.</p>
        )}
      </Row>
    </>
  );
};

export default PriceRange;
