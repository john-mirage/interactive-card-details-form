class AppFormCardNumber extends HTMLLabelElement {
  #initialCall = true;
  labelElement = document.createElement("label");
  titleElement = document.createElement("span");
  inputContainerElement = document.createElement("span");
  inputElement = document.createElement("input");
  inputBorderElement = document.createElement("span");
  appFormError = document.createElement("p", { is: "app-form-error" });

  constructor() {
    super();
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
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
      if (this.inputElement.classList.contains("form__input--error")) this.inputElement.classList.remove("form__input--error");
      if (this.appFormError.isConnected) this.removeChild(this.appFormError);
    } else {
      if (!this.inputElement.classList.contains("form__input--error")) this.inputElement.classList.add("form__input--error");
      if (!this.appFormError.isConnected) this.append(this.appFormError);
    }
  }

  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("form__section");
      this.titleElement.classList.add("form__title");
      this.inputContainerElement.classList.add("form__input-container");
      this.inputElement.classList.add("form__input");
      this.inputBorderElement.classList.add("form__input-border");
      this.titleElement.textContent = "card number";
      this.inputElement.setAttribute("type", "text");
      this.inputElement.setAttribute("name", "cardNumber");
      this.inputElement.setAttribute("placeholder", "e.g. 1234 5678 9123 0000");
      this.inputElement.setAttribute("required", "");
      this.inputElement.setAttribute("minlength", "19");
      this.inputElement.setAttribute("maxlength", "19");
      this.inputElement.setAttribute("pattern", "^(?:[0-9]{4} ){3}[0-9]{4}$");
      this.inputContainerElement.append(this.inputElement, this.inputBorderElement);
      this.append(this.titleElement, this.inputContainerElement);
      this.#initialCall = false;
    }
    this.inputElement.addEventListener("keyup", this.handleInputKeyUp);
  }

  disconnectedCallback() {
    this.inputElement.removeEventListener("keyup", this.handleInputKeyUp);
  }

  handleInputKeyUp(event) {
    const cardNumber = event.target.value;
    if (typeof cardNumber === "string") {
      this.validateInput();
      const customEvent = new CustomEvent("update-card-number", {
        bubbles: true,
        detail: { cardNumber }
      });
      const formCustomEvent = new CustomEvent("update-form", { bubbles: true });
      this.dispatchEvent(customEvent);
      this.dispatchEvent(formCustomEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  validateInput() {
    if (this.inputElement.validity.valid) {
      this.isValid = true;
    } else {
      this.isValid = false;
      if (this.inputElement.validity.valueMissing) {
        this.appFormError.message = "Can't be blank";
      } else if (this.inputElement.validity.tooShort) {
        this.appFormError.message = "Too short";
      } else if (this.inputElement.validity.tooLong) {
        this.appFormError.message = "Too long";
      } else if (this.inputElement.validity.patternMismatch) {
        this.appFormError.message = "Wrong format, numbers only";
      }
    }
  }
}

export default AppFormCardNumber;