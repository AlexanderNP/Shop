class HeaderModel {
  constructor() {
    if (HeaderModel.instance) {
      return HeaderModel.instance;
    }
    HeaderModel.instance = this;
    // Инициализация состояния header
    this.state = document.querySelector("[data-js-header]");
    return this;
  }

  // Получение состояния header
  getState() {
    return this.state;
  }

  // Обновление состояния header
  updateState(newState) {
    this.state = newState;
  }
}

export default HeaderModel;