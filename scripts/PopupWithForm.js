import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ createHandler, popupSelector}) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._createHandler = createHandler;
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
      this._createHandler(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}