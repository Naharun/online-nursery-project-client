// Garden Decor Details Details page

import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useGetPlantsQuery } from "../../redux/api/api";

const { Meta } = Card;

const GardenDecorDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { decorName } = useParams<{ decorName: string }>();
  const { data } = useGetPlantsQuery();

  // Find the specific garden decor within the API data
  const decorCategory = data?.find((category: any) =>
    category.gardenDecor?.some((d: any) => d.name === decorName)
  );
  const decor = decorCategory?.gardenDecor?.find(
    (d: any) => d.name === decorName
  );

  if (!decor) {
    return <p>Garden decor not found</p>;
  }

  const handleAddToCart = (plantDetail: any) => {
    dispatch(addToCart(plantDetail));
  };

  return (
    <>
      <Col className="flowerName">{decorName}</Col>
      <Row
        style={{ width: "100%", padding: "30px 5px 0px 20px" }}
        gutter={[16, 16]}
      >
        {decor.details.map((detail: any) => (
          <Col key={detail.name} span={6}>
            <Card
              hoverable
              cover={
                <img
                  style={{ height: "250px" }}
                  alt={detail.name}
                  src={detail.image}
                />
              }
              title={detail.name}
            >
              <Meta
                description={
                  <>
                    <p>{detail.price}</p>
                    <p>Expected Dispatch: {detail.expected_dispatch_date}</p>
                    {detail.add_to_cart && (
                      <Button
                        className="addToCart"
                        type="text"
                        onClick={() => handleAddToCart(detail)}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GardenDecorDetails;
