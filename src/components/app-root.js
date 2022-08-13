const template = document.getElementById("template-app-root");

class AppRoot extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.mainElement = template.content.firstElementChild.cloneNode(true);
    this.appCard = this.mainElement.querySelector("app-card");
    this.appForm = this.mainElement.querySelector("app-form");
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.handleCardHolder = this.handleCardHolder.bind(this);
    this.handleCardExpirationDateMonth = this.handleCardExpirationDateMonth.bind(this);
    this.handleCardExpirationDateYear = this.handleCardExpirationDateYear.bind(this);
    this.handleCardCvc = this.handleCardCvc.bind(this);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.classList.add("block", "w-full");
      this.append(this.mainElement);
      this.initialCall = false;
    }
    this.addEventListener("update-card-number", this.handleCardNumber);
    this.addEventListener("update-card-holder", this.handleCardHolder);
    this.addEventListener("update-card-expiration-date-month", this.handleCardExpirationDateMonth);
    this.addEventListener("update-card-expiration-date-year", this.handleCardExpirationDateYear);
    this.addEventListener("update-card-cvc", this.handleCardCvc);
  }

  disconnectedCallback() {
    this.removeEventListener("update-card-number", this.handleCardNumber);
    this.removeEventListener("update-card-holder", this.handleCardHolder);
    this.removeEventListener("update-card-expiration-date-month", this.handleCardExpirationDateMonth);
    this.removeEventListener("update-card-expiration-date-year", this.handleCardExpirationDateYear);
    this.removeEventListener("update-card-cvc", this.handleCardCvc);
  }

  handleCardNumber(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { cardNumber } = customEvent.detail;
      if (typeof cardNumber === "string") {
         this.appCard.appCardFront.cardNumber = cardNumber;
      } else {
        throw new Error("The card number is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }

  handleCardHolder(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { holder } = customEvent.detail;
      if (typeof holder === "string") {
         this.appCard.appCardFront.cardHolder = holder;
      } else {
        throw new Error("The card holder is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }

  handleCardExpirationDateMonth(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { cardExpirationDateMonth } = customEvent.detail;
      if (typeof cardExpirationDateMonth === "string") {
         this.appCard.appCardFront.cardExpirationDateMonth = cardExpirationDateMonth;
      } else {
        throw new Error("The card expiration date month is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }

  handleCardExpirationDateYear(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { cardExpirationDateYear } = customEvent.detail;
      if (typeof cardExpirationDateYear === "string") {
         this.appCard.appCardFront.cardExpirationDateYear = cardExpirationDateYear;
      } else {
        throw new Error("The card expiration date year is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }

  handleCardCvc(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { cardCvc } = customEvent.detail;
      if (typeof cardCvc === "string") {
         this.appCard.appCardBack.cardCvc = cardCvc;
      } else {
        throw new Error("The card cvc is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }
}

export default AppRoot;