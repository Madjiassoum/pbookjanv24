import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/home/Accueil'
import Apropos from './pages/about/Apropos'
import NotFind from './pages/notfind/NotFind'
import Head from './components/header/Head'
import Foot from './components/footer/Foot'
import './app.scss'
import Activites from './pages/activ/Activites';
import Hebe from './pages/hebergements/Hebe';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Head />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/Apropos" element={<Apropos />} />
                    <Route path="/*" element={<NotFind />} />
                    <Route path="/Activites" element={<Activites/>} />
                    <Route path="/Hebergement" element={<Hebe/>} />
                </Routes>
                <Foot />
            </BrowserRouter>
        </div>
    )
}

export default App
