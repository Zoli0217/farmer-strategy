import React from 'react'
import type { BuildingType } from '../types/Map'
import { useMapStore } from '../store/useMapStore'

const BuildingSelectorBar = () => {
    const buildings:{building: BuildingType, icon: string}[] = [
        {building: "house", icon: "🏠"},
        {building: "mine", icon: "⛏️"},
        {building: "lumber", icon: "🪵"},
        {building: "farm", icon: "🌽"}
        
    ]

    const selectedBuilding = useMapStore((state)=> state.selectedBuilding)
    const selectBuilding = useMapStore((state)=> state.selectBuilding)
  return (
    <div>
        {buildings.map(building => <button 
        className="selectorButton" 
        onClick={() => selectBuilding(building.building)} 
        style = {{background: selectedBuilding === building.building ? "green" : "gray"}}
        >
            {building.icon}</button>)}
    </div>
  )
}

export default BuildingSelectorBar