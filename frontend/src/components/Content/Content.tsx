import useStore from '../../store';
import "./Content.css";
import { Alert, Empty, Space } from 'antd';

const Content = () => {
    const [text] = useStore((state) => [state.text, state.setText]);
    return (
        <Space direction="vertical">
            <Alert
                message="Llena la información del formulario sobre tu rutina diaria para predecir posibles complicaciones a futuro relacionadas con la obesidad. Nuestra IA te dará recomendaciones basadas en los datos proporcionados."
                type="info"
                showIcon
                className='info'
            />
            <div className={`text-llm anim-typewriter `}>
                    {text
                        ?
                        text
                        :
                        <Empty description='No hay recomendaciones' />}
            </div>
        </ Space>
    );
};

export default Content;