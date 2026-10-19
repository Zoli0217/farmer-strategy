import React, { Suspense, useEffect } from 'react'
import BuildingSelectorBar from '../components/BuildingSelectorBar'
import GameArea from '../components/GameArea'
import ResourceBar from '../components/ResourceBar'
import { getMe } from '../services/auth'

const IndexPage = () => {
  useEffect(() => {
    getMe().then(data => console.log(data))
  },[])

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