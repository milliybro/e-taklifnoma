import {
  Button,
  DatePicker,
  Form,
  Input,
  Space,
  Tooltip,
  Typography,
} from "antd";
import React from "react";
import Navigation from "../../../../components/layoutSections/Navigation";
import { useNavigate } from "react-router-dom";

const CreateInvitation = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
     console.log("Success:", values);
   };
   const onFinishFailed = (errorInfo) => {
     navigate("/user/dashboard")
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Navigation />
      <div className=" container flex flex-col justify-center items-center py-10 md:max-w-[700px] sm:max-w-[500px] w-[300px]">
        <h1 className="pt-[50px] md:text-5xl text-3xl text-center pb-3">
          Nikoh to'yingizga taklifnoma yarating
        </h1>
        <p className="pb-5 text-[#000000A0]">Ma'lumotlaringizni to'ldiring</p>
        <Form
          name="basic"
          labelCol={{
            span: 20,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 700,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Kuyovning ismini kiriting"
            name="sonName"
            className="flex flex-col justify-center items-center "
            rules={[
              {
                required: true,
                message: `Ism to'ldirilishi shart`,
              },
            ]}
          >
            <Input className="md:w-[700px] sm:w-[500px] w-[300px] rounded-[6px] p-3 " />
            <p className="pt-2 text-[#000000A0]">masalan: MuhammadAli</p>
          </Form.Item>
          <Form.Item
            label="Kelinning ismini kiriting"
            name="daughterName"
            className="flex flex-col justify-center items-center "
            rules={[
              {
                required: true,
                message: `Ism to'ldirilishi shart`,
              },
            ]}
          >
            <Input className="md:w-[700px] sm:w-[500px] w-[300px] rounded-[6px] p-3" />
            <p className="pt-2 text-[#000000A0]">masalan: Fotima</p>
          </Form.Item>
          <Form.Item
            name="date-time-picker"
            label="To'y vaqtini kiriting"
            rules={[
              {
                required: true,
                message: `Ism to'ldirilishi shart`,
              },
            ]}
          >
            <DatePicker
              className="md:w-[700px] sm:w-[500px] w-[300px] rounded-[6px] p-3 border-[#000000A0]"
              showTime
              format="YYYY-MM-DD HH:mm"
            />
            <p className="pt-2 text-[#000000A0]">
              masalan: 2024-09-13 17:00:00
            </p>
          </Form.Item>
          <Form.Item
            label="To'y egalari ismini kiriting:"
            name="parents"
            rules={[
              {
                required: true,
                message: `To'y egalarini to'ldirilishi shart`,
              },
            ]}
          >
            <Input className="md:w-[700px] sm:w-[500px] w-[300px] rounded-[6px] p-3" />
            <p className="pt-2 text-[#000000A0]">
              masalan: "Tolliboy-Nigora" yoki "Rustamovlar xonadoni"
            </p>
          </Form.Item>
          <Form.Item
            label="To'yxona nomini kiriting:"
            name="wedding_place"
            rules={[
              {
                required: true,
                message: `To'yxona nomini to'ldirilishi shart`,
              },
            ]}
          >
            <Input className="md:w-[700px] sm:w-[500px] w-[300px] rounded-[6px] p-3" />
            <p className="pt-2 text-[#000000A0]">
              masalan: "Oqsaroy" to'yxonasi
            </p>
          </Form.Item>
          <Form.Item
            label="To'yxona manzilini kiriting:"
            name="wedding_place_address"
            rules={[
              {
                required: true,
                message: `To'yxona manzilini to'ldirilishi shart`,
              },
            ]}
          >
            <Input className="md:w-[700px] sm:w-[500px] w-[300px] rounded-[6px] p-3" />
            <p className="pt-2 text-[#000000A0]">
              masalan: Toshkent shahar, Yunusobod tumani
            </p>
          </Form.Item>

          <Form.Item label="To'yxonaning geoLokatsiya havolasini kiriting:">
            <Space className="md:w-[700px] sm:w-[500px] w-[300px]">
              <Form.Item
                name="url"
                rules={[
                  {
                    required: true,
                    message: `Geo Lokatsiya to'ldirilishi kerak`,
                  },
                  {
                    type: "url",
                    warningOnly: true,
                    message: `Havola emas`,
                  },
                  {
                    type: "string",
                    min: 6,
                    message: `6 belgidan kam bo'lishi kerak emas`,
                  },
                ]}
              >
                <Input
                  placeholder=""
                  className="md:w-[600px] sm:w-[400px] w-[220px] rounded-[6px] p-3"
                />
                <p className="pt-2 text-[#000000A0]">
                  masalan: https://maps.app.goo.gl/XQvu16jxe98UdHXP6
                </p>
              </Form.Item>
              <Tooltip title="" className="w-[50px]">
                <Typography.Link className="w-[50px]" href="#API">
                  Yordam kerakmi?
                </Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
            className="w-full flex flex-col justify-center items-center"
          >
            <Button
              className="w-[300px] bg-hoverColor py-8 px-5 text-white hover:border-hoverColor hover:text-hoverColor"
              htmlType="submit"
            >
              Taklifnomani yaratish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default CreateInvitation;
