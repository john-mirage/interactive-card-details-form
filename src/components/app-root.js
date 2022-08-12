const template = document.getElementById("template-app-root");

class AppRoot extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.mainElement = template.content.firstElementChild.cloneNode(true);
    this.appCard = this.mainElement.querySelector("app-card");
    this.appForm = this.mainElement.querySelector("app-form");
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.handleCardCvc = this.handleCardCvc.bind(this);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.classList.add("block", "w-full");
      this.append(this.mainElement);
      this.initialCall = false;
    }
    this.addEventListener("update-card-number", this.handleCardNumber);
    this.addEventListener("update-card-cvc", this.handleCardCvc);
  }

  disconnectedCallback() {
    this.removeEventListener("update-card-number", this.handleCardNumber);
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