# FitFuturo

## Resumen
FitFuturo es una aplicación diseñada para ayudar a los usuarios a comprender y mejorar su estado de salud en relación con el peso corporal. Utiliza un enfoque personalizado para proporcionar recomendaciones basadas en los datos de salud ingresados por los usuarios, como edad, peso, altura, y hábitos de vida.

## Motivación
La aplicación surge en respuesta a la creciente incidencia de problemas relacionados con el peso en Latinoamérica. Solo en Colombia, cerca del 56.5% de la población vivía con exceso de peso en 2022, lo que representa un problema significativo que esta aplicación busca abordar.

## Tecnologías utilizadas
- **Frontend**: React
- **Backend**: Python/Flask
- **Base de Datos**: PostgreSQL
- **Machine Learning**: scikit-learn y pandas para la exploración de datos y entrenamiento de modelos.
- **Despliegue**: Utilización de OpenAI LLM para análisis y generación de respuestas personalizadas.

## Cómo empezar

### Prerrequisitos
Es recomendable usar un entorno virtual en la carpeta backend:
```bash
python -m venv venv
source venv/bin/activate  # En Windows use venv\Scripts\activate
````

### Instalación
Clonar el repositorio:
```bash
git clone git@github.com:home-group-1/personal_nutritionist.git
```

### Para el backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```
Variables de entorno:
```bash
OPEN_AI_KEY=tu_key
```

### Para el frontend
```bash
cd ../frontend
npm install
```
Variables de enotorno:
```bash
REACT_APP_API_URL='http://localhost:8000'
```

## Link
[FitFuturo](http://ec2-3-89-118-190.compute-1.amazonaws.com/)
