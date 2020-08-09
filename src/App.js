import React from 'react'
import axios from 'axios'
import Movie from './Movie'
import './App.css'

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        this.setState({ movies, isLoading: false })
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        const { isLoading, movies } = this.state
        return <section class="container">
            {
                isLoading ? 
                    (
                        <div class="loader">
                            <span class="loader__text">Loading...</span>
                        </div>
                    ) 
                    :
                    (
                        <div id="movies">
                            {
                                movies.map(movie =>
                                    <Movie 
                                        id={ movie.id } 
                                        title={ movie.title } 
                                        year={ movie.year } 
                                        summary={ movie.summary } 
                                        poster={ movie.medium_cover_image }
                                    />  
                                )
                            }
                        </div>
                    )
            }
        </section>
    }
}

export default App