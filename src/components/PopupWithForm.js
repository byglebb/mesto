import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitHandler, popupSelector}) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._submitHandler = submitHandler;
    this._popupForm = this._popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}