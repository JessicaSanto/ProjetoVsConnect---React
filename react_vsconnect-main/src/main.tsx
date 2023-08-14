import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import ListaDevs from './pages/ListaDevs'
import ListaServicos from './pages/ListaServicos'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='listadevs' element={ <ListaDevs /> } />
        <Route path='listaservicos' element={ <ListaServicos /> } />
        
      </Routes>
      <Footer />      
    </BrowserRouter>
  </React.StrictMode>
)
