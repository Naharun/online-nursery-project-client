// // /Flowers By Season Gallery page

import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const FlowersBySeasonGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const flowersBySeason = data?.find((item: any) => item.season)?.season || [];

  if (!flowersBySeason.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Flowers By Season</h2>
      <Row gutter={[16, 16]}>
        {flowersBySeason.map((flower: any) => (
          <Col key={flower.name} span={6}>
            <Link to={`/season/${flower.name}`}>
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

export default FlowersBySeasonGallery;
