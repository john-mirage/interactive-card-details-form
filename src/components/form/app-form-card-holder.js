class AppFormCardHolder extends HTMLLabelElement {
  #isValid;
  #initialCall = true;
  titleElement = document.createElement("span");
  inputContainerElement = document.createElement("span");
  inputElement = document.createElement("input");
  inputBorderElement = document.createElement("span");
  appFormError = document.createElement("p", { is: "app-form-error" });

  /**
   * @constructor.
   */
  constructor() {
    super();
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  /**
   * Get the state of the input.
   * 
   * @returns {boolean} The state of the input.
   */
  get isValid() {
    return this.#isValid === undefined ? false : this.#isValid;
  }

  /**
   * Set the state of the input.
   * 
   * @param {boolean} isValid - The state of the input.
   */
  set isValid(isValid) {
    this.#isValid = isValid;
    if (this.isValid) {
      if (this.inputElement.classList.contains("form__input--error")) this.inputElement.classList.remove("form__input--error");
      if (this.appFormError.isConnected) this.removeChild(this.appFormError);
    } else {
      if (!this.inputElement.classList.contains("form__input--error")) this.inputElement.classList.add("form__input--error");
      if (!this.appFormError.isConnected) this.append(this.appFormError);
    }
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("form__section");
      this.titleElement.classList.add("form__title");
      this.inputContainerElement.classList.add("form__input-container");
      this.inputElement.classList.add("form__input");
      this.inputBorderElement.classList.add("form__input-border");
      this.titleElement.textContent = "cardholder name";
      this.inputElement.setAttribute("type", "text");
      this.inputElement.setAttribute("name", "cardHolder");
      this.inputElement.setAttribute("placeholder", "e.g. Jane Appleseed");
      this.inputElement.setAttribute("required", "");
      this.inputElement.setAttribute("pattern", "^(?:[a-zA-Z]+ ){1,2}[a-zA-Z]+$");
      this.inputContainerElement.append(this.inputElement, this.inputBorderElement);
      this.append(this.titleElement, this.inputContainerElement);
      this.#initialCall = false;
    }
    this.inputElement.addEventListener("keyup", this.handleInputKeyUp);
  }

  /**
   * Disconnected callback.
   */
  disconnectedCallback() {
    this.inputElement.removeEventListener("keyup", this.handleInputKeyUp);
  }

  /**
   * Handle the input key up.
   * 
   * @param {KeyboardEvent} event - The event. 
   */
  handleInputKeyUp(event) {
    const holder = event.target.value;
    if (typeof holder === "string") {
      this.validateInput();
      const customEvent = new CustomEvent("update-card-holder", {
        bubbles: true,
        detail: { holder }
      });
      const formCustomEvent = new CustomEvent("update-form", { bubbles: true });
      this.dispatchEvent(customEvent);
      this.dispatchEvent(formCustomEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  /**
   * Validate the input.
   */
  validateInput() {
    if (this.inputElement.validity.valid) {
      this.isValid = true;
    } else {
      this.isValid = false;
      if (this.inputElement.validity.valueMissing) {
        this.appFormError.message = "Can't be blank";
      } else if (this.inputElement.validity.patternMismatch) {
        this.appFormError.message = "Wrong format, letters and spaces only";
      }
    }
  }
}

export default AppFormCardHolder;