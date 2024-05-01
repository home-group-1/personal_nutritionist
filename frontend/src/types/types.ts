export type Gender = 'Female' | 'Male';

export type Binary = 0 | 1;

export type BinaryType = 'yes' | 'no';

export type Frecuency = 'no' | 'Sometimes' | 'Frequently' | 'Always';

export type FrecuencyNumber = 0 | 1 | 2 | 3;

export type Transportation = 'Public_Transportation' | 'Walking' | 'Automobile' | 'Motorbike' | 'Bike';

export type TransportationNumber = 0 | 1 | 2 | 3 | 4;

export type Weight = 'Normal_Weight' | 'Overweight_Level_I' | 'Overweight_Level_II' | 'Obesity_Type_I' | 'Insufficient_Weight' | 'Obesity_Type_II' | 'Obesity_Type_III';

export type WeightNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type FormDataUser = {
    Gender: Binary;
    Age: number;
    Weight: number;
    family_history_with_overweight: Binary;
    FAVC: Binary;
    FCVC: number;
    NCP: number;
    CAEC: Binary;
    SMOKE: Binary;
    CH2O: number;
    SCC: Binary;
    FAF: FrecuencyNumber;
    TUE: number;
    CALC: FrecuencyNumber;
    MTRANS: TransportationNumber;
    NObeyesdad?: WeightNumber;
};

export type Store = {
    text: string;              
    setText: (text: string) => void;  
  }
