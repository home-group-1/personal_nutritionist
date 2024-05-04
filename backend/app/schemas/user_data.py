from pydantic import BaseModel

class UserData(BaseModel):
    # Modelo Pydantic para validar datos de entrada del usuario.
    # Cada campo es un tipo de dato esperado que será validado automáticamente por Pydantic.
    Gender: int
    Age: int
    Weight: float
    family_history_with_overweight: int
    FAVC: int
    FCVC: int
    NCP: int
    CAEC: int
    SMOKE: int
    CH2O: int
    SCC: int
    FAF: int
    TUE: int
    CALC: int
    MTRANS: int
