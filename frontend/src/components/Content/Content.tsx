import useStore from '../../store';
import "./Content.css";
import { Alert, Empty, Space, Spin } from 'antd';

const Content = () => {
    const [text] = useStore((state) => [state.text, state.setText]);
    const loading = useStore((state) => state.loading);
    return (
        <Space direction="vertical" className='space'>
            <Alert
                message="Llena la información del formulario sobre tu rutina diaria para predecir posibles complicaciones a futuro relacionadas con la obesidad. Nuestra IA te dará recomendaciones basadas en los datos proporcionados."
                type="info"
                showIcon
                className='info'
            />
            <div className={`text-llm `}>
                {
                text
                    ?
                    text
                    :
                    <Empty description={loading ? <Spin /> : 'No hay recomendaciones todavía.'} />}
            </div>
        </ Space>
    );
};

export default Content;