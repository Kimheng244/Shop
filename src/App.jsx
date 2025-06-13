import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Footers from './components/Footers'

function App() {
  return (
    <div className='font-text'>
        <Header/>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default App
