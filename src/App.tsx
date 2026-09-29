import React, { Suspense } from 'react'
import ResourceBar from './components/ResourceBar'
import GameArea from './components/GameArea'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BuildingSelectorBar from './components/BuildingSelectorBar'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ResourceBar />

        <Suspense fallback={<div>Loading...</div>}>
          <GameArea/>
        </Suspense>
        <BuildingSelectorBar />
      </div>
    </QueryClientProvider>
  )
}

export default App