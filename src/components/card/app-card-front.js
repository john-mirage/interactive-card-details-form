const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

class AppCardFront extends HTMLDivElement {
  #initialCall = true;
  imageElement = document.createElement("img");
  svgElement = document.createElementNS(SVG_NAMESPACE, "svg");
  svgImageElement = document.createElementNS(SVG_NAMESPACE, "image");
  numberElement = document.createElementNS(SVG_NAMESPACE, "text");
  holderElement = document.createElementNS(SVG_NAMESPACE, "text");
  expirationElement = document.createElementNS(SVG_NAMESPACE, "text");
  expirationMonthElement = document.createElementNS(SVG_NAMESPACE, "tspan");
  expirationYearElement = document.createElementNS(SVG_NAMESPACE, "tspan");

  constructor() {
    super();
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
      this.numberElement.textContent = this.cardNumber;
    } else {
      throw new Error("invalid parameter");
    }
  }

  set cardHolder(cardHolder) {
    const cleanedCardHolder = cardHolder.length <= 0 ? "Jane Appleseed" : cardHolder.replaceAll(/[^a-zA-Z ]+/g, "").trim();
    this._cardHolder = cleanedCardHolder;
    this.holderElement.textContent = this.cardHolder.length <= 0 ? "Jane Appleseed" : this.cardHolder;
  }

  set cardExpirationDateMonth(cardExpirationDateMonth) {
    if (typeof cardExpirationDateMonth === "string") {
      const cleanedCardExpirationDateMonth = cardExpirationDateMonth.replaceAll(/[^0-9]+/g, "");
      const emptyCardExpirationDatePeriod = ["0", "0"];
      const cardExpirationDatePeriodAsArray = emptyCardExpirationDatePeriod.map((char, charIndex) => {
        return cleanedCardExpirationDateMonth[charIndex] ? cleanedCardExpirationDateMonth[charIndex].toUpperCase() : char;
      });
      this._cardExpirationDateMonth = cardExpirationDatePeriodAsArray.join("");
      this.expirationMonthElement.textContent = this.cardExpirationDateMonth;
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
      this.expirationYearElement.textContent = this.cardExpirationDateYear;
    } else {
      throw new Error("invalid parameter");
    }
  }

  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("card__front");
      this.imageElement.classList.add("card__image");
      this.svgElement.classList.add("card__overlay");
      this.numberElement.classList.add("card__text", "card__text--heading");
      this.holderElement.classList.add("card__text", "card__text--body", "card__text--uppercase");
      this.expirationElement.classList.add("card__text", "card__text--body");
      this.imageElement.setAttribute("src", "/src/images/bg-card-front.png");
      this.imageElement.setAttribute("alt", "bank card front illustration");
      this.svgElement.setAttribute("viewbox", "0 0 447 245");
      this.svgImageElement.setAttribute("x", "20");
      this.svgImageElement.setAttribute("y", "20");
      this.svgImageElement.setAttribute("href", "/src/images/card-logo.svg");
      this.svgImageElement.setAttribute("width", "84");
      this.svgImageElement.setAttribute("height", "47");
      this.numberElement.setAttribute("x", "20");
      this.numberElement.setAttribute("y", "164");
      this.holderElement.setAttribute("x", "20");
      this.holderElement.setAttribute("y", "214");
      this.expirationElement.setAttribute("x", "380");
      this.expirationElement.setAttribute("y", "214");
      this.expirationElement.append(this.expirationMonthElement, this.expirationYearElement);
      this.svgElement.append(this.svgImageElement, this.numberElement, this.holderElement, this.expirationElement);
      this.append(this.imageElement, this.svgElement);
      this.#initialCall = false;
    }
    this.cardNumberElement.textContent = this.cardNumber;
    this.cardHolderElement.textContent = this.cardHolder;
    this.cardExpirationDateMonthElement.textContent = this.cardExpirationDateMonth;
    this.cardExpirationDateYearElement.textContent = this.cardExpirationDateYear;
  }
}

export default AppCardFront;