import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button, Select } from "antd";
import { useAddToCartMutation, useGetPlantsQuery } from "../../redux/api/api";
import { TCategoryItem, TPlantDetail } from "../../types/index";
import "../../components/layout/Sidebar.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

const { Meta } = Card;
const { Option } = Select;

const FloweringPlantsDetails: React.FC = () => {
  const [addToCartData] = useAddToCartMutation();
  const dispatch = useDispatch();
  const { flowerName } = useParams<{ flowerName: string }>();
  const { data, error, isLoading } = useGetPlantsQuery();
  const [sortOrder, setSortOrder] = useState<string | null>(null); // Sorting state

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (!flowerName) return <p>No flower selected</p>;

  const findFlower = (data: TCategoryItem[], flowerName: string) => {
    for (const category of data) {
      const flower = category.flowers?.find(
        (f: { name: string }) => f.name === flowerName
      );
      if (flower) return flower;
    }
    return null;
  };

  const flower = findFlower(data?.data, flowerName);
  if (!flower) return <p>Flower not found</p>;

  // Convert price strings to numbers and sort
  const sortVariants = (variants: TPlantDetail[]) => {
    const variantsCopy = [...variants];
    if (sortOrder === "asc") {
      return variantsCopy.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sortOrder === "desc") {
      return variantsCopy.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }
    return variantsCopy;
  };
  // Handle adding to cart
  const handleAddToCart = (flowerDetail: TPlantDetail) => {
    const newData = {
      userId: "User123",
      items: { ...flowerDetail },
    };
    console.log(newData);
    addToCartData(newData);
    dispatch(addToCart(flowerDetail));
  };

  // Sorted flower variants
  const sortedVariants = sortVariants(flower.details);

  return (
    <>
      <h2>{flowerName} Variants</h2>

      {/* Sorting dropdown */}
      <Select
        placeholder="Sort by price"
        onChange={(value) => setSortOrder(value)}
        style={{ marginBottom: "16px", width: "200px" }}
      >
        <Option value="asc">Price: Low to High</Option>
        <Option value="desc">Price: High to Low</Option>
      </Select>

      <Row
        style={{ width: "100%", padding: "30px 5px 0px 20px" }}
        gutter={[16, 16]}
      >
        {sortedVariants.map((variant: TPlantDetail) => (
          <Col key={variant.name + variant.price} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  style={{ height: "250px" }}
                  alt={variant.name}
                  src={variant.image}
                />
              }
              title={variant.name}
            >
              <Meta
                description={
                  <>
                    <p>Price: {variant.price}</p>
                    <p>Expected Dispatch: {variant.expected_dispatch_date}</p>
                    {variant.add_to_cart ? (
                      <Button
                        className="addToCart"
                        type="text"
                        onClick={() => handleAddToCart(variant)}
                      >
                        Add to Cart
                      </Button>
                    ) : (
                      <Button
                        disabled
                        style={{ backgroundColor: "gray", color: "white" }}
                      >
                        Out of Stock
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
