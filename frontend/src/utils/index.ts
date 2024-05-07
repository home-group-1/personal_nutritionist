import { 
    Binary, 
    BinaryType, 
    Frecuency, 
    FrecuencyNumber, 
    Gender, 
    Transportation, 
    TransportationNumber, 
    Weight, 
    WeightNumber 
} from "../types/types";

export const genderMap: Record<Gender, Binary> = { Male: 0, Female: 1 };

export const yesNoMap: Record<BinaryType, Binary> = { yes: 1, no: 0 };

export const freMap: Record<Frecuency, FrecuencyNumber> = { no: 0, Sometimes: 1, Frequently: 2, Always: 3 };


export const mtransMap: Record<Transportation, TransportationNumber> = {
  Public_Transportation: 0,
  Walking: 1,
  Automobile: 2,
  Motorbike: 3,
  Bike: 4,
};

export const nobeyesdadMap: Record<Weight, WeightNumber>  = {
  Normal_Weight: 0,
  Overweight_Level_I: 1,
  Overweight_Level_II: 2,
  Obesity_Type_I: 3,
  Insufficient_Weight: 4,
  Obesity_Type_II: 5,
  Obesity_Type_III: 6,
};

export const spanishGender = {
    Female: 'Femenino',
    Male: 'Masculino',
};

export const spanishTransportation = {
    Public_Transportation: 'Transporte público',
    Walking: 'Caminando',
    Automobile: 'Automóvil',
    Motorbike: 'Motocicleta',
    Bike: 'Bicicleta',
};

export const spanishWeight = {
    Normal_Weight: 'Peso normal',
    Overweight_Level_I: 'Sobrepeso nivel I',
    Overweight_Level_II: 'Sobrepeso nivel II',
    Obesity_Type_I: 'Obesidad tipo I',
    Insufficient_Weight: 'Peso insuficiente',
    Obesity_Type_II: 'Obesidad tipo II',
    Obesity_Type_III: 'Obesidad tipo III',
};

export const spanishBinary = {
    'no': 'No',
    'yes': 'Sí',
};

export const spanishFrecuency = {
    no: 'Nunca',
    Sometimes: 'A veces',
    Frequently: 'Frecuentemente',
    Always: 'Siempre',
};

export const calculateIMC = (weight: number, height: number): string => {
    const heightMeters = height / 100;
    const imc = weight / (heightMeters * heightMeters);
    console.log({ imc });
    const imcStates = {
        4: 'Insuficiencia de peso', // BMI less than 18.5
        0: 'Peso normal',           // BMI 18.5 to 24.9
        1: 'Nivel de sobrepeso I',  // BMI 25 to 29.9
        2: 'Nivel de sobrepeso II', // BMI 30 to 34.9
        3: 'Nivel de obesidad I',   // BMI 35 to 39.9
        5: 'Nivel de obesidad II',  // BMI 40 to 49.9
        6: 'Nivel de obesidad III'  // BMI greater than 50
    };

    if (imc < 18.5) {
        return imcStates[4];
    }
    if (imc >= 18.5 && imc < 25) {
        return imcStates[0];
    }
    if (imc >= 25 && imc < 30) {
        return imcStates[1];
    }
    if (imc >= 30 && imc < 35) {
        return imcStates[2];
    }
    if (imc >= 35 && imc < 40) {
        return imcStates[3];
    }
    if (imc >= 40 && imc < 50) {
        return imcStates[5];
    }
    return imcStates[6];
}