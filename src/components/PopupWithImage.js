import Popup from "./Popup.js";
import { popupImagePic, popupImageTitle } from '../pages/index.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    popupImagePic.src = link;
    popupImagePic.alt = name;
    popupImageTitle.textContent = name;
  }
}