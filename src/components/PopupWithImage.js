import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImagePic = this._popupElement.querySelector('.popup__image');
    this._popupImageTitle = this._popupElement.querySelector('.popup__title-image');
  }

  open(name, link) {
    super.open();
    this._popupImagePic.src = link;
    this._popupImagePic.alt = name;
    this._popupImageTitle.textContent = name;
  }
}