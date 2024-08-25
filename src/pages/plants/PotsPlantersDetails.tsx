// Pots & Planters Details Details page

import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useGetPlantsQuery } from "../../redux/api/api";

const { Meta } = Card;

const PotsPlantersDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { potName } = useParams<{ potName: string }>();
  const { data } = useGetPlantsQuery();

  // Find the specific pot planter within the API data
  const potCategory = data?.find((category: any) =>
    category.pots?.some((p: any) => p.name === potName)
  );
  const pot = potCategory?.pots?.find((p: any) => p.name === potName);

  if (!pot) {
    return <p>Pot planter not found</p>;
  }

  const handleAddToCart = (plantDetail: any) => {
    dispatch(addToCart(plantDetail));
  };

  return (
    <>
      <Col className="flowerName">{potName}</Col>
      <Row
        style={{ width: "100%", padding: "30px 5px 0px 20px" }}
        gutter={[16, 16]}
      >
        {pot.details.map((detail: any) => (
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

export default PotsPlantersDetails;
