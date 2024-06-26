import { Form, Input, Button, Select, Flex, Divider } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, SendOutlined, UndoOutlined } from "@ant-design/icons";
import "./Form.css";
import type { BinaryType, FormDataUser, Frecuency, Gender, Transportation } from "../../types/types";
import { calculateIMC, freMap, genderMap, mtransMap, spanishBinary, spanishFrecuency, spanishGender, spanishTransportation, yesNoMap } from "../../utils";
import { useState } from "react";
import useStore from "../../store";
import { omit } from "lodash";

const { Option } = Select;
const { Item, useForm } = Form;

const MyForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [form] = useForm<FormDataUser>();
  const { fetchRecommendations, setText } = useStore();
  const { setCurrentStatus } = useStore();

  const onFinish = (values: FormDataUser) => {
    setText('');
    setCurrentStatus(calculateIMC(values?.Weight, values.Height || 1))
    console.log(values);
    fetchRecommendations({...omit(values, ['Height'])}).then(() => {
      form.resetFields();
      setStep(1);
    });
  };

  const getDisplayStyle = (currentStep: number) => ({
    display: step === currentStep ? "" : "none",
  });

  return (
    <>
    <Divider>Queremos saber un poco sobre tu rutina</Divider>
    <Form<FormDataUser>
      onFinish={onFinish}
      layout="vertical"
      className="form"
      form={form}
    >
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(1)}>
        <Item
          label="Género"
          name="Gender"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor selecciona tu genero!" }]}
        >
          <Select placeholder="Seleccionar género">
            {Object.keys(genderMap).map((key) => (
              <Option value={genderMap[key as Gender]}>{spanishGender[key as Gender]}</Option>
            ))}
          </Select>
        </Item>
        <Item
          label="Edad"
          name="Age"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, ingresa tu edad!" }]}
        >
          <Input type="number" />
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(1)}>
        <Item
          label="Peso (kg)"
          name="Weight"
          className="form-item"
          rules={[{ required: true, message: "¡Ingresa tu peso!" }]}
        >
          <Input type="number" min={0} />
        </Item>
        <Item
          label="Estatura (cm)"
          name="Height"
          className="form-item"
          rules={[{ required: true, message: "¡Ingresa tu estatura!" }]}
        >
          <Input type="number" min={0} />
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(1)}>
        <Item
          label="¿Fumas?"
          name="SMOKE"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(yesNoMap).map((key) => (
              <Option value={yesNoMap[key as BinaryType]}>{spanishBinary[key as BinaryType]}</Option>
            ))}
          </Select>
        </Item>
        <Item
          label="¿Cuánta agua consumes al día? (litros)"
          name="CH2O"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, ingresa tu CH2O!" }]}
        >
          <Select 
            placeholder="Selecciona una opción"
            options={[
              { value: 1, label: 'Menos de 1 litro' },
              { value: 2, label: 'Entre 1 y 2 litros' },
              { value: 3, label: 'Más de 2 litros' },
            ]}
          />
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(1)}>
        <Item
          label="¿Controlas las calorías que consumes diariamente?"
          name="SCC"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(yesNoMap).map((key) => (
              <Option value={yesNoMap[key as BinaryType]}>{spanishBinary[key as BinaryType]}</Option>
            ))}
          </Select>
        </Item>
        <Item
          label="¿Con qué frecuencia realizas actividad física?"
          name="FAF"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(freMap).map((key) => (
              <Option value={freMap[key as Frecuency]}>{spanishFrecuency[key as Frecuency]}</Option>
            ))}
          </Select>
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(1)}>
        <Item
          label="¿Cuántas horas pasas frente a una pantalla al día?"
          name="TUE"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, ingresa tu TUE!" }]}
        >
          <Select 
            placeholder="Selecciona una opción"
            options={[
              { value: 0, label: 'Ninguna' },
              { value: 1, label: 'Menos de 1 hora' },
              { value: 2, label: 'Entre 1 y 3 horas' },
              { value: 3, label: 'Más de 3 horas' },
            ]}
          />
        </Item>
        <Item
          label="¿Con qué frecuencia consumes alcohol?"
          name="CALC"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(freMap).map((key) => (
              <Option value={freMap[key as Frecuency]}>{spanishFrecuency[key as Frecuency]}</Option>
            ))}
          </Select>
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(2)}>
        <Item
          label="¿Consumes frecuentemente alimentos altos en calorías?"
          name="FAVC"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(freMap).map((key) => (
              <Option value={freMap[key as Frecuency]}>{spanishFrecuency[key as Frecuency]}</Option>
            ))}
          </Select>
        </Item>
        <Item
          label="¿Normalmente consumes vegetales en tus comidas? (de 1 a 3)"
          name="FCVC"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, ingresa tu FCVC!" }]}
        >
          <Select 
            placeholder="Selecciona una opción"
            options={[
              { value: 1, label: 'Nunca' },
              { value: 2, label: 'A veces' },
              { value: 3, label: 'Siempre' },
            ]}
          />
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(2)}>
        <Item
          label="¿Cuántas comidas principales consumes al día?"
          name="NCP"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, ingresa tu NCP!" }]}
        >
          <Select 
            placeholder="Selecciona una opción"
            options={[
              { value: 1, label: 'Entre 1 y 2' },
              { value: 2, label: '3' },
              { value: 3, label: 'Más de 3' },
              { value: 4, label: 'Sin respuesta' },
            ]}
          />
        </Item>
        <Item
          label="¿Con qué frecuencia consumes alimentos entre comidas?"
          name="CAEC"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(freMap).map((key) => (
              <Option value={freMap[key as Frecuency]}>{spanishFrecuency[key as Frecuency]}</Option>
            ))}
          </Select>
        </Item>
      </Flex>
      <Flex wrap="wrap" gap={10} justify="center" style={getDisplayStyle(2)}>
        <Item
          label="¿Algún miembro de tu familia ha sufrido o sufre de sobrepeso?"
          name="family_history_with_overweight"
          className="form-item"
          rules={[
            { required: true, message: "¡Por favor, selecciona el historial familiar!" },
          ]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(yesNoMap).map((key) => (
              <Option value={yesNoMap[key as BinaryType]}>{spanishBinary[key as BinaryType]}</Option>
            ))}
          </Select>
        </Item>
        <Item
          label="¿Cuál es tu medio de transporte principal?"
          name="MTRANS"
          className="form-item"
          rules={[{ required: true, message: "¡Por favor, selecciona una opción!" }]}
        >
          <Select placeholder="Selecciona una opción">
            {Object.keys(mtransMap).map((key) => (
              <Option value={mtransMap[key as Transportation]}>{spanishTransportation[key as Transportation]}</Option>
            ))}
          </Select>
        </Item>
      </Flex>

      <Item>
        <Flex justify="end" gap={8}>
        <Button 
            icon={<UndoOutlined />} 
            type="default" 
            onClick={() => {
              form.resetFields()
              setText('')
            }} 
        > Limpiar
        </Button>
          <Button
            type="dashed"
            onClick={() => setStep(1)}
            style={getDisplayStyle(2)}
            icon={<ArrowLeftOutlined />}
          >
            Anterior
          </Button>
          <Button
            type="dashed"
            onClick={() => setStep(2)}
            style={getDisplayStyle(1)}
            icon={<ArrowRightOutlined />}
          >
            Siguiente
          </Button>
          {step === 2 && (
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
            >
              Enviar
            </Button>
          )}
        </Flex>
      </Item>
    </Form></>
  );
};

export default MyForm;
