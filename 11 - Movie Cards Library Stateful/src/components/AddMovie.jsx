import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieBtn from './AddMovieComponents/AddMovieBtn';
import AddMovieGenre from './AddMovieComponents/AddMovieGenre';
import AddMovieImage from './AddMovieComponents/AddMovieImage';
import AddMovieRating from './AddMovieComponents/AddMovieRating';
import AddMovieStoryLine from './AddMovieComponents/AddMovieStoryLine';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  // renderButton(onClick) {
  //   return (
  //     <button
  //       type="button"
  //       onClick={ () => this.handleClick(onClick) }
  //       data-testid="send-button"
  //       className="button"
  //     >
  //       Adicionar filme
  //     </button>
  //   );
  // }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle
          title={ title }
          onTitleTextChange={ this.handleChange }
        />

        <AddMovieSubtitle
          subtitle={ subtitle }
          onSubtitleTextChange={ this.handleChange }
        />

        <AddMovieImage
          image={ imagePath }
          onImageTextChange={ this.handleChange }
        />

        <AddMovieStoryLine
          story={ storyline }
          onStoryTextChange={ this.handleChange }
        />

        <AddMovieRating
          rating={ rating }
          onRatingNumberChange={ this.handleChange }
        />

        <AddMovieGenre
          genre={ genre }
          onGenreChange={ this.handleChange }
        />

        <AddMovieBtn funcOnClick={ () => this.handleClick(onClick) } />
        {/* {this.renderButton(onClick)} */}
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
