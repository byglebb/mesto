const buttonEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = formProfile.querySelector('.popup__input_data_name');
const activityInput = formProfile.querySelector('.popup__input_data_activity');
const buttonAdd = document.querySelector('.profile__add-button');
const formAddCardElement = document.querySelector('.popup__form_addcard');

import { initialCards, enableValidation } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
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

const initialCardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const currentCardElement = getCurrentCardElement(item.name, item.link, '#default-element', openPopupImage);
    initialCardsList.addItem(currentCardElement);
  }
}, '.elements');

initialCardsList.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  activitySelector: '.profile__activity',
});

buttonEdit.addEventListener('click', () => {
  const previousUserInfo = userInfo.getUserInfo();
  nameInput.value = previousUserInfo.nameValue;
  activityInput.value = previousUserInfo.activityValue;
  popupEdit.open();
});

buttonAdd.addEventListener('click', () => {
  formValidationAdd.disableSubmitButton();
  popupAdd.open();
});

const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

function openPopupImage(name, link) {
  popupWithImage.open(name, link);
}

const popupAdd = new PopupWithForm({
  submitHandler: (objectValues) => {
    const valueName = objectValues["place-add-card"];
    const valueLink = objectValues["link-add-card"];
    initialCardsList.addItem(getCurrentCardElement(valueName, valueLink));
  },
  popupSelector: '.popup_addcard',
});

popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({
  submitHandler: (objectValues) => {
    const valueName = objectValues["username"];
    const valueJob = objectValues["userjob"];
    userInfo.setUserInfo(valueName, valueJob);
  },
  popupSelector: '.popup_profile',
});

popupEdit.setEventListeners();





