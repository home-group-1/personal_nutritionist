import { create } from 'zustand'
import { Store } from './types/types';

const useStore = create<Store>()((set) => ({
    text: 'Here, you`ll see the response from the AI model',
    setText: (text) => set(() => ({ text })),
}))

export default useStore;