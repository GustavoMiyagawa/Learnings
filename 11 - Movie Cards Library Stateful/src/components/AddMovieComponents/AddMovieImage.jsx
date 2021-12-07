import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends Component {
  render() {
    const { image, onImageTextChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ image }
          onChange={ onImageTextChange }
        />
      </label>
    );
  }
}

export default AddMovieImage;

AddMovieImage.propTypes = {
  image: PropTypes.string.isRequired,
  onImageTextChange: PropTypes.func.isRequired,
};
