import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { TCategoryItem, TCategory } from "../../types/index";

const GiftPlantsGallery: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const categories = data?.data;

  const giftPlant: TCategoryItem[] =
    categories?.flatMap((category: TCategory) =>
      category.gifts ? category.gifts : []
    ) || [];

  if (!giftPlant.length) return <div>No data available</div>;

  return (
    <>
      <h2 className="plants">Gifts Plants</h2>
      <Row gutter={[16, 16]}>
        {giftPlant.map((gift: TCategoryItem) => (
          <Col key={gift.name} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/gift/${gift.name}`}>
              <Card
                hoverable
                cover={
                  <img
                    style={{ height: "200px" }}
                    alt={gift.name}
                    src={gift.image}
                  />
                }
              >
                <Card.Meta title={gift.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GiftPlantsGallery;
