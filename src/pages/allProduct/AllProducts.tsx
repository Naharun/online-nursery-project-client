import React from "react";
import { Row, Col } from "antd";
import { useGetPlantsQuery } from "../../redux/api/api";
import FloweringPlantsGallery from "../plants/FloweringPlantsGallery";
import FlowersBySeasonGallery from "../plants/FlowersBySeasonGallery";
import GardenDecorGallery from "../plants/GardenDecorGallery";
import GiftPlantsGallery from "../plants/GiftPlantsGallery";
import PotsPlantersGallery from "../plants/PotsPlantersGallery";
import SeedsBulbsGallery from "../plants/SeedsBulbsGallery";
import { GiClick } from "react-icons/gi";

const AllProducts: React.FC = () => {
  const { data, error, isLoading } = useGetPlantsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          margin: "50px 20px 0px",
          textAlign: "center",
          fontSize: "22px",
          gap: "5px",
        }}
      >
        Find Your Perfect Plant Here{" "}
        <span style={{ fontSize: "25px" }}>
          <GiClick />
        </span>
      </p>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <FloweringPlantsGallery
            flowersData={
              data.find((item: { flowers: any }) => item.flowers)?.flowers || []
            }
          />
        </Col>
        <Col span={24}>
          <FlowersBySeasonGallery
            seasonData={
              data.find((item: { season: any }) => item.season)?.season || []
            }
          />
        </Col>
        <Col span={24}>
          <GardenDecorGallery
            decorData={
              data.find((item: { gardenDecor: any }) => item.gardenDecor)
                ?.gardenDecor || []
            }
          />
        </Col>
        <Col span={24}>
          <GiftPlantsGallery
            giftData={data.find((item: { gift: any }) => item.gift)?.gift || []}
          />
        </Col>
        <Col span={24}>
          <PotsPlantersGallery
            potsData={data.find((item: { pots: any }) => item.pots)?.pots || []}
          />
        </Col>
        <Col span={24}>
          <SeedsBulbsGallery
            seedsData={
              data.find((item: { seeds: any }) => item.seeds)?.seeds || []
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default AllProducts;
