const template = document.getElementById("template-app-card-back");

class AppCardBack extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.imageElement = template.content.firstElementChild.cloneNode(true);
    this.svgElement = template.content.lastElementChild.cloneNode(true);
    this.cardCvcElement = this.svgElement.querySelector('[data-name="card-cvc"]');
  }

  get cardCvc() {
    if (this.hasOwnProperty("_cardCvc")) {
      return this._cardCvc;
    } else {
      return "000";
    }
  }

  set cardCvc(cardCvc) {
    this._cardCvc = cardCvc;
    this.cardCvcElement.textContent = this.cardCvc;
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.imageElement, this.svgElement);
      this.initialCall = false;
    }
    this.cardCvcElement.textContent = this.cardCvc;
  }
}

export default AppCardBack;