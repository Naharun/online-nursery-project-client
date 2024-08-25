// // Seeds & Bulbs Gallery page

import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const SeedsBulbsGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const seedsBulbs = data.find((item: any) => item.seeds)?.seeds || [];

  if (seedsBulbs.length === 0) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Seeds & Bulbs</h2>
      <Row gutter={[16, 16]}>
        {seedsBulbs.map((seed: any) => (
          <Col key={seed.name} span={6}>
            <Link to={`/seeds-bulbs/${seed.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={seed.name}
                    src={seed.image}
                  />
                }
              >
                <Card.Meta title={seed.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SeedsBulbsGallery;
