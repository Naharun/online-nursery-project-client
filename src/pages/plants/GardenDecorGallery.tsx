// // Garden Decor Gallery page

import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const GardenDecorGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const gardenDecor =
    data?.find((item: any) => item.gardenDecor)?.gardenDecor || [];

  if (!gardenDecor.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Garden Decor</h2>
      <Row gutter={[16, 16]}>
        {gardenDecor.map((decor: any) => (
          <Col key={decor.name} span={6}>
            <Link to={`/garden-decor/${decor.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={decor.name}
                    src={decor.image}
                  />
                }
              >
                <Card.Meta title={decor.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GardenDecorGallery;
