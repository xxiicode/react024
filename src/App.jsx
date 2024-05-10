import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {LandingPage} from './pages/LandingPage'
import {DetallePeliculas} from './pages/DetallePeliculas'
/* <LandingPage/>   */

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<LandingPage/>} />
                <Route path="/detalle" element={<DetallePeliculas/>} />
            </Routes>
        </BrowserRouter>
    )
}