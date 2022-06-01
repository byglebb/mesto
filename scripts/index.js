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

const formValidatorEdit = new FormValidator(enableValidation, formProfile);
formValidatorEdit.enableValidation();
const formValidationAdd = new FormValidator(enableValidation, formAddCardElement);
formValidationAdd.enableValidation();

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', () => onPopupKeyUp(event, popup));
  }

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', () => onPopupKeyUp(event, popup));
}

function getCurrentCardElement(name, link) {
  const card = new Card(name, link, '#default-element', openPopup);
  return card.generateCard();
}

function submitHandler(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup(popupProfile);
}

function createHandler(evt) {
  evt.preventDefault();
  sectionElements.prepend(getCurrentCardElement(placeInput.value, linkInput.value));
  closePopup(popupAddCard);
  if (placeInput.value || linkInput.value === "") {
    formValidationAdd.disableSubmitButton();
  }
}

function onPopupKeyUp(event, popup) {
  const keyForEvent = "Escape";
  if (event.key === keyForEvent) {
    closePopup(popup);
  }
}

initialCards.forEach((item) => {
  sectionElements.prepend(getCurrentCardElement(item.name, item.link));
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

buttonAdd.addEventListener('click', () => {
  placeInput.value = "";
  linkInput.value = "";
  openPopup(popupAddCard);
});

formAddCardElement.addEventListener('submit', createHandler);

export { popupImage, popupImagePic, popupImageTitle };



