import React from "react";
import { Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "../../types/types";

const AllProducts: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();
  const searchTerm = useSelector((state: any) => state.search.toLowerCase());

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // Check data structure
  console.log("API Data:", data);
  console.log("Search Term:", searchTerm);

  // Function to filter products based on search term
  const filterProducts = (products: Product[]) =>
    products.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm)
    );

  // Retrieve and filter products
  const floweringPlants =
    data?.find((item: any) => item.flowers)?.flowers || [];
  const flowersBySeason = data?.find((item: any) => item.season)?.season || [];
  const gardenDecor =
    data?.find((item: any) => item.gardenDecor)?.gardenDecor || [];
  const giftPlants = data?.find((item: any) => item.gift)?.gift || [];
  const potsPlanters = data?.find((item: any) => item.pots)?.pots || [];
  const seedsBulbs = data?.find((item: any) => item.seeds)?.seeds || [];

  const filteredFloweringPlants = filterProducts(floweringPlants);
  const filteredFlowersBySeason = filterProducts(flowersBySeason);
  const filteredGardenDecor = filterProducts(gardenDecor);
  const filteredGiftPlants = filterProducts(giftPlants);
  const filteredPotsPlanters = filterProducts(potsPlanters);
  const filteredSeedsBulbs = filterProducts(seedsBulbs);

  const renderProductSection = (
    title: string,
    products: any[],
    routePrefix: string
  ) => (
    <>
      <h2 className="plants">{title}</h2>
      <Row gutter={[16, 16]}>
        {products.length === 0 ? (
          <Col span={24}>
            <div>No data available</div>
          </Col>
        ) : (
          products.map((product: any) => (
            <Col key={product.name} span={6}>
              <Link to={`/${routePrefix}/${product.name}`}>
                <Card
                  hoverable
                  cover={
                    <img
                      style={{ height: "200px" }}
                      alt={product.name}
                      src={product.image}
                    />
                  }
                >
                  <Card.Meta title={product.name} />
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );

  return (
    <div>
      {renderProductSection(
        "Flowering Plants",
        filteredFloweringPlants,
        "flower"
      )}
      {renderProductSection(
        "Flowers By Season",
        filteredFlowersBySeason,
        "season"
      )}
      {renderProductSection(
        "Garden Decor",
        filteredGardenDecor,
        "garden-decor"
      )}
      {renderProductSection("Gift Plants", filteredGiftPlants, "gift")}
      {renderProductSection(
        "Pots & Planters",
        filteredPotsPlanters,
        "pots-planters"
      )}
      {renderProductSection("Seeds & Bulbs", filteredSeedsBulbs, "seeds-bulbs")}
    </div>
  );
};

export default AllProducts;
