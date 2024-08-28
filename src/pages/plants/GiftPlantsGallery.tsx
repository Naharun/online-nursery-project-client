import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const GiftPlantsGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const giftPlants = data?.find((item: any) => item.gift)?.gift || [];

  if (!giftPlants.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Gift Plants</h2>
      <Row gutter={[16, 16]}>
        {giftPlants.map((plant: any) => (
          <Col key={plant.name} span={6}>
            <Link to={`/gift/${plant.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={plant.name}
                    src={plant.image}
                  />
                }
              >
                <Card.Meta title={plant.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GiftPlantsGallery;
