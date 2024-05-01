from fastapi import APIRouter, HTTPException
from app.schemas.user_data import UserData
from app.ml.model import model
from app.llm.llm_client import LLMClient

router = APIRouter()
llm_client = LLMClient(api_key="sk-proj-NepDxIXdGWraoXhIhQ7rT3BlbkFJA0JAa0M3XG55uoRSx1Fv")

@router.post("/predict")
async def predict(data: UserData):
    print("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    try:
        print("------------------>")
        prediction = model(data.dict())
        recommendations = llm_client.get_recommendations(data.dict(), prediction)
        return {"prediction": prediction, "recommendations": recommendations}
    except Exception as e:
        print("--____--------------->")
        raise HTTPException(status_code=400, detail=str(e))