import type { TileType } from "../types/Map";
import { scumbagAPI } from "./instance";

export type MapApiResponse = {
    "id": number,
    "seed": number,
    "size": number,
    "map": TileType[][],
}

export async function getMap(size: number, seed?: number){
    try{
        const response = await scumbagAPI.post("/map/generate/", {
            width: size,
            height: size,
            seed: seed
        })

        return response.data
        
    }catch (error){
        throw new Error("Error during fetching map data")
    }
}