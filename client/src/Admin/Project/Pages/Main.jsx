import React from 'react'
import { useParams } from 'react-router-dom'

const Main = () => {
  const { id } = useParams();
  return (
    <div className="main">
      Main content goes here... {id}
    </div>
  )
}

export default Main