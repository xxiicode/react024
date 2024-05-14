import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { DetallePeliculas } from './pages/DetallePeliculas'
/* <LandingPage/>   */

export const App = () => {

    return (
        <BrowserRouter>
            <header>
                <Link to="/"><h1 className='title'>Home👻</h1></Link>
               {/*  <Link to="/detalle"><h1 className="title">Detalle de la peli👾</h1></Link> */}
            </header>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pelicula/:peliculaId" element={<DetallePeliculas />} />
            
            </Routes>
        </BrowserRouter>
    )
}