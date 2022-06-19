export default class UserInfo {
  constructor({ nameSelector, activitySelector }) {
    // this._nameElement =  nameElement;
    // this._activityElement = activityElement;
    this._nameElement =  document.querySelector(nameSelector);
    this._activityElement = document.querySelector(activitySelector);
  }

  getUserInfo() {
    const userInfo = {
      nameValue: this._nameElement.textContent,
      activityValue: this._activityElement.textContent,
    }
    return userInfo;
  }

  setUserInfo(nameValue, activityValue) {
    // this._nameElement.textContent = nameElement.value;
    // this._activityElement.textContent = activityElement.value;
    this._nameElement.textContent = nameValue;
    this._activityElement.textContent = activityValue;
  }
}