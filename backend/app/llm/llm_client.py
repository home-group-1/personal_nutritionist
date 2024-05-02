from openai import OpenAI

class LLMClient:
    def __init__(self, api_key):
        # Inicializa el cliente de OpenAI con la clave API proporcionada.
        self.client = OpenAI(api_key=api_key)

    def get_recommendations(self, user_data, user_prediction):
        # Consulta al modelo de lenguaje para obtener recomendaciones basadas en datos del usuario y una predicción previa.
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo-0125",
            messages=[
                {"role": "system", "content": f"""
                Basado en los siguientes datos de un usuario y la predicción de su nivel de obesidad como '{user_prediction}', ¿cuáles serían tus recomendaciones específicas para mejorar su estilo de vida?

                Datos del usuario:
                Edad: {user_data['Age']} años
                Peso: {user_data['Weight']} kg
                Género: {'Femenino' if user_data['Gender'] else 'Masculino'}
                Consumo frecuente de alimentos calóricos: {'Sí' if user_data['FAVC'] else 'No'}
                Frecuencia de consumo de vegetales: {user_data['FCVC']} veces al día
                Número de comidas principales: {user_data['NCP']}
                Consumo de alimentos entre comidas: {user_data['CAEC']}
                Fumador: {'Sí' if user_data['SMOKE'] else 'No'}
                Consumo diario de agua: {user_data['CH2O']} litros
                Control de calorías consumidas: {'Sí' if user_data['SCC'] else 'No'}
                Frecuencia de actividad física: {user_data['FAF']} veces a la semana
                Uso diario de dispositivos tecnológicos: {user_data['TUE']} horas
                Frecuencia de consumo de alcohol: {user_data['CALC']}
                Medio de transporte utilizado: {user_data['MTRANS']}
                Historial familiar de sobrepeso: {'Sí' if user_data['family_history_with_overweight'] else 'No'}
                """}
            ]
        )
        # Extrae y devuelve el contenido de la respuesta.
        return response.choices[0].message.content