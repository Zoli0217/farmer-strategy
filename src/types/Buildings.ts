import type { BuildingType } from "./Map"

export type BuildingDataType = {
    type: BuildingType,
    icon: string,
    cost: {
        gold?: number,
        wood?: number,
        stone?: number,
        food?: number,
        people?: number
    }
}

const house:BuildingDataType = {
    type: "house",
    icon: "🏠",
    cost: {
        gold:100,
        wood: 5,
        stone: 2,
        food: 10
    }
}

const mine:BuildingDataType = {
    type: "mine",
    icon: "⛏️",
    cost: {
        people: 2,
        wood: 8,
    }
}

const lumber:BuildingDataType = {
    type: "lumber",
    icon: "🪓",
    cost: {
        people: 2,
        wood: 2,
        stone: 2
    }
}

const farm:BuildingDataType = {
    type: "farm",
    icon: "🛖",
    cost: {
        people: 2,
        wood: 10,
        stone: 5
    }
}

export const allBuildings = { house, mine, lumber, farm }

export const getBuildingsData = (buildings: BuildingType) => {return allBuildings[buildings]}