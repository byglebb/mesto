const buttonEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = formProfile.querySelector('.popup__input_data_name');
const activityInput = formProfile.querySelector('.popup__input_data_activity');
const buttonAdd = document.querySelector('.profile__add-button');
const formAddCardElement = document.querySelector('.popup__form_addcard');

import { enableValidation, config } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const formValidatorEdit = new FormValidator(enableValidation, formProfile);
formValidatorEdit.enableValidation();
const formValidationAdd = new FormValidator(enableValidation, formAddCardElement);
formValidationAdd.enableValidation();

function getCurrentCardElement(data) {
  const card = new Card(data, '#default-element', openPopupImage, userId, {
    handleLikeState: (item) => {
      api.toggleLikeButton(item._id, !card.isLiked())
        .then(data => {
          // console.log(data);
          card.handleLikeButton(data);
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        })
    },
    handleDeletion: (item) => {
      // console.log(item);
      popupConfirm.setConfirmHandler(() => {
        // console.log(item);
        api.deleteCard(item._data._id)
          .then(data => {
            popupConfirm.close();
            item.handleDeleteButton();
          })
          .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
      });
      popupConfirm.open();
    },
  });
  return card.generateCard();
}

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
///////////////////////////////////////////////////////////////////////////
const api = new Api(config);
api.getInitialCards();
api.getUserInfo();

let userId;

const popupEdit = new PopupWithForm({
  submitHandler: (objectValues) => {
    api.setUserInfo(objectValues)
      .then(userDataInfo => {
        userInfo.setInfo(userDataInfo);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
  },
  popupSelector: '.popup_profile',
});

popupEdit.setEventListeners();

const popupAdd = new PopupWithForm({
  submitHandler: (objectValues) => {
    api.addCard(objectValues)
      .then(data => {
        initialCardsList.addItem(getCurrentCardElement(data));
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  },
  popupSelector: '.popup_addcard',
});

popupAdd.setEventListeners();

const popupConfirm = new PopupWithConfirm('.popup_confirmation');
popupConfirm.setEventListeners();

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userDataInfo]) => {
    userInfo.setInfo(userDataInfo);
    userId = userDataInfo._id;
    initialCardsList.renderItems(cards.reverse());
    // console.log(cards);
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })

const initialCardsList = new Section({
  renderer: (item) => {
    const currentCardElement = getCurrentCardElement(item, '#default-element', openPopupImage, userId);
    initialCardsList.addItem(currentCardElement);
  }
}, '.elements');






