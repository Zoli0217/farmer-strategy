import { queryOptions } from "@tanstack/react-query";
import type { TileType } from "../types/Map";
import axios from "axios";
import { queryClient } from "../App";

const generateMap = async (): Promise<TileType[][]> => {
    const mapId = localStorage.getItem("mapId");
    if(mapId){
        const response = await axios.get("http://192.168.13.20:8000/api/maps/" + mapId)
        return response.data.tiles;
    };

    const response = await axios.post("http://192.168.13.20:8000/api/maps/", {
        width: 30,
        height: 30,
        seedCount: 10,
        iterations: 5,
    });

    localStorage.setItem("mapId", response.data.id);
    return response.data.tiles;
    
}

export function mapQueryOptions(){
    return queryOptions({
        queryKey: ["map"],
        queryFn: generateMap,
    })
}

export function removeCurrentMap(){
    localStorage.removeItem("mapId");
    queryClient.refetchQueries({ queryKey: mapQueryOptions().queryKey });
}