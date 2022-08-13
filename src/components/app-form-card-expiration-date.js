const template = document.getElementById("template-app-form-card-expiration-date");

class AppFormCardExpirationDate extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.containerElement = template.content.firstElementChild.cloneNode(true);
    this.monthInputElement = this.containerElement.querySelector('[data-name="month-input"]');
    this.yearInputElement = this.containerElement.querySelector('[data-name="year-input"]');
    this.handleMonthInputKeyUp = this.handleMonthInputKeyUp.bind(this);
    this.handleYearInputKeyUp = this.handleYearInputKeyUp.bind(this);
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
    const monthFromInput = event.target.value;
    if (typeof monthFromInput === "string") {
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
}

export default AppFormCardExpirationDate;