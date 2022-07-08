const buttonEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = formProfile.querySelector('.popup__input_data_name');
const activityInput = formProfile.querySelector('.popup__input_data_activity');
const buttonAdd = document.querySelector('.profile__add-button');
const formAddCardElement = document.querySelector('.popup__form_addcard');
const buttonAvatar = document.querySelector('.profile__avatar-shell');
const fromAvatar = document.querySelector('.popup__form_avatar');

const cardTemplateId = '#default-element';
const nameSelector = '.profile__name';
const activitySelector = '.profile__activity';
const popupProfileSelector = '.popup_profile';
const popupAddcardSelector = '.popup_addcard';
const popupImageSelector = '.popup_image';
const popupConfirmSelector = '.popup_confirmation';
const popupAvatarSelector = '.popup_avatar';
const cardsContainerSelector = '.elements';

const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'a2bace0a-be7d-4cc4-8ecd-6f5d9788fa19',
    'Content-Type': 'application/json'
  }
};

export {
  enableValidation,
  config,
  buttonEdit,
  formProfile,
  nameInput,
  activityInput,
  buttonAdd,
  formAddCardElement,
  buttonAvatar,
  fromAvatar,
  cardTemplateId,
  nameSelector,
  activitySelector,
  popupProfileSelector,
  popupAddcardSelector,
  popupImageSelector,
  popupConfirmSelector,
  popupAvatarSelector,
  cardsContainerSelector
};