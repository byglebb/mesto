export default class UserInfo {
  constructor({ nameElement, activityElement }) {
    // this._nameElement =  nameElement;
    // this._activityElement = activityElement;
    this._nameElement =  document.querySelector(nameElement);
    this._activityElement = document.querySelector(activityElement);
  }

  getUserInfo() {
    const userInfo = {
      nameElement: this._nameElement.textContent,
      activityElement: this._activityElement.textContent,
    }
    return userInfo;
  }

  setUserInfo(nameElement, activityElement) {
    // this._nameElement.textContent = nameElement.value;
    // this._activityElement.textContent = activityElement.value;
    this._nameElement.textContent = nameElement;
    this._activityElement.textContent = activityElement;
  }
}