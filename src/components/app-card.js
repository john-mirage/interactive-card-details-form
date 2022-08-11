const template = document.getElementById("template-app-card");

class AppCard extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.backCard = template.content.firstElementChild.cloneNode(true);
    this.frontCard = template.content.lastElementChild.cloneNode(true);
    this.cardCvcElement = this.backCard.querySelector('[data-name="card-cvc"]');
    this.cardNumberElement = this.frontCard.querySelector('[data-name="card-number"]');
    this.cardHolderElement = this.frontCard.querySelector('[data-name="card-holder"]');
    this.cardExpirationDateElement = this.frontCard.querySelector('[data-name="card-expiration-data"]');
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.backCard, this.frontCard);
      this.initialCall = false;
    }
  }
}

export default AppCard;