import { create } from "zustand";
import type { ResourceType } from "../types/Map";
import type { BuildingDataType } from "../types/Buildings";

type ResourceStoreType = {
    gold: number,
    wood: number,
    stone: number,
    food: number,
    people: number,

    spendGold: (amount: number) => void,
    receiveGold: (amount: number) => void,

    addResource: (type: ResourceType, amount: number) => void,
    spendResource: (type: ResourceType, amount: number) => void,
    buildABuilding: (building: BuildingDataType) => boolean

}


export const useResourceStore = create<ResourceStoreType>((set) => ({
    gold: 1000,
    wood: 100,
    stone: 50,
    food: 40,
    people: 0,

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

    buildABuilding: (building: BuildingDataType) => {
        const state = useResourceStore.getState()
        const cost = building.cost

        if ((!cost.food || cost.food <= state.food) &&
            (!cost.wood || cost.wood <= state.wood) &&
            (!cost.stone || cost.stone <= state.stone) &&
            (!cost.people || cost.people <= state.people) &&
            (!cost.gold || cost.gold <= state.gold)
        ) {
            if (cost.food) state.spendResource("food", cost.food)
            if (cost.wood) state.spendResource("wood", cost.wood)
            if (cost.stone) state.spendResource("stone", cost.stone)
            if (cost.people) state.spendResource("people", cost.people)
            if (cost.gold) state.spendGold(cost.gold)

            //TODO: REWARD
            if(building.reward){
                const reward = Object.entries(building.reward) as [ResourceType, number][];

                reward.forEach((r) => {
                    state.addResource(r[0], r[1])
                })
                
            }
            return true;
        }
        return false;
    }
}))

