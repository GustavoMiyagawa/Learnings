import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieBtn extends Component {
  render() {
    const { funcOnClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ funcOnClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default AddMovieBtn;

AddMovieBtn.propTypes = {
  funcOnClick: PropTypes.func.isRequired,
};
