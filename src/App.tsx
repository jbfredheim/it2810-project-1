import React from 'react'

import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Example} from './components/Example.tsx'

const App : React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
