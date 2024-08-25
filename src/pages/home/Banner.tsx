import React from "react";
import "./banner.css";
import { Carousel } from "antd";
import bannerImage1 from "../../assets/white-red-rose-white_1339-1433.jpg";
import bannerImage2 from "../../assets/Succulents.avif";
import bannerImage3 from "../../assets/Orchids.jpg";
import bannerImage4 from "../../assets/Gardening Kits.avif";
import { FaTree } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";

const contentStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  color: "black",
  gap: "20px",
  textAlign: "center",
  backgroundSize: "100%",
  marginTop: "50px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Banner: React.FC = () => (
  <div>
    <Carousel autoplay arrows infinite={true}>
      <div>
        <div
          style={{
            ...contentStyle,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "rgb(230, 226, 230)",
          }}
        >
          <img
            style={{
              width: "40%",
              marginLeft: "80px",
              marginTop: "90px",
              borderTopRightRadius: "50px",
              boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.2)",
            }}
            src={bannerImage1}
            alt=""
          />
          <div style={{ width: "50%", marginRight: "100px" }}>
            <h3
              style={{
                color: "purple",
                fontSize: "35px",
                fontFamily: "arial",
              }}
            >
              Blooming Deal:
              <br />
              <span style={{ fontSize: "30px", color: "black" }}>20% Off </span>
              <br />
              <span style={{ fontSize: "25px", color: "black" }}>
                on All Rose Varieties!
              </span>
            </h3>
            <button
              style={{
                background: "slategray",
                color: "white",
                padding: "12px 20px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            ...contentStyle,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "rgb(230, 226, 230)",
          }}
        >
          <img
            style={{
              width: "40%",
              marginLeft: "80px",
              marginTop: "90px",
              borderTopRightRadius: "50px",
              boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.2)",
            }}
            src={bannerImage2}
            alt=""
          />
          <div style={{ width: "50%", marginRight: "100px" }}>
            <h3
              style={{
                color: "purple",
                fontSize: "35px",
                fontFamily: "arial",
              }}
            >
              Summer Special:
              <br />
              <span style={{ fontSize: "30px", color: "black" }}>
                Buy 2, Get 1 Free{" "}
              </span>
              <br />
              <span style={{ fontSize: "25px", color: "black" }}>
                on All Succulents!
              </span>
            </h3>
            <button
              style={{
                background: "slategray",
                color: "white",
                padding: "12px 20px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            ...contentStyle,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "rgb(230, 226, 230)",
          }}
        >
          <img
            style={{
              width: "40%",
              marginLeft: "80px",
              marginTop: "90px",
              borderTopRightRadius: "50px",
              boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.2)",
            }}
            src={bannerImage3}
            alt=""
          />
          <div style={{ width: "50%", marginRight: "100px" }}>
            <h3
              style={{
                color: "purple",
                fontSize: "35px",
                fontFamily: "arial",
              }}
            >
              Limited Time Offer:
              <br />
              <span style={{ fontSize: "30px", color: "black" }}>
                Save 15%{" "}
              </span>
              <br />
              <span style={{ fontSize: "25px", color: "black" }}>
                on Exotic Orchids!
              </span>
            </h3>
            <button
              style={{
                background: "slategray",
                color: "white",
                padding: "12px 20px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            ...contentStyle,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "rgb(230, 226, 230)",
          }}
        >
          <img
            style={{
              width: "40%",
              marginLeft: "80px",
              marginTop: "90px",
              borderTopRightRadius: "50px",
              boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.2)",
            }}
            src={bannerImage4}
            alt=""
          />
          <div style={{ width: "50%", marginRight: "100px" }}>
            <h3
              style={{
                color: "purple",
                fontSize: "35px",
                fontFamily: "arial",
              }}
            >
              Green Thumb Sale:
              <br />
              <span style={{ fontSize: "30px", color: "black" }}>10% Off </span>
              <br />
              <span style={{ fontSize: "25px", color: "black" }}>
                on Premium Gardening Kits!
              </span>
            </h3>
            <button
              style={{
                background: "slategray",
                color: "white",
                padding: "12px 20px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Carousel>
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            paddingTop: "10px",
            textAlign: "center",
            fontSize: "50px",
            height: "100px",
            width: "100px",
            border: "5px",
            borderStyle: "solid",
          }}
        >
          <FaTree />
        </div>
        <div>
          <h2>
            Nursery Plants <br /> & Garden
          </h2>
          <p>100k + tree</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            paddingTop: "10px",
            textAlign: "center",
            fontSize: "50px",
            height: "100px",
            width: "100px",
            border: "5px",
            borderStyle: "solid",
          }}
        >
          <CiDeliveryTruck />
        </div>
        <div>
          <h2>
            All Bangladesh <br /> Delivery
          </h2>
          <p>We allow home delivery</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            paddingTop: "10px",
            textAlign: "center",
            fontSize: "50px",
            height: "100px",
            width: "100px",
            border: "5px",
            borderStyle: "solid",
          }}
        >
          <FaShippingFast />
        </div>
        <div>
          <h2>
            Trusted Shipping <br />
          </h2>
          <p>We Provide Trusted Shipping</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            paddingTop: "10px",
            textAlign: "center",
            fontSize: "50px",
            height: "100px",
            width: "100px",
            border: "5px",
            borderStyle: "solid",
          }}
        >
          <GiLifeSupport />
        </div>
        <div>
          <h2>
            All Time <br /> Support
          </h2>
          <p>We Are Supporting Making Garden</p>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;

//npm install antd react-slick slick-carousel
