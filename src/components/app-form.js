const template = document.getElementById("template-app-form");

class AppForm extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.formElement = template.content.firstElementChild.cloneNode(true);
    this.appFormCardHolder = this.formElement.querySelector("app-form-card-holder");
    this.appFormCardNumber = this.formElement.querySelector("app-form-card-number");
    this.appFormCardExpirationDate = this.formElement.querySelector("app-form-card-expiration-date");
    this.appFormCardCvc = this.formElement.querySelector("app-form-card-cvc");
    this.buttonElement = this.formElement.querySelector('[data-name="button"]');
    this.handleButton = this.handleButton.bind(this);
  }

  get isValid() {
    if (this.hasOwnProperty("_isValid")) {
      return this._isValid;
    } else {
      return false;
    }
  }

  set isValid(isValid) {
    this._isValid = isValid;
    if (this.isValid) {
      if (this.buttonElement.hasAttribute("disabled")) this.buttonElement.removeAttribute("disabled");
      if (this.buttonElement.classList.contains("bg-very-dark-violet/20")) this.buttonElement.classList.remove("bg-very-dark-violet/20");
      if (!this.buttonElement.classList.contains("bg-very-dark-violet")) this.buttonElement.classList.add("bg-very-dark-violet");
    } else {
      if (!this.buttonElement.hasAttribute("disabled")) this.buttonElement.setAttribute("disabled", "");
      if (this.buttonElement.classList.contains("bg-very-dark-violet")) this.buttonElement.classList.remove("bg-very-dark-violet");
      if (!this.buttonElement.classList.contains("bg-very-dark-violet/20")) this.buttonElement.classList.add("bg-very-dark-violet/20");
    }
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.formElement);
      this.initialCall = false;
    }
    this.addEventListener("update-form", this.handleButton);
  }

  disconnectedCallback() {
    this.removeEventListener("update-form", this.handleButton);
  }

  handleButton() {
    if (
      this.appFormCardHolder.isValid &&
      this.appFormCardNumber.isValid &&
      this.appFormCardCvc.isValid
    ) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}

export default AppForm;
