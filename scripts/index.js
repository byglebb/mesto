const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = formProfile.querySelector('.popup__input_data_name');
const activityInput = formProfile.querySelector('.popup__input_data_activity');
const infoName = document.querySelector('.profile__name');
const infoActivity = document.querySelector('.profile__activity');
const popupAddCard = document.querySelector('.popup_addcard');
const buttonAdd = document.querySelector('.profile__add-button');
const formAddCardElement = document.querySelector('.popup__form_addcard');
const placeInput = formAddCardElement.querySelector('.popup__input_data_place');
const linkInput = formAddCardElement.querySelector('.popup__input_data_link');
const sectionElements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_image');
const popupImagePic = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__title-image');
const elementTemplate = document.querySelector('#default-element').content.querySelector('.element');
const classCloseButton = 'popup__close-button';
const classOverlay = 'popup__overlay';
const submitButton = popupAddCard.querySelector('.popup__submit-button');
const popups = document.querySelectorAll('.popup');

import {Card, initialCards} from './cards.js';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', onPopupKeyUp);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', onPopupKeyUp);
}

function submitHandler(evt) { // Сохранить (Профиль)
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup(popupProfile);
}

function addDefaultElement(imageLink, placeName) { // создание карточки из массива
  const currentElement = elementTemplate.cloneNode(true);
  const elementImage = currentElement.querySelector('.element__image');
  elementImage.src = imageLink;
  elementImage.alt = placeName;
  currentElement.querySelector('.element__place').textContent = placeName;

  elementImage.addEventListener('click', (evt) => {
    popupImagePic.src = imageLink;
    popupImagePic.alt = placeName;
    popupImageTitle.textContent = placeName;
    openPopup(popupImage);
  });

  currentElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  currentElement.querySelector('.element__delete-button').addEventListener('click', () => {
    currentElement.remove();
  });
  return currentElement;
}

function pasteElement(element) { // Вставка элемента
  sectionElements.prepend(element);
}

function createHandler(evt) { // создание карточки из попапа
  evt.preventDefault();
  const currentPlaceInput = placeInput.value;
  const currentLinkInput = linkInput.value;
  const insertElement = addDefaultElement(currentLinkInput, currentPlaceInput);
  pasteElement(insertElement);
  closePopup(popupAddCard);
  if (currentPlaceInput || currentLinkInput === "") {
    submitButton.classList.add('popup__submit-button_disabled');
    submitButton.disabled = true;
  }
}

function onPopupKeyUp(event) { //// ESC
  const keyForEvent = "Escape";
  if (event.key === keyForEvent) {
    closePopup(popupProfile);
    closePopup(popupAddCard);
    closePopup(popupImage);
  }
}

initialCards.forEach((item) => { ///////////////////////////////////////////// Class
  const card = new Card(item, '#default-element');
  const cardElement = card.generateCard();
  sectionElements.prepend(cardElement);
});

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains(classCloseButton) || evt.target.classList.contains(classOverlay)) {
      closePopup(popup)
    }
  });
});

buttonEdit.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  activityInput.value = infoActivity.textContent;
  openPopup(popupProfile);
});
formProfile.addEventListener('submit', submitHandler);

initialCards.forEach(function (item) {
  const imageLink = item.link;
  const placeName = item.name;
  pasteElement(addDefaultElement(imageLink, placeName));  ///////////
});

buttonAdd.addEventListener('click', () => {
  placeInput.value = "";
  linkInput.value = "";
  openPopup(popupAddCard);
});

formAddCardElement.addEventListener('submit', createHandler); ///////

export {popupImage, popupImagePic, popupImageTitle, openPopup};



