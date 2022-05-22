const popupProfile = document.querySelector('.popup_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseProfile = popupProfile.querySelector('.popup__close-button_profile');
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = formProfile.querySelector('.popup__input_data_name');
const activityInput = formProfile.querySelector('.popup__input_data_activity');
const infoName = document.querySelector('.profile__name');
const infoActivity = document.querySelector('.profile__activity');
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
const elementTemplate = document.querySelector('#default-element').content.querySelector('.element');

const overlayProfile = popupProfile.querySelector('.popup__overlay_profile');
const overlayAddcard = popupAddCard.querySelector('.popup__overlay_addcard');
const overlayImage = popupImage.querySelector('.popup__overlay_image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', onPopupKeyUp);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', onPopupKeyUp);
}

function submitHandler(evt) {
  evt.preventDefault();
  infoName.textContent = nameInput.value;
  infoActivity.textContent = activityInput.value;
  closePopup(popupProfile);
}

function addDefaultElement(imageLink, placeName) {
  const currentElement = elementTemplate.cloneNode(true);
  const elementImage = currentElement.querySelector('.element__image');
  elementImage.src = imageLink;
  elementImage.alt = placeName;
  elementImage.addEventListener('click', (evt) => {
    popupImagePic.src = imageLink;
    popupImagePic.alt = placeName;
    popupImageTitle.textContent = placeName;
    openPopup(popupImage);
  });
  currentElement.querySelector('.element__place').textContent = placeName;
  currentElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  currentElement.querySelector('.element__delete-button').addEventListener('click', () => {
    currentElement.remove();
  });
  return currentElement;
}

function pasteElement(element) {
  sectionElements.prepend(element);
}

function createHandler(evt) {
  evt.preventDefault();
  const currentPlaceInput = placeInput.value;
  const currentLinkInput = linkInput.value;
  const insertElement = addDefaultElement(currentLinkInput, currentPlaceInput);
  pasteElement(insertElement);
  closePopup(popupAddCard);
}

function onPopupKeyUp(event) {
  const keyForEvent = "Escape";
  if (event.key === keyForEvent) {
    closePopup(popupProfile);
    closePopup(popupAddCard);
    closePopup(popupImage);
  }
}

// function closePopupByOverlay(popup) {
//   closePopup(popup);
// }

buttonEdit.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  activityInput.value = infoActivity.textContent;
  openPopup(popupProfile);
});
buttonCloseProfile.addEventListener('click', () => closePopup(popupProfile));
formProfile.addEventListener('submit', submitHandler);

initialCards.forEach(function (item) {
  const imageLink = item.link;
  const placeName = item.name;
  pasteElement(addDefaultElement(imageLink, placeName));
});

buttonAdd.addEventListener('click', () => {
  placeInput.value = "";
  linkInput.value = "";
  openPopup(popupAddCard);
});
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
formAddCardElement.addEventListener('submit', createHandler);

buttonCloseImage.addEventListener('click', () => closePopup(popupImage));

overlayProfile.addEventListener('click', () => closePopup(popupProfile));
overlayAddcard.addEventListener('click', () => closePopup(popupAddCard));
overlayImage.addEventListener('click' , () => closePopup(popupImage));



