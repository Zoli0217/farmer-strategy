import React from 'react'
import { useResourceStore } from '../store/useResourceStore'
import { removeCurrentMap } from '../store/mapQueryOptions'
const ResourceBar = () => {
    const gold = useResourceStore((state) => state.gold)
    const wood = useResourceStore((state) => state.wood)
    const stone = useResourceStore((state) => state.stone)
    const food = useResourceStore((state) => state.food)
    const people = useResourceStore((state) => state.people)

    const newMapBtnClicked = () => {
      removeCurrentMap()
    }

  return (
    <div>
        
      <div>{gold}🪙</div>
      <div>{wood}🪵</div>
      <div>{stone}🪨</div>
      <div>{food}🥖</div>
      <div>{people}👨🏽‍🌾</div>

      <button onClick={newMapBtnClicked}>🔄️🗺️</button>
    </div>
  )
}

export default ResourceBar