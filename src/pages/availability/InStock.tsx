import React from "react";
import { Button, Card, Col, Row } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

const { Meta } = Card;

const InStock: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();
  const dispatch = useDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching plants data</div>;
  }

  const dataObject = data?.data?.[0];

  const getInStockItems = () => {
    if (!dataObject) {
      return [];
    }

    const allItems = [
      ...(dataObject.flowers || []).flatMap((item: any) => item.details || []),
      ...(dataObject.gardenDecor || []).flatMap(
        (item: any) => item.details || []
      ),
      ...(dataObject.gifts || []).flatMap((item: any) => item.details || []),
      ...(dataObject.pots || []).flatMap((item: any) => item.details || []),
      ...(dataObject.season || []).flatMap((item: any) => item.details || []),
      ...(dataObject.seeds || []).flatMap((item: any) => item.details || []),
    ];

    return allItems.filter((detail: any) => detail?.add_to_cart);
  };

  const inStockItems = getInStockItems();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <h2 style={{ marginTop: "0px" }} className="plants">
        In Stock Items
      </h2>
      <Row gutter={[16, 16]}>
        {inStockItems.length > 0 ? (
          inStockItems.map((item: any, index: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                cover={
                  <img
                    alt={item.name}
                    src={item.image}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                }
              >
                <Meta title={item.name} description={`Price: $${item.price}`} />
                <p>Expected Dispatch: {item.expected_dispatch_date}</p>
                <Button
                  type="primary"
                  style={{ backgroundColor: "black" }}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))
        ) : (
          <p>No in-stock items found.</p>
        )}
      </Row>
    </>
  );
};

export default InStock;
