import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { TCategoryItem, TCategory } from "../../types/index";

const PotsPlantersGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const categories = data?.data;

  const potsPlanters: TCategoryItem[] =
    categories?.flatMap((category: TCategory) =>
      category.pots ? category.pots : []
    ) || [];

  if (!potsPlanters.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Pots & Planters</h2>
      <Row gutter={[16, 16]}>
        {potsPlanters.map((pot: TCategoryItem) => (
          <Col key={pot.name} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/pots-planters/${pot.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={pot.name}
                    src={pot.image}
                  />
                }
              >
                <Card.Meta title={pot.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PotsPlantersGallery;
