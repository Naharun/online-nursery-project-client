// /Flowering Plants Details page

import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useGetPlantsQuery } from "../../redux/api/api";
import "../../components/layout/Sidebar.css";

const { Meta } = Card;

const FloweringPlantsDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { flowerName } = useParams<{ flowerName: string }>();
  const { data } = useGetPlantsQuery(); // Fetch the data using  API hook

  // Find the specific flower within the API data
  const flowerCategory = data?.find((category: any) =>
    category.flowers?.some(
      (f: { name: string | undefined }) => f.name === flowerName
    )
  );
  const flower = flowerCategory?.flowers?.find(
    (f: { name: string | undefined }) => f.name === flowerName
  );

  if (!flower) {
    return <p>Flower not found</p>;
  }

  const handleAddToCart = (flowerDetail: any) => {
    dispatch(addToCart(flowerDetail));
  };

  return (
    <>
      <Col className="flowerName">{flowerName}</Col>
      <Row
        style={{ width: "100%", padding: "30px 5px 0px 20px" }}
        gutter={[16, 16]}
      >
        {flower.details.map((detail: any) => (
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

export default FloweringPlantsDetails;
