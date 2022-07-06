export default class Card {
  constructor(data, templateSelector, handleCardClick, userId, {handleLikeState, handleDeletion}) {
    this._cardName = data.name;
    this._cardLink = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._data = data;

    this._handlerLikeState = handleLikeState;
    this._handlerDeleteButton = handleDeletion;
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
      // this._handleLikeButton();
      this._handlerLikeState(this._data);
    });
    this._elementDelete = this._element.querySelector('.element__delete-button');
    this._elementDelete.addEventListener('click', () => {
      // this._handleDeleteButton();
      this._handlerDeleteButton(this);
    });
    this.elementImage.addEventListener('click', () => {
      this._handleOpenImagePopup();
    })
  }

  isLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }

  handleLikeButton(data) {
    // this._elementLike.classList.toggle('element__like_active');
    this._counterLikeElement.textContent = data.likes.length;
    this._elementLike.classList.toggle('element__like_active', !this.isLiked());
    this._likes = data.likes;
  }

  handleDeleteButton() {
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
    this._elementLike.classList.toggle('element__like_active', this.isLiked());

    if (!(this._userId === this._ownerId)) {
      this._elementDelete.classList.add('element__delete-button_inactive');
    }
    
    // console.log(this._element);
    return this._element;
  }

}