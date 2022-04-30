const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_data_name');
const activityInput = formElement.querySelector('.popup__input_data_activity');
const infoName = document.querySelector('.profile__name');
const infoActivity = document.querySelector('.profile__activity');
//------------------------------------------------------------------
const popupAddCard = document.querySelector('.popup_addcard');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAddCard = popupAddCard.querySelector('.popup__close-button_addcard');
const formAddCardElement = document.querySelector('.popup__form_addcard');
const placeInput = formAddCardElement.querySelector('.popup__input_data_place');
const linkInput = formAddCardElement.querySelector('.popup__input_data_link');

const sectionElements = document.querySelector('.elements');

const popupImage = document.querySelector('.popup-image');
const popupImagePic = popupImage.querySelector('.popup-image__image');
const popupImageTitle = popupImage.querySelector('.popup-image__title');
const closeButtonImage = popupImage.querySelector('.popup-image__close-button');

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
    popupImage.alt = placeName;
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

function onDocumentKeyUp(event) {
  if (event.keyCode === 107) {
    openPopupAddCard();
  }
}

function formCreateHandler(evt) {
  evt.preventDefault();
  let currentPlaceInput = placeInput.value;
  let currentLinkInput = linkInput.value;
  addDefaultElement(currentLinkInput, currentPlaceInput);
  closePopup();
}

function openPopupImage () {
  popupImage.classList.add('popup_opened');
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);

initialCards.forEach(function (item) {
  let imageLink = item.link;
  let placeName = item.name;
  addDefaultElement(imageLink, placeName);
});

addButton.addEventListener('click', openPopupAddCard);
closeButtonAddCard.addEventListener('click', closePopup);
document.addEventListener('keyup', onDocumentKeyUp);

formAddCardElement.addEventListener('submit', formCreateHandler);

closeButtonImage.addEventListener('click', closePopup);



