import { get } from "../utils/conexionAPI"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

export const DetallePeliculas = () => {
    const [pelicula, setPelicula] = useState(null)
    const { peliculaId } = useParams();

    useEffect(() => {
        get(`/movie/${peliculaId}`).then((data) => {
            setPelicula(data);
        });
    }, [peliculaId])
    if (!pelicula) {
        return null
    }
    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

    return (
        <>
            <h1>Detalle de Pelicula🔥</h1>

            <section className="contenedorDetalle">
                <img src={imgURL} alt="{pelicula.title}" />
                <div>
                    <small class="align-center">{pelicula.genres.map((genre)=>genre.name).join(" - ")}</small>
                    <h1>{pelicula.title}</h1>
                    <h2>{pelicula.original_title}</h2>
                    <small className="align-center">Original Title</small>
                    <br/>
                    <p>{pelicula.overview}</p>
                    <small>Fecha de Estreno: {pelicula.release_date}</small>
                </div>
            </section>
        </>
    )
}