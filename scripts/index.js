const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let activityInput = formElement.querySelector('.popup__activity');
let infoName = document.querySelector('.profile__name');
let infoActivity = document.querySelector('.profile__activity');

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
}

function fillingFormFromProfile() {
  nameInput.setAttribute('value', infoName.textContent);
  activityInput.setAttribute('value', infoActivity.textContent);
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);

editButton.addEventListener('click', fillingFormFromProfile);

