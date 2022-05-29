const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

import {popupImage, popupImagePic, popupImageTitle, openPopup} from './index.js';

class Card {
  constructor(cards, templateSelector) {
    this._cardName = cards.name;
    this._cardLink = cards.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

      return cardElement;
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
    openPopup(popupImage);
  }

  generateCard() {
    this._element = this._getTemplate();
    this.elementImage = this._element.querySelector('.element__image');
    this.elementPlace = this._element.querySelector('.element__place');
    this._setEventListeners();

    this.elementImage.src = this._cardLink;
    this.elementImage.alt = this._cardName;
    this.elementPlace.textContent = this._cardName;

    console.log(this._element);
    return this._element;
  }

}

export {Card, initialCards};