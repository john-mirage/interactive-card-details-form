class AppFormCardExpiration extends HTMLDivElement {
  #initialCall = true;
  sectionElement = document.createElement("div");
  titleElement = document.createElement("div");
  rowElement = document.createElement("div");
  labelMonthElement = document.createElement("label");
  titleMonthElement = document.createElement("span");
  inputMonthElement = document.createElement("input");
  inputBorderMonthElement = document.createElement("span");
  labelYearElement = document.createElement("label");
  titleYearElement = document.createElement("span");
  inputYearElement = document.createElement("input");
  inputBorderYearElement = document.createElement("span");
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
    if (this.#initialCall) {
      this.sectionElement.classList.add("form__section", "form__section--row");
      this.titleElement.classList.add("form__title");
      this.rowElement.classList.add("form__row");
      this.labelMonthElement.classList.add("form__input-container");
      this.titleMonthElement.classList.add("form__hidden-title");
      this.inputMonthElement.classList.add("form__input", "form__input--uppercase");
      this.inputBorderMonthElement.classList.add("form__input-border");
      this.labelYearElement.classList.add("form__input-container");
      this.titleYearElement.classList.add("form__hidden-title");
      this.inputYearElement.classList.add("form__input", "form__input--uppercase");
      this.inputBorderYearElement.classList.add("form__input-border");
      this.inputMonthElement.setAttribute("type", "text");
      this.inputMonthElement.setAttribute("name", "cardExpirationDateMonth");
      this.inputMonthElement.setAttribute("placeholder", "mm");
      this.inputMonthElement.setAttribute("required", "");
      this.inputMonthElement.setAttribute("minlength", "2");
      this.inputMonthElement.setAttribute("maxlength", "2");
      this.inputMonthElement.setAttribute("pattern", "^0[0-9]$|^1[0-2]$");
      this.inputYearElement.setAttribute("type", "text");
      this.inputYearElement.setAttribute("name", "cardExpirationDateYear");
      this.inputYearElement.setAttribute("placeholder", "yy");
      this.inputYearElement.setAttribute("required", "");
      this.inputYearElement.setAttribute("minlength", "2");
      this.inputYearElement.setAttribute("maxlength", "2");
      this.inputYearElement.setAttribute("pattern", "^[2-9][2-9]$");
      this.titleElement.textContent = "exp. date (mm/yy)";
      this.titleMonthElement.textContent = "expiration date month";
      this.titleYearElement.textContent = "expiration date year";
      this.labelMonthElement.append(this.titleMonthElement, this.inputMonthElement, this.inputBorderMonthElement);
      this.labelYearElement.append(this.titleYearElement, this.inputYearElement, this.inputBorderYearElement);
      this.rowElement.append(this.labelMonthElement, this.labelYearElement);
      this.sectionElement.append(this.titleElement, this.rowElement);
      this.append(this.sectionElement);
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

export default AppFormCardExpiration;