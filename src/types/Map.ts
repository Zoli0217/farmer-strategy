export type GroundType = "grass" | "water" | "stone" | "sand"
export type BuildingType = "house" | "mine" | "lumber" | "farm"
export type ResourceType = "wood" | "stone" | "food"


export type TileType = {
    ground: GroundType,
    building: BuildingType | null,
    resource: ResourceType | null
}