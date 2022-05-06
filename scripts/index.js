const popupElement = document.querySelector('.popup_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = popupElement.querySelector('.popup__close-button_profile');
const formElement = document.querySelector('.popup__form_profile');
const nameInput = formElement.querySelector('.popup__input_data_name');
const activityInput = formElement.querySelector('.popup__input_data_activity');
const infoName = document.querySelector('.profile__name');
const infoActivity = document.querySelector('.profile__activity');
//------------------------------------------------------------------
const popupAddCard = document.querySelector('.popup_addcard');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonCloseAddCard = popupAddCard.querySelector('.popup__close-button_addcard');
const formAddCardElement = document.querySelector('.popup__form_addcard');
const placeInput = formAddCardElement.querySelector('.popup__input_data_place');
const linkInput = formAddCardElement.querySelector('.popup__input_data_link');

const sectionElements = document.querySelector('.elements');

const popupImage = document.querySelector('.popup_image');
const popupImagePic = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__title-image');
const buttonCloseImage = popupImage.querySelector('.popup__close-button_image');

function openPopup() {
  nameInput.value = infoName.textContent;
  activityInput.value = infoActivity.textContent;
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
  popupAddCard.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup();
}

function addDefaultElement(imageLink, placeName) {
  const elementTemplate = document.querySelector('#default-element').content;
  const currentElement = elementTemplate.querySelector('.element').cloneNode(true);

  currentElement.querySelector('.element__image').src = imageLink;
  currentElement.querySelector('.element__image').alt = placeName;
  currentElement.querySelector('.element__image').addEventListener('click', (evt) => {
    popupImagePic.src = imageLink;
    popupImagePic.alt = placeName;
    popupImageTitle.textContent = placeName;
    openPopupImage();
  })
  currentElement.querySelector('.element__place').textContent = placeName;
  currentElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  currentElement.querySelector('.element__delete-button').addEventListener('click', () => {
    currentElement.remove();
  });

  sectionElements.prepend(currentElement);
}

function openPopupAddCard() {
  placeInput.value = "";
  linkInput.value = "";
  popupAddCard.classList.add('popup_opened');
}

// function onDocumentKeyUp(event) {
//   if (event.keyCode === 107) {
//     openPopupAddCard();
//   }
// }

function formCreateHandler(evt) {
  evt.preventDefault();
  const currentPlaceInput = placeInput.value;
  const currentLinkInput = linkInput.value;
  addDefaultElement(currentLinkInput, currentPlaceInput);
  closePopup();
}

function openPopupImage () {
  popupImage.classList.add('popup_opened');
}


buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);

initialCards.forEach(function (item) {
  const imageLink = item.link;
  const placeName = item.name;
  addDefaultElement(imageLink, placeName);
});

buttonAdd.addEventListener('click', openPopupAddCard);
buttonCloseAddCard.addEventListener('click', closePopup);
// document.addEventListener('keyup', onDocumentKeyUp);

formAddCardElement.addEventListener('submit', formCreateHandler);

buttonCloseImage.addEventListener('click', closePopup);



