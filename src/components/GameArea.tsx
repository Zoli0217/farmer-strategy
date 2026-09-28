import React from 'react'
import { useMapStore } from '../store/useMapStore'
import { mapQueryOptions } from '../store/mapQueryOptions'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

const GameArea = () => {
  // const gameMap = useMapStore((state) => state.map)

  const {data} = useSuspenseQuery(mapQueryOptions())

  return (
    <div className='gameArea' style={{gridTemplateColumns: `repeat(${data?.length}, 1fr)`}}>
      {data?.map(row =>
      row.map(tile => <div className={tile.ground}></div>))
      }
    </div>
  )
}

export default GameArea