import React from 'react'
import { Counter } from '@/components/counter/Counter'
import type { NextPage } from 'next'
import BoardPage from './board/boardPage'


const Home: NextPage = () => {
  return (
    <div>
    <Counter />
    <BoardPage />
    </div>
  )
}

export default Home
