const template = document.getElementById("template-app-form-error");

class AppFormMessage extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.paragraphElement = template.content.firstElementChild.cloneNode(true);
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
    this.paragraphElement.textContent = this.message;
  }

  connectedCallback() {
    if (this.initialCall) {
      this.classList.add("block");
      this.append(this.paragraphElement);
      this.initialCall = false;
    }
  }
}

export default AppFormMessage;