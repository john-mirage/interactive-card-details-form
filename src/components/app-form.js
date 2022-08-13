const formTemplate = document.getElementById("template-app-form");
const successTemplate = document.getElementById("template-app-success");

export const fadeInAndTranslateXAnimation = [
  { opacity: 0, transform: "translateX(4rem)", offset: 0 },
  { opacity: 1, transform: "translateX(0)", offset: 1 }
];

export const fadeOutAndTranslateXAnimation = [
  { opacity: 1, transform: "translateX(0)", offset: 0 },
  { opacity: 0, transform: "translateX(-4rem)", offset: 1 }
];

export const fadeAndTranslateXAnimationTiming = {
  duration: 300,
  easing: "ease-in-out",
}

class AppForm extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.formElement = formTemplate.content.firstElementChild.cloneNode(true);
    this.successElement = successTemplate.content.firstElementChild.cloneNode(true);
    this.appFormCardHolder = this.formElement.querySelector("app-form-card-holder");
    this.appFormCardNumber = this.formElement.querySelector("app-form-card-number");
    this.appFormCardExpirationDate = this.formElement.querySelector("app-form-card-expiration-date");
    this.appFormCardCvc = this.formElement.querySelector("app-form-card-cvc");
    this.buttonElement = this.formElement.querySelector('[data-name="button"]');
    this.handleButtonState = this.handleButtonState.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
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
    this.addEventListener("update-form", this.handleButtonState);
    this.buttonElement.addEventListener("click", this.handleButtonClick);
  }

  disconnectedCallback() {
    this.removeEventListener("update-form", this.handleButtonState);
    this.buttonElement.removeEventListener("click", this.handleButtonClick);
  }

  handleButtonState() {
    if (
      this.appFormCardHolder.isValid &&
      this.appFormCardNumber.isValid &&
      this.appFormCardExpirationDate.isValid &&
      this.appFormCardCvc.isValid
    ) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  handleButtonClick() {
    const fadeOut = this.formElement.animate(fadeOutAndTranslateXAnimation, fadeAndTranslateXAnimationTiming);
    fadeOut.onfinish = () => {
      this.replaceChildren(this.successElement);
      this.successElement.animate(fadeInAndTranslateXAnimation, fadeAndTranslateXAnimationTiming);
    };
  }
}

export default AppForm;
