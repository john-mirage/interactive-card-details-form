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

class AppForm extends HTMLFormElement {
  #isValid;
  #initialCall = true;
  appFormCardHolder = document.createElement("label", { is: "app-form-card-holder" });
  appFormCardNumber = document.createElement("label", { is: "app-form-card-number" });
  appFormCardExpirationDate = document.createElement("div", { is: "app-form-card-expiration" });
  appFormCardCvc = document.createElement("label", { is: "app-form-card-cvc" });
  buttonElement = document.createElement("button");
  formSuccessElement = document.createElement("div", { is: "app-form-success" });

  /**
   * @constructor.
   */
  constructor() {
    super();
    this.handleButtonState = this.handleButtonState.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /**
   * Get the state of the form validity.
   * 
   * @returns {boolean} The state of the form validity.
   */
  get isValid() {
    return this.#isValid === null ? this.#isValid : false;
  }

  /**
   * Set the state of the form validity.
   * 
   * @param {boolean} isValid - The state of the form validity.
   */
  set isValid(isValid) {
    this.#isValid = isValid;
    if (this.isValid) {
      if (this.buttonElement.hasAttribute("disabled")) this.buttonElement.removeAttribute("disabled");
      if (this.buttonElement.classList.contains("form__button--disabled")) this.buttonElement.classList.remove("form__button--disabled");
      if (!this.buttonElement.classList.contains("form__button--enabled")) this.buttonElement.classList.add("form__button--enabled");
    } else {
      if (!this.buttonElement.hasAttribute("disabled")) this.buttonElement.setAttribute("disabled", "");
      if (this.buttonElement.classList.contains("form__button--enabled")) this.buttonElement.classList.remove("form__button--enabled");
      if (!this.buttonElement.classList.contains("form__button--disabled")) this.buttonElement.classList.add("form__button--disabled");
    }
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("form");
      this.buttonElement.classList.add("form__button", "form__button--disabled");
      this.buttonElement.setAttribute("type", "button");
      this.buttonElement.setAttribute("disabled", "");
      this.buttonElement.textContent = "Confirm";
      this.append(
        this.appFormCardHolder,
        this.appFormCardNumber,
        this.appFormCardExpirationDate,
        this.appFormCardCvc,
        this.buttonElement
      );
      this.#initialCall = false;
    }
    this.addEventListener("update-form", this.handleButtonState);
    this.buttonElement.addEventListener("click", this.handleButtonClick);
  }

  /**
   * Disconnected callback.
   */
  disconnectedCallback() {
    this.removeEventListener("update-form", this.handleButtonState);
    this.buttonElement.removeEventListener("click", this.handleButtonClick);
  }

  /**
   * Handle the button state.
   */
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

  /**
   * Handle button click.
   */
  handleButtonClick() {
    const fadeOut = this.animate(fadeOutAndTranslateXAnimation, fadeAndTranslateXAnimationTiming);
    fadeOut.onfinish = () => {
      this.replaceChildren(this.formSuccessElement);
      this.formSuccessElement.animate(fadeInAndTranslateXAnimation, fadeAndTranslateXAnimationTiming);
    };
  }
}

export default AppForm;
