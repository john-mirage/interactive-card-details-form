const template = document.getElementById("template-app-form-card-expiration-date");

class AppFormCardExpirationDate extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.containerElement = template.content.firstElementChild.cloneNode(true);
    this.monthInputElement = this.containerElement.querySelector('[data-name="month-input"]');
    this.monthInputBorderElement = this.containerElement.querySelector('[data-name="month-input-border"]');
    this.yearInputElement = this.containerElement.querySelector('[data-name="year-input"]');
    this.yearInputBorderElement = this.containerElement.querySelector('[data-name="year-input-border"]');
    this.handleMonthInputKeyUp = this.handleMonthInputKeyUp.bind(this);
    this.handleYearInputKeyUp = this.handleYearInputKeyUp.bind(this);
    this.appFormError = document.createElement("app-form-error");
    this.isValid = false;
  }

  get monthIsValid() {
    if (this.hasOwnProperty("_monthIsValid")) {
      return this._monthIsValid;
    } else {
      return false;
    }
  }

  get yearIsValid() {
    if (this.hasOwnProperty("_yearIsValid")) {
      return this._yearIsValid;
    } else {
      return false;
    }
  }

  set monthIsValid(monthIsValid) {
    this._monthIsValid = monthIsValid;
    if (this.monthIsValid) {
      if (this.monthInputBorderElement.classList.contains("before:bg-input-error")) this.monthInputBorderElement.classList.remove("before:bg-input-error");
      if (!this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.monthInputBorderElement.classList.add("before:bg-light-grayish-violet");
    } else {
      if (this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.monthInputBorderElement.classList.remove("before:bg-light-grayish-violet");
      if (!this.monthInputBorderElement.classList.contains("before:bg-input-error")) this.monthInputBorderElement.classList.add("before:bg-input-error");
    }
  }

  set yearIsValid(yearIsValid) {
    this._yearIsValid = yearIsValid;
    if (this.yearIsValid) {
      if (this.yearInputBorderElement.classList.contains("before:bg-input-error")) this.yearInputBorderElement.classList.remove("before:bg-input-error");
      if (!this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.yearInputBorderElement.classList.add("before:bg-light-grayish-violet");
    } else {
      if (this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.yearInputBorderElement.classList.remove("before:bg-light-grayish-violet");
      if (!this.yearInputBorderElement.classList.contains("before:bg-input-error")) this.yearInputBorderElement.classList.add("before:bg-input-error");
    }
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.containerElement);
      this.initialCall = false;
    }
    this.monthInputElement.addEventListener("keyup", this.handleMonthInputKeyUp);
    this.yearInputElement.addEventListener("keyup", this.handleYearInputKeyUp);
  }

  disconnectedCallback() {
    this.monthInputElement.removeEventListener("keyup", this.handleMonthInputKeyUp);
    this.yearInputElement.removeEventListener("keyup", this.handleYearInputKeyUp);
  }

  handleMonthInputKeyUp(event) {
    const cardExpirationDateMonth = event.target.value;
    if (typeof cardExpirationDateMonth === "string") {
      this.validateInputs();
      const customEvent = new CustomEvent("update-card-expiration-date-month", {
        bubbles: true,
        detail: { cardExpirationDateMonth }
      });
      const formCustomEvent = new CustomEvent("update-form", { bubbles: true });
      this.dispatchEvent(customEvent);
      this.dispatchEvent(formCustomEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  handleYearInputKeyUp(event) {
    const cardExpirationDateYear = event.target.value;
    if (typeof cardExpirationDateYear === "string") {
      this.validateInputs();
      const customEvent = new CustomEvent("update-card-expiration-date-year", {
        bubbles: true,
        detail: { cardExpirationDateYear }
      });
      const formCustomEvent = new CustomEvent("update-form", { bubbles: true });
      this.dispatchEvent(customEvent);
      this.dispatchEvent(formCustomEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  validateInputs() {
    const monthInputIsValid = this.monthInputElement.validity.valid;
    const yearInputIsValid = this.yearInputElement.validity.valid;
    this.monthIsValid = monthInputIsValid;
    this.yearIsValid = yearInputIsValid;
    if (monthInputIsValid && yearInputIsValid) {
      if (this.appFormError.isConnected) this.containerElement.removeChild(this.appFormError);
      this.isValid = true;
    } else {
      if (!this.appFormError.isConnected) this.containerElement.append(this.appFormError);
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

export default AppFormCardExpirationDate;