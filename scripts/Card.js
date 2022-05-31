import { popupImage, popupImagePic, popupImageTitle } from './index.js';

class Card {
  constructor(cardName, cardLink, templateSelector, openPopup) {
    this._cardName = cardName;
    this._cardLink = cardLink;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
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
    popupImagePic.src = this._cardLink;
    popupImagePic.alt = this._cardName;
    popupImageTitle.textContent = this._cardName;
    this._openPopup(popupImage);
  }

  generateCard() {
    this._element = this._getTemplate();
    this.elementImage = this._element.querySelector('.element__image');
    this.elementPlace = this._element.querySelector('.element__place');
    this._setEventListeners();

    this.elementImage.src = this._cardLink;
    this.elementImage.alt = this._cardName;
    this.elementPlace.textContent = this._cardName;
    return this._element;
  }

}

export { Card };