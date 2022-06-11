import { classCloseButton, classOverlay } from './index.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    this._keyForEvent = "Escape";
    if (event.key === this._keyForEvent) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains(classCloseButton) || evt.target.classList.contains(classOverlay)) {
        this.close();
      }
    })
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }
}