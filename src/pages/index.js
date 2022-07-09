import {
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
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const formValidationEdit = new FormValidator(enableValidation, formProfile);
formValidationEdit.enableValidation();
const formValidationAdd = new FormValidator(enableValidation, formAddCardElement);
formValidationAdd.enableValidation();
const formValidationAvatar = new FormValidator(enableValidation, fromAvatar);
formValidationAvatar.enableValidation();

function openPopupImage(name, link) {
  popupWithImage.open(name, link);
}

const api = new Api(config);

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userDataInfo]) => {
    userInfo.setInfo(userDataInfo);
    userInfo.setAvatarInfo(userDataInfo);
    userId = userDataInfo._id;
    initialCardsList.renderItems(cards);
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  })

function getCurrentCardElement(data) {
  const card = new Card(data, cardTemplateId, openPopupImage, userId, {
    handleLikeState: (item) => {
      api.toggleLikeButton(item._id, !card.isLiked())
        .then(data => {
          card.handleLikeButton(data);
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        })
    },
    handleDeletion: (item) => {
      popupConfirm.waitingResponse('Да');
      popupConfirm.setConfirmHandler(() => {
        api.deleteCard(item._data._id)
          .then(data => {
            popupConfirm.close();
            item.handleDeleteButton();
          })
          .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
          .finally(popupConfirm.waitingResponse('Удаление...'))
      });
      popupConfirm.open();
    },
  });
  return card.generateCard();
}

const initialCardsList = new Section({
  renderer: (item) => {
    const currentCardElement = getCurrentCardElement(item);
    return currentCardElement;
  }
}, cardsContainerSelector);

const userInfo = new UserInfo({
  nameSelector: nameSelector,
  activitySelector: activitySelector,
});

const popupWithImage = new PopupWithImage(popupImageSelector);

const popupEdit = new PopupWithForm({
  submitHandler: (objectValues) => {
    api.setUserInfo(objectValues)
      .then(userDataInfo => {
        userInfo.setInfo(userDataInfo);
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(popupEdit.waitingResponse('Сохранение...'))
  },
  popupSelector: popupProfileSelector,
});

const popupAdd = new PopupWithForm({
  submitHandler: (objectValues) => {
    api.addCard(objectValues)
      .then(data => {
        initialCardsList.addItem(getCurrentCardElement(data));
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(popupAdd.waitingResponse('Сохранение...'))
  },
  popupSelector: popupAddcardSelector,
});

const popupConfirm = new PopupWithConfirm(popupConfirmSelector);

const popupAddAvatar = new PopupWithForm({
  submitHandler: (objectValues) => {
    api.updateAvatar(objectValues)
      .then(data => {
        userInfo.setAvatarInfo(data);
        popupAddAvatar.close();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
      .finally(popupConfirm.waitingResponse('Сохранение...'))
  },
  popupSelector: popupAvatarSelector,
});

popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupConfirm.setEventListeners();
popupAddAvatar.setEventListeners();

buttonEdit.addEventListener('click', () => {
  formValidationEdit.disableSubmitButton();
  const previousUserInfo = userInfo.getUserInfo();
  nameInput.value = previousUserInfo.nameValue;
  activityInput.value = previousUserInfo.activityValue;
  popupEdit.waitingResponse('Сохранить');
  popupEdit.open();
});

buttonAdd.addEventListener('click', () => {
  formValidationAdd.disableSubmitButton();
  popupAdd.waitingResponse('Создать');
  popupAdd.open();
});

buttonAvatar.addEventListener('click', () => {
  formValidationAvatar.disableSubmitButton();
  popupAddAvatar.waitingResponse('Сохранить');
  popupAddAvatar.open();
})





