const template = document.getElementById("template-app-card-front");

class AppCardFront extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.imageElement = template.content.firstElementChild.cloneNode(true);
    this.svgElement = template.content.lastElementChild.cloneNode(true);
    this.cardNumberElement = this.svgElement.querySelector('[data-name="card-number"]');
    this.cardHolderElement = this.svgElement.querySelector('[data-name="card-holder"]');
    this.cardExpirationDateMonthElement = this.svgElement.querySelector('[data-name="card-expiration-date-month"]');
    this.cardExpirationDateYearElement = this.svgElement.querySelector('[data-name="card-expiration-date-year"]');
  }

  get cardNumber() {
    if (this.hasOwnProperty("_cardNumber")) {
      return this._cardNumber;
    } else {
      return "0000 0000 0000 0000";
    }
  }

  get cardHolder() {
    if (this.hasOwnProperty("_cardHolder")) {
      return this._cardHolder;
    } else {
      return "jane appleseed";
    }
  }

  get cardExpirationDateMonth() {
    if (this.hasOwnProperty("_cardExpirationDateMonth")) {
      return this._cardExpirationDateMonth;
    } else {
      return "00";
    }
  }

  get cardExpirationDateYear() {
    if (this.hasOwnProperty("_cardExpirationDateYear")) {
      return this._cardExpirationDateYear;
    } else {
      return "00";
    }
  }

  set cardNumber(cardNumber) {
    if (typeof cardNumber === "string") {
      const cleanedCardNumber = cardNumber.replaceAll(/[^0-9]+/g, "");
      const emptyCardNumber = Array.from(["0", "0", "0", "0"], () => ["0", "0", "0", "0"]);
      const cardNumberAsArray = emptyCardNumber.map((group, groupIndex) => {
        return group.map((char, charIndex) => {
          const currentIndex = (groupIndex * 4) + charIndex;
          return cleanedCardNumber[currentIndex] ? cleanedCardNumber[currentIndex].toUpperCase() : char;
        });
      });
      this._cardNumber = cardNumberAsArray.reduce((cardNumberAsString, group, groupIndex) => {
        return `${cardNumberAsString}${groupIndex <= 0 ? "" : " "}${group.join("")}`;
      }, "");
      this.cardNumberElement.textContent = this.cardNumber;
    } else {
      throw new Error("invalid parameter");
    }
  }

  set cardHolder(cardHolder) {
    const cleanedCardHolder = cardHolder.length <= 0 ? "Jane Appleseed" : cardHolder.replaceAll(/[^a-zA-Z ]+/g, "").trim();
    this._cardHolder = cleanedCardHolder;
    this.cardHolderElement.textContent = this.cardHolder.length <= 0 ? "Jane Appleseed" : this.cardHolder;
  }

  set cardExpirationDateMonth(cardExpirationDateMonth) {
    if (typeof cardExpirationDateMonth === "string") {
      const cleanedCardExpirationDateMonth = cardExpirationDateMonth.replaceAll(/[^0-9]+/g, "");
      const emptyCardExpirationDatePeriod = ["0", "0"];
      const cardExpirationDatePeriodAsArray = emptyCardExpirationDatePeriod.map((char, charIndex) => {
        return cleanedCardExpirationDateMonth[charIndex] ? cleanedCardExpirationDateMonth[charIndex].toUpperCase() : char;
      });
      this._cardExpirationDateMonth = cardExpirationDatePeriodAsArray.join("");
      this.cardExpirationDateMonthElement.textContent = this.cardExpirationDateMonth;
    } else {
      throw new Error("invalid parameter");
    }
  }

  set cardExpirationDateYear(cardExpirationDateYear) {
    if (typeof cardExpirationDateYear === "string") {
      const cleanedCardExpirationDateYear = cardExpirationDateYear.replaceAll(/[^0-9]+/g, "");
      const emptyCardExpirationDatePeriod = ["0", "0"];
      const cardExpirationDatePeriodAsArray = emptyCardExpirationDatePeriod.map((char, charIndex) => {
        return cleanedCardExpirationDateYear[charIndex] ? cleanedCardExpirationDateYear[charIndex].toUpperCase() : char;
      });
      this._cardExpirationDateYear = cardExpirationDatePeriodAsArray.join("");
      this.cardExpirationDateYearElement.textContent = this.cardExpirationDateYear;
    } else {
      throw new Error("invalid parameter");
    }
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.imageElement, this.svgElement);
      this.initialCall = false;
    }
    this.cardNumberElement.textContent = this.cardNumber;
    this.cardHolderElement.textContent = this.cardHolder;
    this.cardExpirationDateMonthElement.textContent = this.cardExpirationDateMonth;
    this.cardExpirationDateYearElement.textContent = this.cardExpirationDateYear;
  }
}

export default AppCardFront;