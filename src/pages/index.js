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

import { initialCards, enableValidation } from '../components/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

const formValidatorEdit = new FormValidator(enableValidation, formProfile);
formValidatorEdit.enableValidation();
const formValidationAdd = new FormValidator(enableValidation, formAddCardElement);
formValidationAdd.enableValidation();

function getCurrentCardElement(name, link) {
  const card = new Card(name, link, '#default-element', openPopupImage);
  return card.generateCard();
}

export { popupImage, popupImagePic, popupImageTitle, classCloseButton, classOverlay, placeInput, linkInput };

const initialCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    getCurrentCardElement(item.name, item.link, '#default-element', openPopupImage);
    initialCardsList.addItem(getCurrentCardElement(item.name, item.link));
  }
}, sectionElements);

initialCardsList.renderItems();

function openPopup(popup) {
  const popupOpen = new Popup(popup);
  popupOpen.open();
}

function setEventListeners(popup) {
  const currentPopup = new Popup(popup);
  currentPopup.setEventListeners();
}

const userInfo = new UserInfo(infoName, infoActivity);

buttonEdit.addEventListener('click', () => {
  const previousUserInfo = userInfo.getUserInfo();
  nameInput.value = previousUserInfo.nameSelector;
  activityInput.value = previousUserInfo.activitySelector;
  openPopup(popupProfile);
  setEventListeners(popupProfile);
});

buttonAdd.addEventListener('click', () => {
  formValidationAdd.disableSubmitButton();
  openPopup(popupAddCard);
  setEventListeners(popupAddCard);
});

function openPopupImage(name, link) {
  const popupWithImage = new PopupWithImage(popupImage);
  popupWithImage.open(name, link);
  setEventListeners(popupImage);
}

const popupAdd = new PopupWithForm({
  submitHandler: () => {
    initialCardsList.addItem(getCurrentCardElement(placeInput.value, linkInput.value));
  },
  popupSelector: popupAddCard,
});

popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({
  submitHandler: () => {
    userInfo.setUserInfo(nameInput, activityInput);
  },
  popupSelector: popupProfile,
});

popupEdit.setEventListeners();





