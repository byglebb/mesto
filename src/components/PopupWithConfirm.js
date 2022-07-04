import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._confirmationDelete = this._formElement.querySelector('.popup__submit-button');
  }

  setConfirmHandler(callback) {
    this._handleConfirm = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleConfirm();
    })
  }
}