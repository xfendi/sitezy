import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../Pages/Settings/Index'

const Settings = () => {
  return (
    <div className="account__app">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  )
}

export default Settings