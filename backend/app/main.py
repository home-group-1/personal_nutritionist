from fastapi import FastAPI
from app.routers import predictions


#env variables


app = FastAPI()

app.include_router(predictions.router)

# Base routh
@app.get("/")
async def root():
    return {"message": "Hello World"}