import { Link } from 'react-router-dom'

export const PeliculasCard = ({ peliculaMap }) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`

    return (
        <li className="peliculasCard">

            <Link to={`/pelicula/${peliculaMap.id}`} className='links'>
                <img src={imgURL} alt={peliculaMap.title} />
                <small>{peliculaMap.title}</small>
            </Link>
        </li>
    )
}