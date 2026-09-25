import React from 'react'
import { useMapStore } from '../store/useMapStore'

const GameArea = () => {
  const gameMap = useMapStore((state) => state.map)
  return (
    <div className='gameArea' style={{gridTemplateColumns: `repeat(${gameMap.length}, 1fr)`}}>
      {gameMap.map(row =>
      row.map(tile => <div className={tile.ground}></div>))
      }
    </div>
  )
}

export default GameArea