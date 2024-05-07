from pydantic import BaseModel

class UserData(BaseModel):
    # Modelo Pydantic para validar datos de entrada del usuario.
    # Cada campo es un tipo de dato esperado que será validado automáticamente por Pydantic.
    Age: int
    Gender: int
    Weight: float
    CALC: int
    FAVC: int
    FCVC: int
    NCP: int
    SCC: int
    SMOKE: int
    CH2O: int
    family_history_with_overweight: int
    FAF: int
    TUE: int
    CAEC: int
    MTRANS: int
