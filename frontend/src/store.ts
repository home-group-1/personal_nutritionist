import { create } from 'zustand';
import axios from 'axios';
import { FormDataUser, Store } from './types/types';
const API_URL = process.env.REACT_APP_API_URL;
const useStore = create<Store>((set) => ({
  text: '',
  loading: false,
  setText: (text) => set({ text }),
  fetchRecommendations: async (postData: FormDataUser) => {
    set({ loading: true }); 
    try {
      const response = await axios.post(`${API_URL}/predict`, postData);
      const { /*prediction,*/ recommendations } = response.data;
      // const recommendationText = `Basado en la predicción de que tienes un nivel de obesidad ${prediction}, es importante que tomes medidas para mejorar tu estilo de vida y reducir los riesgos asociados con la obesidad. Aquí tienes algunas recomendaciones específicas:${recommendations}`;
      set({ text: recommendations });
      set({ loading: false });
    } catch (error) {
      set({ text: 'Error al cargar las recomendaciones. Por favor, intenta de nuevo más tarde.' });
      set({ loading: false });
    }
  },
}));

export default useStore;
