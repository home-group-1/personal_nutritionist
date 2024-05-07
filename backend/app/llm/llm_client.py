from openai import OpenAI

class LLMClient:
    def __init__(self, api_key):
        # Inicializa el cliente de OpenAI con la clave API proporcionada.
        self.client = OpenAI(api_key=api_key)
        self.nobeyesdad = {
            4: 'Insuficiencia de peso',
            0: 'Peso normal',
            1: 'Nivel de sobrepeso I',
            2: 'Nivel de sobrepeso II',
            3: 'Nivel de obesidad I',
            5: 'Nivel de obesidad II',
            6: 'Nivel de obesidad III',
        }

    def get_recommendations(self, user_data, user_prediction):
        # Consulta al modelo de lenguaje para obtener recomendaciones basadas en datos del usuario y una predicción previa.
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo-0125",
            messages=[
                {"role": "system", "content": f"""
                Dados los siguientes datos de un usuario, cuya predicción indica un estado de '{self.nobeyesdad[user_prediction]}' en el futuro, solicito recomendaciones para mejorar su estilo de vida y reducir los riesgos asociados con la obesidad:
                - Edad: {user_data['Age']} años
                - Peso: {user_data['Weight']} kg
                - Género: {'Femenino' if user_data['Gender'] else 'Masculino'}
                - Consumo frecuente de alimentos calóricos: {'Sí' if user_data['FAVC'] else 'No'}
                - Frecuencia de consumo de vegetales: {user_data['FCVC']} veces al día
                - Número de comidas principales: {user_data['NCP']}
                - Consumo de alimentos entre comidas: {user_data['CAEC']}
                - Fumador: {'Sí' if user_data['SMOKE'] else 'No'}
                - Consumo diario de agua: {user_data['CH2O']} litros
                - Control de calorías consumidas: {'Sí' if user_data['SCC'] else 'No'}
                - Frecuencia de actividad física: {user_data['FAF']} veces a la semana
                - Uso diario de dispositivos tecnológicos: {user_data['TUE']} horas
                - Frecuencia de consumo de alcohol: {user_data['CALC']}
                - Medio de transporte utilizado: {user_data['MTRANS']}
                - Historial familiar de sobrepeso: {'Sí' if user_data['family_history_with_overweight'] else 'No'}
                """}
            ]
        )
        # Extrae y devuelve el contenido de la respuesta.
        return response.choices[0].message.content