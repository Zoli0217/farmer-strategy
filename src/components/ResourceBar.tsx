import React from 'react'
import { useResourceStore } from '../store/useResourceStore'
const ResourceBar = () => {
    const gold = useResourceStore((state) => state.gold)
    const wood = useResourceStore((state) => state.wood)
    const stone = useResourceStore((state) => state.stone)
    const food = useResourceStore((state) => state.food)
    const people = useResourceStore((state) => state.people)
  return (
    <div>
        
      <div>{gold}🪙</div>
      <div>{wood}🪵</div>
      <div>{stone}🪨</div>
      <div>{food}🥖</div>
      <div>{people}👨🏽‍🌾</div>
    </div>
  )
}

export default ResourceBar