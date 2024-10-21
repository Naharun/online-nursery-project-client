import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useAddToCartMutation, useGetPlantsQuery } from "../../redux/api/api";
import { TCategoryItem, TPlantDetail } from "../../types/index";
import "../../components/layout/Sidebar.css";

const { Meta } = Card;
const { Option } = Select;

const FlowersBySeasonDetails: React.FC = () => {
  const [addToCartData] = useAddToCartMutation();
  const dispatch = useDispatch();
  const { seasonName } = useParams<{ seasonName: string }>();
  const { data, error, isLoading } = useGetPlantsQuery();
  const [sortOrder, setSortOrder] = useState<string | null>(null); // Sorting state

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (!seasonName) {
    return <p>No season selected</p>;
  }

  const findSeason = (data: TCategoryItem[], seasonName: string) => {
    for (const category of data) {
      const season = category.season?.find(
        (f: { name: string }) => f.name === seasonName
      );
      if (season) return season;
    }
    return null;
  };

  const season = findSeason(data?.data, seasonName);

  if (!season) {
    return <p>Season not found</p>;
  }
  const sortVariants = (variants: TPlantDetail[]) => {
    const variantsCopy = [...variants]; // Create a copy to avoid mutating the original array
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

  const handleAddToCart = (seasonDetail: TPlantDetail) => {
    const newData = {
      // userId: "User123",
      items: { ...seasonDetail },
    };
    console.log(newData);
    addToCartData(newData);
    dispatch(addToCart(seasonDetail));
  };

  // Sorted flower variants
  const sortedVariants = sortVariants(season.details);
  return (
    <>
      <h2>{seasonName} Variants</h2>
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
          <Col key={variant.name} xs={24} sm={12} md={8} lg={6}>
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
                    {variant.add_to_cart && (
                      <Button
                        className="addToCart"
                        type="text"
                        onClick={() => handleAddToCart(variant)}
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

export default FlowersBySeasonDetails;
