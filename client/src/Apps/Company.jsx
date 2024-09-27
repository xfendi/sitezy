import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Setup from '../Company/Routes/Setup'
import Settings from '../Company/routes/Settings'

const Company = () => {
  return (
    <div className="auth__app">
      <Routes>
        <Route path="/setup/*" element={<Setup />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default Company