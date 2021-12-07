import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

class SectionBebidasEmProgresso extends Component {
  render() {
    const { idDrink, strDrinkThumb, strDrink, strAlcoholic,
      strInstructions, strCategory, strTags, finalList, disabled, checked,
      loading, isALreadyFavorited, showSpan, id, CopyToClipboard,
      handleOnClickLike, handleClick, addDoneRecipe, handleChange } = this.props;
    const obj = {
      id: idDrink,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
      doneDate: Date(),
      tags: strTags,
    };
    return (
      <div>
        <img src={ strDrinkThumb } data-testid="recipe-photo" alt="imagem-da-receita" />
        <h1 data-testid="recipe-title">{ strDrink }</h1>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => CopyToClipboard() }
        >
          <img src={ shareIcon } alt="icone botão" />
        </button>
        <span style={ { display: showSpan ? 'inline' : 'none' } }>
          Link copiado!
        </span>
        <button
          type="button"
          data-testid="favorite-btn"
          src={ isALreadyFavorited ? blackHeartIcon : whiteHeartIcon }
          onClick={ () => handleOnClickLike() }
        >
          <img
            src={ isALreadyFavorited ? blackHeartIcon : whiteHeartIcon }
            alt={ `liked? ${isALreadyFavorited}` }
          />
        </button>
        <h2 data-testid="recipe-category">{ strCategory }</h2>
        <form onChange={ handleChange }>
          <ul>
            {loading ? (<div>...</div>) : (
              finalList.map((ing, index) => (
                <li key={ ing } data-testid={ `${index}-ingredient-step` }>
                  <span>
                    <input
                      type="checkbox"
                      value={ index }
                      checked={ checked[index] }
                      onClick={ (e) => handleClick(e) }
                    />
                  </span>
                  <span>{ ing }</span>
                </li>
              ))
            )}
          </ul>
          <p data-testid="instructions">{strInstructions}</p>
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="finish-recipe-btn"
              disabled={ disabled }
              onClick={ () => { addDoneRecipe(obj); } }
            >
              Finalizar receita
            </button>
          </Link>
          <Link
            to={ {
              pathname: `/bebidas/${id}`,
            } }
          >
            <button
              type="button"
            >
              Voltar para a página de detalhes
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SectionBebidasEmProgresso;

SectionBebidasEmProgresso.propTypes = {
  idDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strDrink: PropTypes.string,
  strAlcoholic: PropTypes.string,
  strInstructions: PropTypes.string,
  strCategory: PropTypes.string,
  strTags: PropTypes.string,
  finalList: PropTypes.string,
  disabled: PropTypes.string,
  checked: PropTypes.string,
  loading: PropTypes.string,
  isALreadyFavorited: PropTypes.string,
  showSpan: PropTypes.string,
  id: PropTypes.string,
  CopyToClipboard: PropTypes.func,
  handleOnClickLike: PropTypes.func,
  handleClick: PropTypes.func,
  addDoneRecipe: PropTypes.func,
  handleChange: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;
