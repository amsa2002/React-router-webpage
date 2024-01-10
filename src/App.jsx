import React from 'react'
import NavContainer from './components/NavContainer'
import Card from './components/Card'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return <div className='container-fluid web-page'>
      <BrowserRouter>
      <NavContainer/>
      <Routes>
        <Route path='/all' element={<Card/>} />
        <Route path='/navbar' element={<NavContainer/>} />
        <Route path='/fullstack' element={<FullStack/>} />
        <Route path='/datascience' element={<DataScience/>} />
        <Route path='/cybersecurity' element={<CyberSecurity/>} />
        <Route path='/career' element={<Career/>}/>
        <Route path='*' element={<Navigate to ='/all'/>} />
      </Routes>
      </BrowserRouter>
</div>
  
}

export default App