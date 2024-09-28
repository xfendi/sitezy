import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Setup from '../Company/Routes/Setup'

const Company = () => {
  return (
    <div className="auth__app">
      <Routes>
        <Route path="/setup/*" element={<Setup />} />
      </Routes>
    </div>
  )
}

export default Company