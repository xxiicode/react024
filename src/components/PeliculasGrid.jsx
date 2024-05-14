import { PeliculasCard } from './PeliculasCard'
import { get } from '../utils/conexionAPI'
import { useState, useEffect } from 'react'



export const PeliculasGrid = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        get('/discover/movie').then((data => {
            console.log(data.results)
            setPeliculas(data.results)
        }))
    }, [])
    return (
        //mapear 
        <>

            <h2>Grilla de peliculas🐍</h2>

            <ul className='peliculasGrid'>
                {peliculas.map((pelicula) => (<PeliculasCard key='pelicula.id' peliculaMap={pelicula} />)
                )}

            </ul>
        </>
    )
}

/* genre/movie/list */