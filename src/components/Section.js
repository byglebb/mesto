import { initialCards } from "../utils/constants";

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  // addItem(element) {
  //   this._container.prepend(this._renderer(element));
  // }

  // renderItems(cards) {
  //   this._initialCards = cards;
  //   this._initialCards.forEach((item) => {
  //     this._container.append(this._renderer(item));
  //   })
  // }
}