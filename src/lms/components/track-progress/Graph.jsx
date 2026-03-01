import React from 'react'
import Hours from './graphs/Hours'
import Performance from './graphs/Performance'
import Calender from './graphs/Calender'

const Graph = () => {
  return (
    <>
      <div className="flex lg:gap-4 mt-10 flex-wrap ">
        <Hours />
        <Performance />
        <Calender />
      </div>
    </>
  )
}

export default Graph