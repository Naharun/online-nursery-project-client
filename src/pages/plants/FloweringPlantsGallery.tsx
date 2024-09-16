// // Flowering Plants Details Page

import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { TCategoryItem, TCategory } from "../../types/index";

const FloweringPlantsGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();
  console.log("data", data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const categories = data?.data;

  // Extract the main flower categories
  const mainFlowers: TCategoryItem[] =
    categories?.flatMap((category: TCategory) =>
      category.flowers ? category.flowers : []
    ) || [];

  if (!mainFlowers.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Flowering Plants</h2>
      <Row gutter={[16, 16]}>
        {mainFlowers.map((flower: TCategoryItem) => (
          <Col key={flower.name} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/flower/${flower.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={flower.name}
                    src={flower.image}
                  />
                }
              >
                <Card.Meta title={flower.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FloweringPlantsGallery;
