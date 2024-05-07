from fastapi import APIRouter, HTTPException
from app.schemas.user_data import UserData  # Asegúrate de que el path y el módulo son correctos.
from app.ml.model import model  # Esta línea podría ser innecesaria si estás cargando el modelo con joblib.
from app.llm.llm_client import LLMClient
import joblib
import os
from dotenv import load_dotenv
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import pandas as pd

router = APIRouter()

# cargar varaibles de entorno
load_dotenv()

# Inicializa el cliente LLM con tu clave de API.
llm_client = LLMClient(api_key=os.getenv('OPEN_AI_KEY'))

# Carga el modelo usando joblib.
model = joblib.load("model.pkl")  # Asegúrate de que 'model.pkl' esté en la ruta correcta.

# Dataset and scaler
datasetObesity = pd.read_csv('clean_ObessityONE.csv')

X = datasetObesity.drop(['NObeyesdad', 'Height'], axis=1)
y = datasetObesity['NObeyesdad']
print(X.columns.tolist())

# Splitting the dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)


@router.post("/predict")
async def predict(data: UserData):
    try:
        # Convertir los datos de la request a diccionario y luego a lista para el modelo
        data_dict = data.dict()
        data_frame = pd.DataFrame(data_dict, index=[0])
        # Normalization scaler
        data_scaler = scaler.transform(data_frame)
        prediction = model.predict(data_scaler)

        # Obtener recomendaciones usando los datos y la predicción
        recommendations = llm_client.get_recommendations(data_dict, prediction[0])

        # Imprimir recomendaciones para depuración (quitar en producción si no es necesario)
        print(recommendations)

        # Devuelve la predicción y las recomendaciones como strings
        return {"prediction": str(prediction[0]), "recommendations": str(recommendations)}
    except Exception as e:
        # En caso de excepciones, devuelve un error HTTP 400 con detalles del error.
        raise HTTPException(status_code=400, detail=str(e))
