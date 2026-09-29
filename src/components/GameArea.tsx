import React from 'react'
import { useMapStore } from '../store/useMapStore'
import { mapQueryOptions } from '../store/mapQueryOptions'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import Tile from './Tile'

const GameArea = () => {
  // const gameMap = useMapStore((state) => state.map)

  const {data} = useSuspenseQuery(mapQueryOptions())

  return (
    <div className='gameArea' style={{gridTemplateColumns: `repeat(${data?.length}, 1fr)`}}>
      {data?.map((row, rowIdx) =>
      row.map((tile, colIdx) => <Tile tile={tile} colIdx={colIdx} rowIdx={rowIdx} />))
      }
    </div>
  )
}

export default GameArea