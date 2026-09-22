import { create } from "zustand";

export type ResourceType = "wood" | "stone" | "food"

type ResourceStoreType = {
    gold: number,
    wood: number,
    stone: number,
    food: number,

    spendGold: (amount: number) => void,
    receiveGold: (amount: number) => void,

    addResource: (type: ResourceType, amount: number) => void,
    spendResource: (type: ResourceType, amount: number) => void,

}


export const useResourceStore = create<ResourceStoreType>((set) => ({
    gold: 1000,
    wood: 0,
    stone: 0,
    food: 0,
    spendGold: (amount: number) => {
        if (amount > 0 && amount <= useResourceStore.getState().gold){
            set((state) => ({ gold: state.gold - amount }));
            return true
        }
        return false
    },

    receiveGold: (amount: number) => set((state) => ({ gold: state.gold + amount })),

    addResource: (type: ResourceType, amount: number) => set((state) => ({ [type]: state[type] + amount })),
    spendResource: (type: ResourceType, amount: number) => set((state) => ({ [type]: state[type] - amount })),
}))