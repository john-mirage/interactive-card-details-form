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
  }

  get isValid() {
    if (this.hasOwnProperty("_isValid")) {
      return this._isValid;
    } else {
      return false;
    }
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

  set isValid(isValid) {
    this._isValid = isValid;
  }

  set monthIsValid(monthIsValid) {
    this._monthIsValid = monthIsValid;
    if (this.monthIsValid) {
      if (this.monthInputBorderElement.classList.contains("before:bg-input-error")) this.monthInputBorderElement.classList.remove("before:bg-input-error");
      if (!this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.monthInputBorderElement.classList.add("before:bg-light-grayish-violet");
      if (this.appFormError.isConnected && this.yearIsValid) this.containerElement.removeChild(this.appFormError);
    } else {
      if (this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.monthInputBorderElement.classList.remove("before:bg-light-grayish-violet");
      if (!this.monthInputBorderElement.classList.contains("before:bg-input-error")) this.monthInputBorderElement.classList.add("before:bg-input-error");
      if (!this.appFormError.isConnected) this.containerElement.append(this.appFormError);
    }
    this.isValid = this.monthIsValid && this.yearIsValid;
  }

  set yearIsValid(yearIsValid) {
    this._yearIsValid = yearIsValid;
    if (this.yearIsValid) {
      if (this.yearInputBorderElement.classList.contains("before:bg-input-error")) this.yearInputBorderElement.classList.remove("before:bg-input-error");
      if (!this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.yearInputBorderElement.classList.add("before:bg-light-grayish-violet");
      if (this.appFormError.isConnected && this.monthIsValid) this.containerElement.removeChild(this.appFormError);
    } else {
      if (this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")) this.yearInputBorderElement.classList.remove("before:bg-light-grayish-violet");
      if (!this.yearInputBorderElement.classList.contains("before:bg-input-error")) this.yearInputBorderElement.classList.add("before:bg-input-error");
      if (!this.appFormError.isConnected) this.containerElement.append(this.appFormError);
    }
    this.isValid = this.monthIsValid && this.yearIsValid;
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

  computeCardExpirationDatePeriod(periodValue) {
    if (typeof periodValue === "string") {
      const emptyCardExpirationDatePeriod = ["0", "0"];
      const cardExpirationDatePeriodAsArray = emptyCardExpirationDatePeriod.map((char, charIndex) => {
        return periodValue[charIndex] ? periodValue[charIndex].toUpperCase() : char;
      });
      return cardExpirationDatePeriodAsArray.join("");
    } else {
      throw new Error("invalid parameter");
    }
  }

  handleMonthInputKeyUp(event) {
    const monthFromInput = event.target.value;
    if (typeof monthFromInput === "string") {
      this.validateMonthInput();
      const newMonth = this.computeCardExpirationDatePeriod(monthFromInput);
      const customEvent = new CustomEvent("update-card-expiration-date-month", {
        bubbles: true,
        detail: {
          month: newMonth,
        }
      });
      this.dispatchEvent(customEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  handleYearInputKeyUp(event) {
    const yearFromInput = event.target.value;
    if (typeof yearFromInput === "string") {
      this.validateYearInput();
      const newYear = this.computeCardExpirationDatePeriod(yearFromInput);
      const customEvent = new CustomEvent("update-card-expiration-date-year", {
        bubbles: true,
        detail: {
          year: newYear,
        }
      });
      this.dispatchEvent(customEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  validateMonthInput() {
    if (this.monthInputElement.validity.valid) {
      this.monthIsValid = true;
    } else {
      this.monthIsValid = false;
      if (this.monthInputElement.validity.valueMissing) {
        this.appFormError.message = "Can't be blank";
      } else if (this.monthInputElement.validity.tooShort) {
        this.appFormError.message = "Too short";
      } else if (this.monthInputElement.validity.patternMismatch) {
        this.appFormError.message = "Wrong format";
      }
    }
  }

  validateYearInput() {
    if (this.yearInputElement.validity.valid) {
      this.yearIsValid = true;
    } else {
      this.yearIsValid = false;
      if (this.yearInputElement.validity.valueMissing) {
        this.appFormError.message = "Can't be blank";
      } else if (this.yearInputElement.validity.tooShort) {
        this.appFormError.message = "Too short";
      } else if (this.yearInputElement.validity.patternMismatch) {
        this.appFormError.message = "Wrong format";
      }
    }
  }
}

export default AppFormCardExpirationDate;