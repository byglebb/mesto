export default class UserInfo {
  constructor({ nameSelector, activitySelector }) {
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

  // setUserInfo(nameValue, activityValue) {
  //   this._nameElement.textContent = nameValue;
  //   this._activityElement.textContent = activityValue;
  // }

  setInfo(data) {
    this._nameElement.textContent = data.name;
    this._activityElement.textContent = data.about;
  }
}