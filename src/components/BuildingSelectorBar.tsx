import React from 'react'
import type { BuildingType } from '../types/Map'
import { useMapStore } from '../store/useMapStore'
import { allBuildings } from '../types/Buildings'

const BuildingSelectorBar = () => {
    const buildings = Object.values(allBuildings)

    const selectedBuilding = useMapStore((state)=> state.selectedBuilding)
    const selectBuilding = useMapStore((state)=> state.selectBuilding)
  return (
    <div>
        {buildings.map(building => <button 
        className="selectorButton" 
        onClick={() => selectBuilding(building.type)} 
        style = {{background: selectedBuilding === building.type ? "green" : "gray"}}
        >
            {building.icon}</button>)}
    </div>
  )
}

export default BuildingSelectorBar