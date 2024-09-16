import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { TCategoryItem, TCategory } from "../../types/index";

const GardenDecorGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();
  console.log("data", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const categories = data?.data;

  const mainGardenDecor: TCategoryItem[] =
    categories?.flatMap((category: TCategory) =>
      Array.isArray(category.gardenDecor) && category.gardenDecor.length > 0
        ? category.gardenDecor
        : []
    ) || [];

  if (!mainGardenDecor.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Garden Decor</h2>
      <Row gutter={[16, 16]}>
        {mainGardenDecor.map((decor: TCategoryItem) => (
          <Col key={decor.name} xs={24} sm={12} md={8} lg={6}>
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
