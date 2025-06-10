import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import View from './pages/View.jsx'
import { ProductProvide } from './Store/ProductContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvide>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/view' element={<View/>}/>
            </Route>

            <Route path='/*' element={<h1>Not Found</h1>}/>

        </Routes>
    </BrowserRouter>
    </ProductProvide>
  </StrictMode>,
)
