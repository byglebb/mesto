const buttonEdit = document.querySelector('.profile__edit-button');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = formProfile.querySelector('.popup__input_data_name');
const activityInput = formProfile.querySelector('.popup__input_data_activity');
const buttonAdd = document.querySelector('.profile__add-button');
const formAddCardElement = document.querySelector('.popup__form_addcard');

import { initialCards, enableValidation, config } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';
import Api from '../components/Api.js';
// import { data } from 'browserslist';
// import { info } from 'console';

const formValidatorEdit = new FormValidator(enableValidation, formProfile);
formValidatorEdit.enableValidation();
const formValidationAdd = new FormValidator(enableValidation, formAddCardElement);
formValidationAdd.enableValidation();

function getCurrentCardElement(name, link) {
  const card = new Card(name, link, '#default-element', openPopupImage);
  return card.generateCard();
}

// const initialCardsList = new Section({
//   items: initialCards,
//   renderer: (item) => {
//     const currentCardElement = getCurrentCardElement(item.name, item.link, '#default-element', openPopupImage);
//     initialCardsList.addItem(currentCardElement);
//   }
// }, '.elements');

// initialCardsList.renderItems();

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

// const popupAdd = new PopupWithForm({
//   submitHandler: (objectValues) => {
//     const valueName = objectValues["place-add-card"];
//     const valueLink = objectValues["link-add-card"];
//     initialCardsList.addItem(getCurrentCardElement(valueName, valueLink));
//   },
//   popupSelector: '.popup_addcard',
// });

// popupAdd.setEventListeners();

// const popupEdit = new PopupWithForm({
//   submitHandler: (objectValues) => {
//     const valueName = objectValues["username"];
//     const valueJob = objectValues["userjob"];
//     userInfo.setUserInfo(valueName, valueJob);
//   },
//   popupSelector: '.popup_profile',
// });

// popupEdit.setEventListeners();

///////////////////////////////////////////////////////////////////////////

// fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
//   headers: {
//     authorization: 'a2bace0a-be7d-4cc4-8ecd-6f5d9788fa19'
//   }
// })
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`); 
//   })
//   .then((result) => {
//     console.log(result);
//   });

// fetch('https://nomoreparties.co/v1/cohort-42/users/me', {
//   headers: {
//     authorization: 'a2bace0a-be7d-4cc4-8ecd-6f5d9788fa19'
//   }
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);      
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('Ошибка. Запрос не выполнен: ', err);
//   });

const api = new Api(config);
api.getInitialCards();
api.getUserInfo();

let userId;

const popupEdit = new PopupWithForm({
  submitHandler: (objectValues) => {
    api.setUserInfo(objectValues)
      .then(data => {
        userInfo.setInfo(data);
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
        renderCards.addItem(data);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
    // const valueName = objectValues["place-add-card"];
    // const valueLink = objectValues["link-add-card"];
    // initialCardsList.addItem(getCurrentCardElement(valueName, valueLink));
  },
  popupSelector: '.popup_addcard',
});

popupAdd.setEventListeners();

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userDataInfo]) => {
    userInfo.setInfo(userDataInfo);
    userId = userDataInfo._id;
    console.log(cards);
    console.log(userDataInfo);
    const initialCardsList = new Section({
      items: cards,
      renderer: (item) => {
        const currentCardElement = getCurrentCardElement(item.name, item.link, '#default-element', openPopupImage);
        initialCardsList.addItem(currentCardElement);
      }
    }, '.elements');
    initialCardsList.renderItems();
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })

// const renderCards = new Section({
//   items: cards,
//   renderer: (item) => {
//     const currentCardElement = getCurrentCardElement(item.name, item.link, '#default-element', openPopupImage);
//     initialCardsList.addItem(currentCardElement);
//   }
// }, '.elements');







