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
    this._cardNumber = cardNumber;
    this.cardNumberElement.textContent = this.cardNumber;
  }

  set cardHolder(cardHolder) {
    this._cardHolder = cardHolder;
    this.cardHolderElement.textContent = this.cardHolder;
  }

  set cardExpirationDateMonth(month) {
    this._cardExpirationDateMonth = month;
    this.cardExpirationDateMonthElement.textContent = this.cardExpirationDateMonth;
  }

  set cardExpirationDateYear(year) {
    this._cardExpirationDateYear = year;
    this.cardExpirationDateYearElement.textContent = this.cardExpirationDateYear;
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