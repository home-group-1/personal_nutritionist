from fastapi import APIRouter, HTTPException
from app.schemas.user_data import UserData
from app.ml.model import model
from app.llm.llm_client import LLMClient

router = APIRouter()
llm_client = LLMClient(api_key="")

@router.post("/predict")
async def predict(data: UserData):
  
    try:
        
        prediction = model(data.dict())
        recommendations = llm_client.get_recommendations(data.dict(), prediction)
        return {"prediction": prediction, "recommendations": recommendations}
    except Exception as e:
        
        raise HTTPException(status_code=400, detail=str(e))