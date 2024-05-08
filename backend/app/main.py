from fastapi import FastAPI
from app.routers import predictions
from fastapi.middleware.cors import CORSMiddleware

#env variables


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(predictions.router)

# Base routh
@app.get("/")
async def root():
    return {"message": "Hello World"}