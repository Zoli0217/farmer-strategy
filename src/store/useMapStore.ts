import { create } from "zustand"
import type { BuildingType, TileType } from "../types/Map"

type MapStoreType = {
    map: TileType[][],
    selectedBuilding: BuildingType | null,
    selectBuilding: (building: BuildingType | null) => void
}

export const useMapStore = create <MapStoreType>((set)=>({
    map: [],
    selectedBuilding: null,
    selectBuilding: (building)=> {set(()=> ({selectedBuilding: building}))}
}))


