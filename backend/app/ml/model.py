import joblib
import os


# Obtener el directorio actual del script
current_directory = os.path.dirname(os.path.abspath(__file__))
# Construir la ruta completa al archivo
file_path = os.path.join(current_directory, "modelo_obesidad.joblib")

# Cargar el modelo
model = joblib.load(file_path)

def predict_obesity(data):
    
    # Función que toma datos formateados y devuelve una predicción.
    # `data`: diccionario de valores que serán usados para hacer la predicción.
    # Supone que el modelo espera una lista de valores como entrada para la predicción.
    prediction = model.predict([list(data.values())])
    return prediction[0]  # el modelo devuelve un array