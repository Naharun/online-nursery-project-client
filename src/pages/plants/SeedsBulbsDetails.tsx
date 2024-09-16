import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { useGetPlantsQuery } from "../../redux/api/api";
import { TCategoryItem, TPlantDetail } from "../../types/index";

const { Meta } = Card;
const { Option } = Select;

const SeedsBulbsDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { seedName } = useParams<{ seedName: string }>();
  const { data, error, isLoading } = useGetPlantsQuery();
  const [sortOrder, setSortOrder] = useState<string | null>(null); // Sorting state

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (!seedName) return <p>No seed selected</p>;

  const findSeedBulb = (data: TCategoryItem[], seedName: string) => {
    for (const category of data) {
      const seedBulb = category.seeds?.find(
        (s: { name: string }) => s.name === seedName
      );
      if (seedBulb) return seedBulb;
    }
    return null;
  };

  const seedBulb = findSeedBulb(data?.data, seedName);
  if (!seedBulb) return <p>Seed or bulb not found</p>;

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

  const handleAddToCart = (plantDetail: TPlantDetail) => {
    dispatch(addToCart(plantDetail));
  };

  // Sorted seedBulb variants
  const sortedVariants = sortVariants(seedBulb.details);

  return (
    <>
      <h2>{seedName} Variants</h2>
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

export default SeedsBulbsDetails;
