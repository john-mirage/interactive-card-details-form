class AppFormCardExpiration extends HTMLDivElement {
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

  constructor() {
    super();
    this.handleMonthInputKeyUp = this.handleMonthInputKeyUp.bind(this);
    this.handleYearInputKeyUp = this.handleYearInputKeyUp.bind(this);
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
    if (this.monthIsValid && this.monthInputElement.classList.contains("form__input--error")) {
      this.monthInputElement.classList.remove("form__input--error");
    } else if (!this.monthInputElement.classList.contains("form__input--error")) {
      this.monthInputElement.classList.add("form__input--error");
    }
  }

  set yearIsValid(yearIsValid) {
    this._yearIsValid = yearIsValid;
    if (this.yearIsValid && this.yearInputElement.classList.contains("form__input--error")) {
      this.yearInputElement.classList.remove("form__input--error");
    } else if (!this.yearInputElement.classList.contains("form__input--error")) {
      this.yearInputElement.classList.add("form__input--error");
    }
  }

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
      this.monthInputElement.setAttribute("name", "cardExpirationDateMonth");
      this.monthInputElement.setAttribute("placeholder", "mm");
      this.monthInputElement.setAttribute("required", "");
      this.monthInputElement.setAttribute("minlength", "2");
      this.monthInputElement.setAttribute("maxlength", "2");
      this.monthInputElement.setAttribute("pattern", "^0[0-9]$|^1[0-2]$");
      this.yearInputElement.setAttribute("type", "text");
      this.yearInputElement.setAttribute("name", "cardExpirationDateYear");
      this.yearInputElement.setAttribute("placeholder", "yy");
      this.yearInputElement.setAttribute("required", "");
      this.yearInputElement.setAttribute("minlength", "2");
      this.yearInputElement.setAttribute("maxlength", "2");
      this.yearInputElement.setAttribute("pattern", "^[2-9][2-9]$");
      this.titleElement.textContent = "exp. date (mm/yy)";
      this.monthTitleElement.textContent = "expiration date month";
      this.yearTitleElement.textContent = "expiration date year";
      this.monthLabelElement.append(this.monthTitleElement, this.monthInputElement, this.monthInputBorderElement);
      this.yearLabelElement.append(this.yearTitleElement, this.yearInputElement, this.yearInputBorderElement);
      this.rowElement.append(this.monthLabelElement, this.yearLabelElement);
      this.append(this.titleElement, this.rowElement);
      this.#initialCall = false;
    }
    this.monthInputElement.addEventListener("keyup", this.handleMonthInputKeyUp);
    this.yearInputElement.addEventListener("keyup", this.handleYearInputKeyUp);
  }

  disconnectedCallback() {
    this.monthInputElement.removeEventListener("keyup", this.handleMonthInputKeyUp);
    this.yearInputElement.removeEventListener("keyup", this.handleYearInputKeyUp);
  }

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