import React, { useState, type MouseEventHandler } from 'react'
import type { BuildingType, TileType } from '../types/Map'
import { useMapStore } from '../store/useMapStore'
import { getBuildingsData } from '../types/Buildings'
import { useResourceStore } from '../store/useResourceStore'
type TilePropsType = {
  tile: TileType,
  rowIdx: number,
  colIdx: number
}

const Tile = ({tile, colIdx, rowIdx}: TilePropsType) => {

  const selectedBuilding = useMapStore((state)=> state.selectedBuilding)
  const buildABuilding = useResourceStore((state)=> state.buildABuilding)

  const buildingIcon = (building: BuildingType) => {
    let icon = "";
    switch (building) {
      case "farm":
        icon = "🌽"; break;
      case "house":
        icon = "🏠"; break;
      case "lumber":
        icon = "🪓"; break;
      case "mine":
        icon = "⛏️"; break;
      default:
        break;
    }
    return icon; 
  }

  const [building, setBuilding] = useState<BuildingType | null>(null)

  const canBuild = () => {
    if(tile.building) return false

    switch (selectedBuilding){
      case "farm": return tile.ground == "grass"; break;
      case "house": return tile.ground == "grass"; break;
      case "lumber": return tile.ground == "grass"; break;
      case "mine": return tile.ground == "stone"; break;
      default: return false

    }
  }

  const build = () =>{
    if(!canBuild() || selectedBuilding == null){ alert("Nem lehet építeni!"); return;}

    const result = buildABuilding(getBuildingsData(selectedBuilding))
    if(result) {setBuilding(selectedBuilding)}
    else{
      alert("Nincs elég nyersanyag!")
    }
  }

  const hoverTile = (e: React.MouseEvent) => {
    const div = e.target as HTMLDivElement
    const style = tile.ground == "grass" ? "2px solid green" : "2px solid red"
    div.style.border = style
  }

  const leaveTile = (e: React.MouseEvent) => {
    const div = e.target as HTMLDivElement
    div.style.border = "none"
  }

  return (
    <div onClick={build} onMouseEnter={hoverTile} onMouseLeave={(e)=>leaveTile(e)} className={tile.ground} title={`${rowIdx}, ${colIdx}`}>
      {building && buildingIcon(building)}
    </div>  
  )
}

export default Tile