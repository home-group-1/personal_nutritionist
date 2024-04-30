import { Form, Input, Button, Select, Row, Flex } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./Form.css";

const { Option } = Select;
const { Item } = Form;

// Maps for select options
const genderMap: Record<string, number> = { Male: 0, Female: 1 };
const yesNoMap: Record<string, number> = { no: 0, yes: 1 };
const calcMap = { no: 0, Sometimes: 1, Frequently: 2, Always: 3 };
const caecMap = { Sometimes: 1, Frequently: 2, Always: 3, no: 0 };
const mtransMap = {
  Public_Transportation: 0,
  Walking: 1,
  Automobile: 2,
  Motorbike: 3,
  Bike: 4,
};
const nobeyesdadMap = {
  Normal_Weight: 0,
  Overweight_Level_I: 1,
  Overweight_Level_II: 2,
  Obesity_Type_I: 3,
  Insufficient_Weight: 4,
  Obesity_Type_II: 5,
  Obesity_Type_III: 6,
};

const MyForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  return (
    <Form
      name="user_data_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
      className="form"
    >
        <Flex wrap="wrap" gap={10} justify="space-evenly">
            <Item
                label="Gender"
                name="Gender"
                className="form-item"
                rules={[{ required: true, message: "Please select your gender!" }]}
            >
                <Select placeholder="Select a gender">
                {Object.keys(genderMap).map((key) => (
                    <Option value={genderMap[key]}>{key}</Option>
                ))}
                </Select>
            </Item>
            <Item
                label="Age"
                name="Age"
                className="form-item"
                rules={[{ required: true, message: "Please input your age!" }]}
            >
                <Input type="number" />
            </Item>
        </Flex>
        <Flex wrap="wrap" gap={10} justify="space-evenly">
            <Item
                label="Height"
                name="Height"
                rules={[{ required: true, message: "Please input your height!" }]}
            >
                <Input type="number" />
            </Item>
            <Item
                label="Weight"
                name="Weight"
                rules={[{ required: true, message: "Please input your weight!" }]}
            >
                <Input type="number" />
            </Item>
        </Flex>
      <Item
        label="Family History with Overweight"
        name="family_history_with_overweight"
        rules={[
          { required: true, message: "Please select your family history!" },
        ]}
      >
        <Select placeholder="Select an option">
          {Object.keys(yesNoMap).map((key) => (
            <Option value={yesNoMap[key]}>{key}</Option>
          ))}
        </Select>
      </Item>
      // More fields can be added similarly
      <Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
            Submit
          </Button>
        </Row>
      </Item>
    </Form>
  );
};

export default MyForm;
