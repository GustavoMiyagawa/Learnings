import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    // movieAPI.getMovies().then((result) => this.setState({ movies: result }));
    movieAPI.getMovies().then((result) => {
      this.setState({
        movies: result,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // if (!movies.length) {
    //   return <Loading />;
    // }
    // if (loading === true) return <Loading />;
    if (loading) return <Loading />;
    return (
      <>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
