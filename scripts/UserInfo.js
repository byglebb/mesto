export default class UserInfo {
  constructor(nameSelector, activitySelector) {
    this._nameSelector = nameSelector;
    this._activitySelector = activitySelector;
  }

  getUserInfo() {
    const userInfo = {
      nameSelector: this._nameSelector.textContent,
      activitySelector: this._activitySelector.textContent,
    }
    return userInfo;
  }

  setUserInfo(nameSelector, activitySelector) {
    this._nameSelector.textContent = nameSelector.value;
    this._activitySelector.textContent = activitySelector.value;
  }
}