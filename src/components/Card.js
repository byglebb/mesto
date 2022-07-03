export default class Card {
  constructor(data, templateSelector, handleCardClick, userId) {
    this._cardName = data.name;
    this._cardLink = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._elementLike = this._element.querySelector('.element__like');
    this._elementLike.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteButton();
    });
    this.elementImage.addEventListener('click', () => {
      this._handleOpenImagePopup();
    })
  }

  _handleLikeButton() {
    this._elementLike.classList.toggle('element__like_active');
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _handleOpenImagePopup() {
    this._handleCardClick(this._cardName, this._cardLink);
  }

  generateCard() {
    this._element = this._getTemplate();
    this.elementImage = this._element.querySelector('.element__image');
    this.elementPlace = this._element.querySelector('.element__place');
    this._setEventListeners();

    this.elementImage.src = this._cardLink;
    this.elementImage.alt = this._cardName;
    this.elementPlace.textContent = this._cardName;

    this._counterLikeElement = this._element.querySelector('.element__like-counter');
    this._counterLikeElement.textContent = this._likes.length;
    return this._element;
  }

}