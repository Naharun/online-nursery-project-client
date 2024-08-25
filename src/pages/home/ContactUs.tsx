import React from "react";
import { Form, Input, Button, Layout, Typography } from "antd";
import { FaPhone } from "react-icons/fa";
import { MdHomeWork, MdMarkEmailUnread } from "react-icons/md";
import contact from "../../assets/contact.avif";

const { Title, Paragraph } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const ContactUs: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  return (
    <Layout
      style={{
        padding: "24px",
        margin: "0 auto",
        maxWidth: "100%",
        marginTop: "20px",
      }}
    >
      <Content>
        <Typography>
          <Title level={2} style={{ textAlign: "center" }}>
            Contact Us
          </Title>
          <Paragraph style={{ textAlign: "center", fontSize: "15px" }}>
            We're here to help! Whether you have questions about our plants,
            need assistance with an order, <br /> or just want to share your
            love for gardening, we'd love to hear from you.
          </Paragraph>
          <button
            style={{
              marginLeft: "450px",
              background: "slategray",
              color: "white",
              padding: "12px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Contact Us
            <span style={{ marginLeft: "5px" }}>
              <FaPhone />
            </span>
          </button>
        </Typography>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            width: "100%",
            gap: "0px",
            textAlign: "center",
          }}
        >
          <div style={{ width: "33%", borderRight: "2px solid thistle" }}>
            <span style={{ fontSize: "40px" }}>
              <MdHomeWork />
            </span>
            <h2>Visit Us</h2>
            <p>
              You can visit our nursery plants <br /> garden from 8:00 am to
              6:00 pm everyday.
            </p>
            <p>Dhaka,Bangladesh</p>
          </div>
          <div style={{ width: "33%", borderRight: "2px solid thistle" }}>
            <span style={{ fontSize: "40px" }}>
              <FaPhone />
            </span>
            <h2>Contact Us</h2>
            <p>Contact Us anytime</p>
            <p>+88019242</p>
          </div>
          <div style={{ width: "33%" }}>
            <span style={{ fontSize: "40px" }}>
              <MdMarkEmailUnread />
            </span>
            <h2>Email Us</h2>
            <p>Send email with your information</p>
            <p>naharunsraboni@gmail.com</p>
          </div>
        </div>
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            fontFamily: "arial",
            marginTop: "150px",
            color: "slategray",
          }}
        >
          You can also contact us by fill this form
        </p>
        <div style={{ display: "flex", marginTop: "80px " }}>
          <Form
            name="contact_us"
            layout="vertical"
            onFinish={onFinish}
            style={{
              width: "50%",
              background: "rgb(230, 226, 230)",
              padding: "50px",
            }}
          >
            <Form.Item
              name="name"
              label="Your Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email address!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: "Please enter the subject!" }]}
            >
              <Input placeholder="Enter the subject" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ background: "slategray" }}
                type="primary"
                htmlType="submit"
                block
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
          <img
            style={{
              width: "50%",
            }}
            src={contact}
            alt=""
          />
        </div>
      </Content>
    </Layout>
  );
};

export default ContactUs;
