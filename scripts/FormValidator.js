class FormValidator {
  constructor(objectValidation, formElement) {
    this._objectValidation = objectValidation;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._objectValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._objectValidation.errorClass);
  }
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._objectValidation.inputErrorClass);
    errorElement.classList.remove(this._objectValidation.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  disableSubmitButton() {
    this._buttonElement.classList.add(this._objectValidation.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitBtn() {
    this._buttonElement.classList.remove(this._objectValidation.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitBtn();
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._objectValidation.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._objectValidation.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export { FormValidator };