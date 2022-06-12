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
const classCloseButton = 'popup__close-button';
const classOverlay = 'popup__overlay';
const popups = document.querySelectorAll('.popup');

import { initialCards, enableValidation } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

import Section from './Section.js'; ////////////////////////////////////////////
import Popup from './Popup.js'; /////////////////////////////////////////////
import PopupWithImage from './PopupWithImage.js'; //////////////////////////////

const formValidatorEdit = new FormValidator(enableValidation, formProfile);
formValidatorEdit.enableValidation();
const formValidationAdd = new FormValidator(enableValidation, formAddCardElement);
formValidationAdd.enableValidation();

//111111111111111 function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keyup', onPopupKeyUp);
// }

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', onPopupKeyUp);
}

function getCurrentCardElement(name, link) {
  const card = new Card(name, link, '#default-element', openPopupImage);
  return card.generateCard();
}

function submitHandler(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup(popupProfile);
}

// function createHandler(evt) {
//   evt.preventDefault();
//   sectionElements.prepend(getCurrentCardElement(placeInput.value, linkInput.value));
//   closePopup(popupAddCard);
//   formValidationAdd.disableSubmitButton();
// }

//1111111111111111 function onPopupKeyUp(event) {
//   const keyForEvent = "Escape";
//   if (event.key === keyForEvent) {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// initialCards.forEach((item) => {
//   sectionElements.prepend(getCurrentCardElement(item.name, item.link));
// });

//1111111111111111111111111 popups.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains(classCloseButton) || evt.target.classList.contains(classOverlay)) {
//       closePopup(popup)
//     }
//   });
// });

//1111111111111111111 buttonEdit.addEventListener('click', () => {
//   nameInput.value = infoName.textContent;
//   activityInput.value = infoActivity.textContent;
//   openPopup(popupProfile);
// });
formProfile.addEventListener('submit', submitHandler);

//111111111111111111 buttonAdd.addEventListener('click', () => {
//   placeInput.value = "";
//   linkInput.value = "";
//   openPopup(popupAddCard);
// });

// formAddCardElement.addEventListener('submit', createHandler);

export { popupImage, popupImagePic, popupImageTitle };

////////////////////////////////////////////////// Добавляем картоки из объекта
export { classCloseButton, classOverlay };

const initialCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    // const card = new Card(item.name, item.link, '#default-element', openPopup);
    // const cardElement = card.generateCard();
    // initialCardsList.addItem(cardElement);
    getCurrentCardElement(item.name, item.link, '#default-element', openPopupImage);
    initialCardsList.addItem(getCurrentCardElement(item.name, item.link));
  }
}, sectionElements);

// formAddCardElement.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   // initialCardsList.renderItems();
//   addItem(getCurrentCardElement(placeInput.value, linkInput.value));
//   closePopup(popupAddCard);
//   formValidationAdd.disableSubmitButton();
// });

initialCardsList.renderItems();
/////////////////////////////////////////////////// Реализуем закрытие и открытие попапов
function openPopup(popup) {
  const popupOpen = new Popup(popup);
  popupOpen.open();
}

function setEventListeners(popup) {
  const currentPopup = new Popup(popup);
  currentPopup.setEventListeners();
}

buttonEdit.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  activityInput.value = infoActivity.textContent;
  openPopup(popupProfile);
  setEventListeners(popupProfile);
});

buttonAdd.addEventListener('click', () => {
  placeInput.value = "";
  linkInput.value = "";
  openPopup(popupAddCard);
  setEventListeners(popupAddCard);
});
///////////////////////////////////////////////// открытие попапа с картинкой

function openPopupImage(name, link) {
  const popupWithImage = new PopupWithImage(popupImage);
  popupWithImage.open(name, link);
  setEventListeners(popupImage);
}





