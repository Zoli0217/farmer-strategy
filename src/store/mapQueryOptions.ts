import { queryOptions } from "@tanstack/react-query";
import type { TileType } from "../types/Map";
import axios from "axios";

const generateMap = async (): Promise<TileType[][]> => {
    // const response = await axios.post("https://2tcjmzzm-8000.euw.devtunnels.ms/map/generate/", {
    //     size: 10,
    //     seed: 1010,
    //     seedCount: 2,
    //     iterations: 5
    // });

    const response = await axios.get("map.json")
    return response.data.map;

    
}

export function mapQueryOptions(){
    return queryOptions({
        queryKey: ["map"],
        queryFn: generateMap,
    })
}