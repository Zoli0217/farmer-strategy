import { create } from "zustand"
import type { TileType } from "../types/Map"

type MapStoreType = {
    map: TileType[][]
}

export const useMapStore = create <MapStoreType>((set)=>({
    map: generateMap(10)
}))

function addGrass(map: TileType[][]):TileType[][]{
    let baseGrass = []
    for(let r = 0; r < map.length; r++){
        for(let c = 0; c < map[r].length; c++){
            if(Math.random() < 0.05){
                map[r][c].ground = "grass"
                baseGrass.push([r,c])
            }
        }
    }

    baseGrass.forEach(cord => {
        const x = cord[0]
        const y = cord[1]

        if(x> 0 && Math.random() < 0.5){ map[x-1][y].ground = "grass"}
        if(x < map.length-1 && Math.random() < 0.5){map [x+1][y].ground = "grass"}

        if(y > 0 && Math.random() < 0.5){}
    })

    return map
}

function generateMap(size: number):TileType[][]{
    let tempMap: TileType[][] = []

    for(let r = 0; r < size; r++){
        let line: TileType[] = []
        for(let c = 0; c < size; c++){
            line.push({
                building: null,
                ground: "water",
                resource: null
            })
        }
        tempMap.push(line)
    }

    return addGrass(tempMap)
}
