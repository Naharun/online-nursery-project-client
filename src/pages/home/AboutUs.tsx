import React from "react";
import { Typography, Layout, Divider } from "antd";
import about from "../../assets/aboute.jpg";
import { GiLindenLeaf } from "react-icons/gi";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const AboutUs: React.FC = () => {
  return (
    <Layout
      style={{
        padding: "24px",
        margin: "50px auto",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <Content>
        <Typography>
          <Title
            className="img"
            level={2}
            style={{
              padding: "50px 300px 0px 0px",
              textAlign: "center",
              height: "400px",
              color: "white",
              lineHeight: "70px",
              backgroundImage: `url(${about})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <span style={{ fontSize: "20px", textUnderlineOffset: "20px" }}>
              About us
            </span>{" "}
            <br />
            Welcome to Online Nursery, <br />
            Where Nature Thrives and <br /> Homes Blossom{" "}
            <span style={{ color: "green" }}>
              <GiLindenLeaf />
            </span>
          </Title>
          <Divider />
          <Paragraph>
            At Plantify, we believe that the beauty of nature should be
            accessible to everyone. Our passion for plants and flowers drives us
            to curate a stunning collection of greenery that can transform any
            space into a vibrant, living environment. Whether you're an
            experienced gardener or just starting your plant journey, our
            mission is to help you find the perfect plant companions to brighten
            your home and elevate your surroundings.
          </Paragraph>
          <Title level={3}>Our Story</Title>
          <Paragraph>
            Plantify was born from a love for nature and a deep understanding of
            the joy that plants bring to our lives. What started as a small,
            local nursery has grown into an online destination for plant lovers
            across the country. Our team is dedicated to selecting the highest
            quality plants and flowers, ensuring they arrive at your doorstep
            healthy, vibrant, and ready to thrive.
          </Paragraph>
          <Title level={3}>What We Offer</Title>
          <Paragraph>
            We offer a wide range of plants, from easy-care succulents to exotic
            orchids, and everything in between. Our collection is carefully
            curated to suit every style, space, and skill level. In addition to
            our plants, we provide expert advice and resources to help you care
            for your new green friends, ensuring they thrive in their new home.
          </Paragraph>
          <Title level={3}>Our Commitment to You</Title>
          <Paragraph>
            We take pride in the quality of our plants and the satisfaction of
            our customers. Every plant is handpicked and cared for with the
            utmost attention to detail. Our team is here to support you every
            step of the way, from selecting the perfect plant to providing tips
            on how to keep it healthy and beautiful.
          </Paragraph>
          <Paragraph>
            Thank you for choosing Plantify to bring a touch of nature into your
            life. We look forward to helping you grow your own green oasis!
          </Paragraph>
        </Typography>
      </Content>
    </Layout>
  );
};

export default AboutUs;
