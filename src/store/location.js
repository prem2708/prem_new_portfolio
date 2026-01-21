import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEAULT_LOCATION = locations.work;
const useLocationStore = create(immer((set)=>({
    activeLocation: DEAULT_LOCATION,

    setActiveLocation: (location=null) => set((state)=>{
        state.activeLocation = location 
    }),

    resetActiveLocation: () => set((state)=>{
        state.activeLocation = DEAULT_LOCATION;
    }),

})))

export default useLocationStore;