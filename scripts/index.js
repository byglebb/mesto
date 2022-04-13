const popupElement = document.querySelector('.popup');
const addButton = document.querySelector('.profile__profile-info_button');
const closeButton = popupElement.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let activityInput = formElement.querySelector('.popup__activity');
let infoName = document.querySelector('.profile__profile-info_name');
let infoActivity = document.querySelector('.profile__profile-info_activity');

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

addButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
