let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_data_name');
let activityInput = formElement.querySelector('.popup__input_data_activity');
let infoName = document.querySelector('.profile__name');
let infoActivity = document.querySelector('.profile__activity');
//------------------------------------------------------------------
const popupAddCard = document.querySelector('.popup_addcard');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAddCard = popupAddCard.querySelector('.popup__close-button_addcard');

const sectionElements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup() {
  nameInput.value = infoName.textContent;
  activityInput.value = infoActivity.textContent;
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
  popupAddCard.classList.remove('popup_opened'); //
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
//------------------------------------------------------------------------

function addDefaultElement(imageLink, placeName) { //add input arguments
  const elementTemplate = document.querySelector('#default-element').content;
  const currentElement = elementTemplate.querySelector('.element').cloneNode(true);

  currentElement.querySelector('.element__image').src = imageLink;
  currentElement.querySelector('.element__image').alt = placeName;
  currentElement.querySelector('.element__place').textContent = placeName;

  sectionElements.append(currentElement);
}

initialCards.forEach(function (item) {
  let imageLink = item.link;
  let placeName = item.name;
  addDefaultElement(imageLink, placeName);
});

function openPopupAddCard () {
  popupAddCard.classList.add('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
}

function onDocumentKeyUp(event) {
  if (event.key === "Add") {
    openPopupAddCard ();
  }
}

addButton.addEventListener('click', openPopupAddCard);
closeButtonAddCard.addEventListener('click', closePopup);
document.addEventListener('keyup', onDocumentKeyUp);

