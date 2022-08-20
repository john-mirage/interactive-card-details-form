import backgroundImage from "@images/bg-card-front.png";
import cardLogoImage from "@images/card-logo.svg";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

class AppCardFront extends HTMLDivElement {
  #cardNumber;
  #cardHolder;
  #cardExpirationMonth;
  #cardExpirationYear;
  #initialCall = true;
  imageElement = document.createElement("img");
  svgElement = document.createElementNS(SVG_NAMESPACE, "svg");
  svgImageElement = document.createElementNS(SVG_NAMESPACE, "image");
  numberElement = document.createElementNS(SVG_NAMESPACE, "text");
  holderElement = document.createElementNS(SVG_NAMESPACE, "text");
  expirationElement = document.createElementNS(SVG_NAMESPACE, "text");
  expirationMonthElement = document.createElementNS(SVG_NAMESPACE, "tspan");
  expirationYearElement = document.createElementNS(SVG_NAMESPACE, "tspan");

  /**
   * @constructor.
   */
  constructor() {
    super();
  }

  /**
   * Get the card number.
   * 
   * @returns {string} The card number.
   */
  get cardNumber() {
    return this.#cardNumber === null ? this.#cardNumber : "0000 0000 0000 0000";
  }

  /**
   * Get the card holder.
   * 
   * @returns {string} The card holder.
   */
  get cardHolder() {
    return this.#cardHolder === null ? this.#cardHolder : "jane appleseed";
  }

  /**
   * Get the card expiration month.
   * 
   * @returns {string} The card expiration month.
   */
  get cardExpirationMonth() {
    return this.#cardExpirationMonth === null ? this.#cardExpirationMonth : "00";
  }

  /**
   * Get the card expiration year.
   * 
   * @returns {string} The card expiration year.
   */
  get cardExpirationYear() {
    return this.#cardExpirationYear === null ? this.#cardExpirationYear : "00";
  }

  /**
   * Set the card number.
   * 
   * @param {string} cardNumber - The card number.
   */
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
      this.#cardNumber = cardNumberAsArray.reduce((cardNumberAsString, group, groupIndex) => {
        return `${cardNumberAsString}${groupIndex <= 0 ? "" : " "}${group.join("")}`;
      }, "");
      this.numberElement.textContent = this.cardNumber;
    } else {
      throw new Error("invalid parameter");
    }
  }

  /**
   * Set the card holder.
   * 
   * @param {string} cardHolder - The card holder.
   */
  set cardHolder(cardHolder) {
    const cleanedCardHolder = cardHolder.length <= 0 ? "Jane Appleseed" : cardHolder.replaceAll(/[^a-zA-Z ]+/g, "").trim();
    this.#cardHolder = cleanedCardHolder;
    this.holderElement.textContent = this.cardHolder.length <= 0 ? "Jane Appleseed" : this.cardHolder;
  }

  /**
   * Set the card expiration month.
   * 
   * @param {string} cardExpirationMonth - The card expiration month.
   */
  set cardExpirationMonth(cardExpirationMonth) {
    if (typeof cardExpirationMonth === "string") {
      const cleanedCardExpirationMonth = cardExpirationMonth.replaceAll(/[^0-9]+/g, "");
      const emptyCardExpirationPeriod = ["0", "0"];
      const cardExpirationPeriodAsArray = emptyCardExpirationPeriod.map((char, charIndex) => {
        return cleanedCardExpirationMonth[charIndex] ? cleanedCardExpirationMonth[charIndex].toUpperCase() : char;
      });
      this.#cardExpirationMonth = cardExpirationPeriodAsArray.join("");
      this.expirationMonthElement.textContent = this.cardExpirationMonth;
    } else {
      throw new Error("invalid parameter");
    }
  }

  /**
   * Set the card expiration year.
   * 
   * @param {string} cardExpirationYear - The card expiration year.
   */
  set cardExpirationYear(cardExpirationYear) {
    if (typeof cardExpirationYear === "string") {
      const cleanedCardExpirationYear = cardExpirationYear.replaceAll(/[^0-9]+/g, "");
      const emptyCardExpirationPeriod = ["0", "0"];
      const cardExpirationPeriodAsArray = emptyCardExpirationPeriod.map((char, charIndex) => {
        return cleanedCardExpirationYear[charIndex] ? cleanedCardExpirationYear[charIndex].toUpperCase() : char;
      });
      this.#cardExpirationYear = cardExpirationPeriodAsArray.join("");
      this.expirationYearElement.textContent = this.cardExpirationYear;
    } else {
      throw new Error("invalid parameter");
    }
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("card__front");
      this.imageElement.classList.add("card__image");
      this.svgElement.classList.add("card__overlay");
      this.numberElement.classList.add("card__text", "card__text--heading");
      this.holderElement.classList.add("card__text", "card__text--body", "card__text--uppercase");
      this.expirationElement.classList.add("card__text", "card__text--body");
      this.imageElement.setAttribute("src", backgroundImage);
      this.imageElement.setAttribute("alt", "bank card front illustration");
      this.svgElement.setAttribute("viewBox", "0 0 447 245");
      this.svgImageElement.setAttribute("x", "20");
      this.svgImageElement.setAttribute("y", "20");
      this.svgImageElement.setAttribute("href", cardLogoImage);
      this.svgImageElement.setAttribute("width", "84");
      this.svgImageElement.setAttribute("height", "47");
      this.numberElement.setAttribute("x", "20");
      this.numberElement.setAttribute("y", "164");
      this.holderElement.setAttribute("x", "20");
      this.holderElement.setAttribute("y", "214");
      this.expirationElement.setAttribute("x", "380");
      this.expirationElement.setAttribute("y", "214");
      this.expirationElement.append(this.expirationMonthElement, "/", this.expirationYearElement);
      this.svgElement.append(this.svgImageElement, this.numberElement, this.holderElement, this.expirationElement);
      this.append(this.imageElement, this.svgElement);
      this.#initialCall = false;
    }
    this.numberElement.textContent = this.cardNumber;
    this.holderElement.textContent = this.cardHolder;
    this.expirationMonthElement.textContent = this.cardExpirationMonth;
    this.expirationYearElement.textContent = this.cardExpirationYear;
  }
}

export default AppCardFront;