import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({ id, title, year, summary, poster }) {
    return <li className="movie-list">
        <h2>{ title }</h2>
        <img src={ poster } />
    </li>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie