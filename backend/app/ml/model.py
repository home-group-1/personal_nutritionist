import joblib
import os

print("File exists:", os.path.exists('ml/model.py'))

# Obtener el directorio actual del script
current_directory = os.path.dirname(os.path.abspath(__file__))
# Construir la ruta completa al archivo
file_path = os.path.join(current_directory, "model.pkl")

# Cargar el modelo
model = joblib.load(file_path)

def predict_obesity(model, data):
    # Asumiendo que el orden de los datos es el correcto
    prediction = model.predict([list(data.values())])
    return prediction[0]  # el modelo devuelve un array

