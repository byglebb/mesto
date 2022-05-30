const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

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
x
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

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._objectValidation.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._objectValidation.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._objectValidation.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._objectValidation.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
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

export {enableValidation, FormValidator};

// function showInputError(formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorClass);
// }

// function hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// }

// function checkInputValidity(formElement, inputElement, { inputErrorClass, errorClass }) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, { inputErrorClass, errorClass });
//   } else {
//     hideInputError(formElement, inputElement, { inputErrorClass, errorClass });
//   }
// }

// function setEventListeners(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, { inactiveButtonClass });
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, { inputErrorClass, errorClass });
//       toggleButtonState(inputList, buttonElement, { inactiveButtonClass });
//     });
//   });
// }

// function enableValidation({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass });
//   });
// };

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// function toggleButtonState(inputList, buttonElement, { inactiveButtonClass }) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// }

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit-button',
//   inactiveButtonClass: 'popup__submit-button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active'
// });