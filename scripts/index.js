let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_data_name');
let activityInput = formElement.querySelector('.popup__input_data_activity');
let infoName = document.querySelector('.profile__name');
let infoActivity = document.querySelector('.profile__activity');

function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.value = infoName.textContent;
  activityInput.value = infoActivity.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup();
}

// function fillingFormFromProfile() {
//   nameInput.setAttribute('value', infoName.textContent);
//   activityInput.setAttribute('value', infoActivity.textContent);
// }

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
// formElement.addEventListener('submit', closePopup);

// editButton.addEventListener('click', fillingFormFromProfile);

