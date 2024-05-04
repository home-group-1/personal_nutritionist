import { create } from 'zustand'
import { Store } from './types/types';

const useStore = create<Store>((set) => ({
    text: `Basado en la predicción de que tienes un nivel de obesidad 1, es importante que tomes medidas para mejorar tu estilo de vida y reducir los riesgos asociados con la obesidad. Aquí tienes algunas recomendaciones específicas:1. Consulta a un profesional de la salud: Es importante que consultes a un médico o a un nutricionista para que te ayude a diseñar un plan personalizado de alimentación y actividad física.
    2. Reducción del consumo de alimentos calóricos: Intenta disminuir la ingesta de alimentos con alto contenido calórico y ricos en grasas saturadas y azúcares añadidos. Opta por opciones más saludables como frutas, verduras, cereales integrales y proteínas magras. 
    3. Aumento de la actividad física: Intenta incorporar ejercicio a tu rutina diaria. Puedes empezar con actividades sencillas como caminar, andar en bicicleta o nadar. El objetivo es realizar al menos 150 minutos de actividad física moderada a la semana.
    4. Control de porciones: Trata de hacer comidas más equilibradas y controlar las porciones que consumes en cada comida. Esto te ayudará a mantener un balance calórico adecuado. 
    5. Reducción del tiempo frente a dispositivos tecnológicos: Intenta reducir el tiempo que pasas frente a dispositivos tecnológicos y en cambio, opta por actividades al aire libre o que impliquen movimiento.  
    6. Beber suficiente agua: Sigue manteniendo tu consumo diario de agua en 2 litros, esto te ayudará a mantenerte hidratado y a controlar el hambre.   
    7. Evitar el consumo de alcohol: Si consumes alcohol con frecuencia, intenta reducir su consumo, ya que puede contribuir al aumento de peso.  
    Recuerda que la constancia y la disciplina son clave para lograr un estilo de vida más saludable. Siempre es recomendable buscar el apoyo de profesionales para que te guíen en este proceso.
    `,
    setText: (text) => set({ text }),
}))

export default useStore;