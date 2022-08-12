const template = document.getElementById("template-app-card-front");

class AppCardFront extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.imageElement = template.content.firstElementChild.cloneNode(true);
    this.svgElement = template.content.lastElementChild.cloneNode(true);
    this.cardNumberElement = this.svgElement.querySelector('[data-name="card-number"]');
  }

  get cardNumber() {
    if (this.hasOwnProperty("_cardNumber")) {
      return this._cardNumber;
    } else {
      return "0000 0000 0000 0000";
    }
  }

  set cardNumber(cardNumber) {
    this._cardNumber = cardNumber;
    this.cardNumberElement.textContent = this.cardNumber;
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.imageElement, this.svgElement);
      this.initialCall = false;
    }
    this.cardNumberElement.textContent = this.cardNumber;
  }
}

export default AppCardFront;