export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(cards) {
    cards.forEach(item => {
      this._container.append(this._renderer(item));
    })
  }

  // renderItems() {
  //   this._items.forEach(item => {
  //     this._renderer(item);
  //   });
  // }

  // addItem(element) {
  //   this._container.prepend(this._renderer(element));
  // }
}