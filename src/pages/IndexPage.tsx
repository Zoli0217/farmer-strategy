import React, { Suspense } from 'react'
import BuildingSelectorBar from '../components/BuildingSelectorBar'
import GameArea from '../components/GameArea'
import ResourceBar from '../components/ResourceBar'

const IndexPage = () => {
  return (
    <div>
        <div>
            <ResourceBar />

                <Suspense fallback={<div>Loading...</div>}>
                <GameArea/>
            </Suspense>
            <BuildingSelectorBar />
      </div>
    </div>
  )
}

export default IndexPage