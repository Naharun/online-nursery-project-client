// Flowering Plants Details Page

import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api"; // Import your API hook
import { Link } from "react-router-dom";

const FloweringPlantsGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const floweringPlants = data.find((item: any) => item.flowers)?.flowers || [];

  if (floweringPlants.length === 0) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Flowering Plants</h2>
      <Row gutter={[16, 16]}>
        {floweringPlants.map((flower: any) => (
          <Col key={flower.name} span={6}>
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
