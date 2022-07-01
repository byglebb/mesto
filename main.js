(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardName=t,this._cardLink=n,this._templateSelector=r,this._handleCardClick=o}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike=this._element.querySelector(".element__like"),this._elementLike.addEventListener("click",(function(){e._handleLikeButton()})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleDeleteButton()})),this.elementImage.addEventListener("click",(function(){e._handleOpenImagePopup()}))}},{key:"_handleLikeButton",value:function(){this._elementLike.classList.toggle("element__like_active")}},{key:"_handleDeleteButton",value:function(){this._element.remove()}},{key:"_handleOpenImagePopup",value:function(){this._handleCardClick(this._cardName,this._cardLink)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this.elementImage=this._element.querySelector(".element__image"),this.elementPlace=this._element.querySelector(".element__place"),this._setEventListeners(),this.elementImage.src=this._cardLink,this.elementImage.alt=this._cardName,this.elementPlace.textContent=this._cardName,this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objectValidation=t,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._objectValidation.inputErrorClass),n.textContent=t,n.classList.add(this._objectValidation.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._objectValidation.inputErrorClass),t.classList.remove(this._objectValidation.errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._objectValidation.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitBtn",value:function(){this._buttonElement.classList.remove(this._objectValidation.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitBtn()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._objectValidation.inputSelector)),this._buttonElement=this._formElement.querySelector(this._objectValidation.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._container.append(t._renderer(e))}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){this._keyForEvent="Escape",e.key===this._keyForEvent&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-button")||t.target.classList.contains("popup__overlay"))&&e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImagePic=t._popupElement.querySelector(".popup__image"),t._popupImageTitle=t._popupElement.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e,t){p(d(a.prototype),"open",this).call(this),this._popupImagePic.src=t,this._popupImagePic.alt=e,this._popupImageTitle.textContent=e}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function k(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t,n=e.submitHandler,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,r))._submitHandler=n,t._popupForm=t._popupElement.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".popup__input"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.nameSelector,r=t.activitySelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._activityElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{nameValue:this._nameElement.textContent,activityValue:this._activityElement.textContent}}},{key:"setInfo",value:function(e){this._nameElement.textContent=e.name,this._activityElement.textContent=e.about}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers,this.authorization=this.headers.authorization}var t,n;return t=e,(n=[{key:"handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return this.urlCards=this.url+"/cards",fetch(this.urlCards,{headers:this.headers}).then(this.handleResponse)}},{key:"addCard",value:function(e){return fetch(this.urlCards,{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this.handleResponse)}},{key:"getUserInfo",value:function(){return this.urlInfo=this.url+"/users/me",fetch(this.urlInfo,{headers:this.headers}).then(this.handleResponse)}},{key:"setUserInfo",value:function(e){return console.log(e),fetch(this.urlInfo,{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this.handleResponse)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=document.querySelector(".profile__edit-button"),q=document.querySelector(".popup__form_profile"),R=q.querySelector(".popup__input_data_name"),V=q.querySelector(".popup__input_data_activity"),B=document.querySelector(".profile__add-button"),T=document.querySelector(".popup__form_addcard");new o(e,q).enableValidation();var x=new o(e,T);x.enableValidation();var A=new j({nameSelector:".profile__name",activitySelector:".profile__activity"});P.addEventListener("click",(function(){var e=A.getUserInfo();R.value=e.nameValue,V.value=e.activityValue,F.open()})),B.addEventListener("click",(function(){x.disableSubmitButton(),H.open()}));var D=new _(".popup_image");function U(e,t){D.open(e,t)}D.setEventListeners();var N=new I({url:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"a2bace0a-be7d-4cc4-8ecd-6f5d9788fa19","Content-Type":"application/json"}});N.getInitialCards(),N.getUserInfo();var F=new S({submitHandler:function(e){N.setUserInfo(e).then((function(e){A.setInfo(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))},popupSelector:".popup_profile"});F.setEventListeners();var H=new S({submitHandler:function(e){N.addCard(e).then((function(e){console.log(e),z.addItem(e)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}))},popupSelector:".popup_addcard"});H.setEventListeners(),Promise.all([N.getInitialCards(),N.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];A.setInfo(i),i._id,z.renderItems(o)})).catch((function(e){console.log("Ошибка. Запрос не выполнен: ",e)}));var z=new a({renderer:function(e){var t,r,o=(t=e.name,r=e.link,new n(t,r,"#default-element",U).generateCard());z.addItem(o)}},".elements")})();