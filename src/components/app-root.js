class AppRoot extends HTMLElement {
  #initialCall = true;
  titleElement = document.createElement("h1");
  appCard = document.createElement("div", { is: "app-card" });
  appForm = document.createElement("form", { is: "app-form" });

  /**
   * @constructor.
   */
  constructor() {
    super();
    this.handleCardNumberUpdate = this.handleCardNumberUpdate.bind(this);
    this.handleCardHolderUpdate = this.handleCardHolderUpdate.bind(this);
    this.handleCardExpirationMonthUpdate = this.handleCardExpirationMonthUpdate.bind(this);
    this.handleCardExpirationYearUpdate = this.handleCardExpirationYearUpdate.bind(this);
    this.handleCardCvcUpdate = this.handleCardCvcUpdate.bind(this);
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("page__container");
      this.append(this.appCard, this.appForm);
      this.#initialCall = false;
    }
    this.addEventListener("update-card-number", this.handleCardNumberUpdate);
    this.addEventListener("update-card-holder", this.handleCardHolderUpdate);
    this.addEventListener("update-card-expiration-date-month", this.handleCardExpirationMonthUpdate);
    this.addEventListener("update-card-expiration-date-year", this.handleCardExpirationYearUpdate);
    this.addEventListener("update-card-cvc", this.handleCardCvcUpdate);
  }

  /**
   * Disconnected callback.
   */
  disconnectedCallback() {
    this.removeEventListener("update-card-number", this.handleCardNumberUpdate);
    this.removeEventListener("update-card-holder", this.handleCardHolderUpdate);
    this.removeEventListener("update-card-expiration-date-month", this.handleCardExpirationMonthUpdate);
    this.removeEventListener("update-card-expiration-date-year", this.handleCardExpirationYearUpdate);
    this.removeEventListener("update-card-cvc", this.handleCardCvcUpdate);
  }

  /**
   * Handle card number update.
   * 
   * @param {CustomEvent} customEvent.
   */
  handleCardNumberUpdate(customEvent) {
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

  /**
   * Handle card holder update.
   * 
   * @param {CustomEvent} customEvent.
   */
  handleCardHolderUpdate(customEvent) {
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

  /**
   * Handle card expiration month update.
   * 
   * @param {CustomEvent} customEvent.
   */
  handleCardExpirationMonthUpdate(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { cardExpirationMonth } = customEvent.detail;
      if (typeof cardExpirationMonth === "string") {
         this.appCard.appCardFront.cardExpirationMonth = cardExpirationMonth;
      } else {
        throw new Error("The card expiration month is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }

  /**
   * Handle card expiration year update.
   * 
   * @param {CustomEvent} customEvent.
   */
  handleCardExpirationYearUpdate(customEvent) {
    if (customEvent instanceof CustomEvent) {
      const { cardExpirationYear } = customEvent.detail;
      if (typeof cardExpirationYear === "string") {
         this.appCard.appCardFront.cardExpirationYear = cardExpirationYear;
      } else {
        throw new Error("The card expiration year is not a string");
      }
    } else {
      throw new Error("The parameter must be a custom event");
    }
  }

  /**
   * Handle card cvc update.
   * 
   * @param {CustomEvent} customEvent.
   */
  handleCardCvcUpdate(customEvent) {
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