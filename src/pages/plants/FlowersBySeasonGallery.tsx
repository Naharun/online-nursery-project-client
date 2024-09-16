import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { TCategoryItem, TCategory } from "../../types/index";

const FlowersBySeasonGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const categories = data?.data;

  // Extract the main flower categories
  const mainSeason: TCategoryItem[] =
    categories?.flatMap((category: TCategory) =>
      category.season ? category.season : []
    ) || [];

  if (!mainSeason.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Flowers By Seasons Plants</h2>
      <Row gutter={[16, 16]}>
        {mainSeason.map((season: TCategoryItem) => (
          <Col key={season.name} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/season/${season.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={season.name}
                    src={season.image}
                  />
                }
              >
                <Card.Meta title={season.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FlowersBySeasonGallery;
