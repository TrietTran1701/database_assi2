import React from "react";
import Header from "../components/Header";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";
import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

dayjs.extend(customParseFormat);

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface dataPatient {
  [key: string]: any;
}

const add = () => {
  const [form] = Form.useForm();
  const [dob, setDob] = React.useState<string>();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ gender: "M" });
        return;
      case "female":
        form.setFieldsValue({ gender: "F" });
        return;
      case "other":
        form.setFieldsValue({ gender: "O" });
        break;
      default:
    }
  };
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Add patient successfully",
      description: "",
    });
  };

  const onFinish = async (values: any) => {
    let data: dataPatient = {};
    data = Object.assign(values);
    data.dateOfBirth = dob;
    const response = await axios.post(
      "http://localhost:3001/api/patient",
      data
    );
    if (response) {
      form.resetFields();
      openNotificationWithIcon("success");
    }
  };

  const [api, contextHolder] = notification.useNotification();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      {contextHolder}
      <Header />
      <section className="flex flex-col items-center">
        <div>
          <h1 className="font-bold text-2xl px-4 py-4">Add new patient</h1>
        </div>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="firstname"
            label="Firstname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastname"
            label="Lastname"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="address" label="Adress" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Date of birth" rules={[{ required: true }]}>
            {/* <Input /> */}
            <DatePicker
              onChange={(date, dateString) => {
                // console.log(dateString);
                setDob(dateString);
              }}
            />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: "blue!important",
                marginRight: "15px",
              }}
            >
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default add;
