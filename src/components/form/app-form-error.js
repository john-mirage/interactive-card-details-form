class AppFormMessage extends HTMLParagraphElement {
  #initialCall = true;

  constructor() {
    super();
  }

  get message() {
    if (this.hasOwnProperty("_message")) {
      return this._message;
    } else {
      return "";
    }
  }

  set message(message) {
    this._message = message;
    this.textContent = this.message;
  }

  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("form__error");
      this.#initialCall = false;
    }
  }
}

export default AppFormMessage;