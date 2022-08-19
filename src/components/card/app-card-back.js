import backgroundImage from "@images/bg-card-back.png";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

class AppCardBack extends HTMLDivElement {
  #initialCall = true;
  imageElement = document.createElement("img");
  svgElement = document.createElementNS(SVG_NAMESPACE, "svg");
  cvcElement = document.createElementNS(SVG_NAMESPACE, "text");

  constructor() {
    super();
  }

  get cardCvc() {
    if (this.hasOwnProperty("_cardCvc")) {
      return this._cardCvc;
    } else {
      return "000";
    }
  }

  set cardCvc(cardCvc) {
    if (typeof cardCvc === "string") {
      const cleanedCardCvc = cardCvc.replaceAll(/[^0-9]+/g, "");
      const emptyCardCvc = ["0", "0", "0"];
      const cardCvcAsArray = emptyCardCvc.map((char, charIndex) => {
        return cleanedCardCvc[charIndex] ? cleanedCardCvc[charIndex].toUpperCase() : char;
      });
      this._cardCvc = cardCvcAsArray.join("");
      this.cvcElement.textContent = this.cardCvc;
    } else {
      throw new Error("invalid parameter");
    }
  }

  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("card__back");
      this.imageElement.classList.add("card__image");
      this.svgElement.classList.add("card__overlay");
      this.cvcElement.classList.add("card__text", "card__text--body", "card__text--uppercase");
      this.imageElement.setAttribute("src", backgroundImage);
      this.imageElement.setAttribute("alt", "bank card back illustration");
      this.svgElement.setAttribute("viewbox", "0 0 447 245");
      this.cvcElement.setAttribute("x", "360");
      this.cvcElement.setAttribute("y", "126");
      this.svgElement.append(this.cvcElement);
      this.append(this.imageElement, this.svgElement);
      this.#initialCall = false;
    }
    this.cvcElement.textContent = this.cardCvc;
  }
}

export default AppCardBack;