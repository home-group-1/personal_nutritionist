import { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Affix, Alert, Button, Divider, Drawer } from 'antd';

const UserManual = () => {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <Affix
                style={{ position: 'absolute', top: 2, right: 10}}
            >
                <Button 
                    type="default" 
                    onClick={() => setVisible(true)}
                    icon={<QuestionCircleOutlined />}
                />
            </Affix>
            <Drawer
                title={<b>Manual de Usuario para FitFuturo</b>}
                placement="right"
                closable={true}
                onClose={() => setVisible(false)}
                open={visible} 
                width={600}
            >
                <p>
                   Bienvenido a FitFuturo, tu compañero digital para comprender y mejorar tu salud. 
                   Esta aplicación está diseñada para ayudarte a gestionar tu peso corporal ofreciendo 
                   recomendaciones personalizadas basadas en tus datos de salud y hábitos de vida.
                </p>
                <h3>Cómo empezar</h3>
                <p>
                    Para comenzar, completa el formulario. Es importante proporcionar información
                    precisa sobre tu edad, peso, altura, y hábitos de salud para que las recomendaciones sean
                    efectivas y personalizadas.
                </p>
                <h3>Interfaz Principal</h3>
                <p>
                    Una vez envíes el formulario, podrás acceder a tu dashboard donde verás un resumen de tu 
                    estado de salud actual y predicciones de salud futuras. Navega a través de las secciones para ingresar 
                    o actualizar tus datos en el formulario.
                </p>
                <h3>Recomendaciones Personalizadas</h3>
                <p>
                    Basándonos en tu perfil, FitFuturo te ofrecerá consejos y recomendaciones sobre cómo mejorar tus hábitos de 
                    vida para alcanzar un peso saludable. Estas recomendaciones son el corazón de nuestra aplicación y se 
                    personalizan para cada usuario.
                </p>
                <Divider />
                <p>
                    Gracias por elegir FitFuturo. Te animamos a mantener una interacción regular con la aplicación y a seguir todas 
                    las recomendaciones para maximizar tu salud y bienestar.
                </p>
                <Divider />
                <Alert 
                    message="Advertencia sobre el uso de FitFuturo" 
                    type="warning"
                    description={
                        <p>
                            En FitFuturo, empleamos tecnología de IA para proporcionar recomendaciones basadas en tus datos. Sin embargo,
                            estas sugerencias no sustituyen el consejo médico profesional. La IA no comprende todas las particularidades de la salud humana,
                            por lo que te recomendamos consultar a médicos o especialistas para un asesoramiento personalizado y adecuado a tus necesidades de salud.
                        </p>
                    }
                    showIcon 
                />
            </Drawer>
        </div>
    );
};

export default UserManual;