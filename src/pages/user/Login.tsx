import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/userSlice";

const Login: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const user = await login(values).unwrap();
      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        name="login"
        className="w-96 p-6 bg-white shadow-md rounded"
        onFinish={onFinish}
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
