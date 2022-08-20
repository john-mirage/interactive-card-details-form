class AppFormCardExpiration extends HTMLDivElement {
  #monthIsValid;
  #yearIsValid;
  #initialCall = true;
  titleElement = document.createElement("div");
  rowElement = document.createElement("div");
  monthLabelElement = document.createElement("label");
  monthTitleElement = document.createElement("span");
  monthInputElement = document.createElement("input");
  monthInputBorderElement = document.createElement("span");
  yearLabelElement = document.createElement("label");
  yearTitleElement = document.createElement("span");
  yearInputElement = document.createElement("input");
  yearInputBorderElement = document.createElement("span");
  appFormError = document.createElement("p", { is: "app-form-error" });
  isValid = false;

  /**
   * @constructor.
   */
  constructor() {
    super();
    this.handleMonthInputKeyUp = this.handleMonthInputKeyUp.bind(this);
    this.handleYearInputKeyUp = this.handleYearInputKeyUp.bind(this);
  }

  /**
   * Get the month input validity state.
   * 
   * @returns {boolean} The month input validity state.
   */
  get monthIsValid() {
    return this.#monthIsValid === undefined ? false : this.#monthIsValid;
  }

  /**
   * Get the year input validity state.
   * 
   * @returns {boolean} The year input validity state.
   */
  get yearIsValid() {
    return this.#yearIsValid === undefined ? false : this.#yearIsValid;
  }

  /**
   * Set the month input validity state.
   * 
   * @param {boolean} monthIsValid - The month input validity state.
   */
  set monthIsValid(monthIsValid) {
    this.#monthIsValid = monthIsValid;
    if (this.monthIsValid) {
      if (this.monthInputElement.classList.contains("form__input--error")) this.monthInputElement.classList.remove("form__input--error");
    } else if (!this.monthInputElement.classList.contains("form__input--error")) {
      this.monthInputElement.classList.add("form__input--error");
    }
  }

  /**
   * Set the year input validity state.
   * 
   * @param {boolean} yearIsValid - The year input validity state.
   */
  set yearIsValid(yearIsValid) {
    this.#yearIsValid = yearIsValid;
    if (this.yearIsValid) {
      if (this.yearInputElement.classList.contains("form__input--error")) this.yearInputElement.classList.remove("form__input--error");
    } else if (!this.yearInputElement.classList.contains("form__input--error")) {
      this.yearInputElement.classList.add("form__input--error");
    }
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("form__section", "form__section--row");
      this.titleElement.classList.add("form__title");
      this.rowElement.classList.add("form__row");
      this.monthLabelElement.classList.add("form__input-container");
      this.monthTitleElement.classList.add("form__hidden-title");
      this.monthInputElement.classList.add("form__input", "form__input--uppercase");
      this.monthInputBorderElement.classList.add("form__input-border");
      this.yearLabelElement.classList.add("form__input-container");
      this.yearTitleElement.classList.add("form__hidden-title");
      this.yearInputElement.classList.add("form__input", "form__input--uppercase");
      this.yearInputBorderElement.classList.add("form__input-border");
      this.monthInputElement.setAttribute("type", "text");
      this.monthInputElement.setAttribute("name", "cardExpirationMonth");
      this.monthInputElement.setAttribute("placeholder", "mm");
      this.monthInputElement.setAttribute("required", "");
      this.monthInputElement.setAttribute("minlength", "2");
      this.monthInputElement.setAttribute("maxlength", "2");
      this.monthInputElement.setAttribute("pattern", "^0[0-9]$|^1[0-2]$");
      this.yearInputElement.setAttribute("type", "text");
      this.yearInputElement.setAttribute("name", "cardExpirationYear");
      this.yearInputElement.setAttribute("placeholder", "yy");
      this.yearInputElement.setAttribute("required", "");
      this.yearInputElement.setAttribute("minlength", "2");
      this.yearInputElement.setAttribute("maxlength", "2");
      this.yearInputElement.setAttribute("pattern", "^[2-9][2-9]$");
      this.titleElement.textContent = "exp. date (mm/yy)";
      this.monthTitleElement.textContent = "expiration month";
      this.yearTitleElement.textContent = "expiration year";
      this.monthLabelElement.append(this.monthTitleElement, this.monthInputElement, this.monthInputBorderElement);
      this.yearLabelElement.append(this.yearTitleElement, this.yearInputElement, this.yearInputBorderElement);
      this.rowElement.append(this.monthLabelElement, this.yearLabelElement);
      this.append(this.titleElement, this.rowElement);
      this.#initialCall = false;
    }
    this.monthInputElement.addEventListener("keyup", this.handleMonthInputKeyUp);
    this.yearInputElement.addEventListener("keyup", this.handleYearInputKeyUp);
  }

  /**
   * Disconnected callback.
   */
  disconnectedCallback() {
    this.monthInputElement.removeEventListener("keyup", this.handleMonthInputKeyUp);
    this.yearInputElement.removeEventListener("keyup", this.handleYearInputKeyUp);
  }

  /**
   * Handle the month input key up.
   * 
   * @param {KeyboardEvent} event - The event.
   */
  handleMonthInputKeyUp(event) {
    const cardExpirationMonth = event.target.value;
    if (typeof cardExpirationMonth === "string") {
      this.validateInputs();
      const customEvent = new CustomEvent("update-card-expiration-date-month", {
        bubbles: true,
        detail: { cardExpirationMonth }
      });
      const formCustomEvent = new CustomEvent("update-form", { bubbles: true });
      this.dispatchEvent(customEvent);
      this.dispatchEvent(formCustomEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  /**
   * Handle the year input key up.
   * 
   * @param {KeyboardEvent} event - The event.
   */
  handleYearInputKeyUp(event) {
    const cardExpirationYear = event.target.value;
    if (typeof cardExpirationYear === "string") {
      this.validateInputs();
      const customEvent = new CustomEvent("update-card-expiration-date-year", {
        bubbles: true,
        detail: { cardExpirationYear }
      });
      const formCustomEvent = new CustomEvent("update-form", { bubbles: true });
      this.dispatchEvent(customEvent);
      this.dispatchEvent(formCustomEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  /**
   * Validate the inputs.
   */
  validateInputs() {
    const monthInputIsValid = this.monthInputElement.validity.valid;
    const yearInputIsValid = this.yearInputElement.validity.valid;
    this.monthIsValid = monthInputIsValid;
    this.yearIsValid = yearInputIsValid;
    if (monthInputIsValid && yearInputIsValid) {
      if (this.appFormError.isConnected) this.removeChild(this.appFormError);
      this.isValid = true;
    } else {
      if (!this.appFormError.isConnected) this.append(this.appFormError);
      this.isValid = false;
      if (this.monthInputElement.validity.valueMissing || this.yearInputElement.validity.valueMissing) {
        this.appFormError.message = "Can't be blank";
      } else if (this.monthInputElement.validity.tooShort || this.yearInputElement.validity.tooShort) {
        this.appFormError.message = "Too short";
      } else if (this.monthInputElement.validity.patternMismatch || this.yearInputElement.validity.patternMismatch) {
        this.appFormError.message = "Wrong format, dates only";
      }
    }
  }
}

export default AppFormCardExpiration;