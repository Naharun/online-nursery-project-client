import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { useRegisterMutation } from "../../redux/features/auth/authApi";

const Register: React.FC = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await register(values).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        name="register"
        className="w-96 p-6 bg-white shadow-md rounded"
        onFinish={onFinish}
      >
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="w-full"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
