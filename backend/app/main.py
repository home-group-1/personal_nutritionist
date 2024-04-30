from fastapi import FastAPI

app = FastAPI()

# Base routh
@app.get("/")
async def root():
    return {"message": "Hello World"}