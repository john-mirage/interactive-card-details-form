const template = document.getElementById("template-app-form-card-number");

class AppFormCardNumber extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.labelElement = template.content.firstElementChild.cloneNode(true);
    this.inputElement = this.labelElement.querySelector('[data-name="input"]');
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.labelElement);
      this.initialCall = false;
    }
    this.inputElement.addEventListener("keyup", this.handleInputKeyUp);
  }

  handleInputKeyUp(event) {
    const cardNumberFromInput = event.target.value;
    if (typeof cardNumberFromInput === "string") {
      const newCardNumber = this.computeCardNumber(cardNumberFromInput);
      const customEvent = new CustomEvent("update-card-number", {
        bubbles: true,
        detail: {
          cardNumber: newCardNumber
        }
      });
      this.dispatchEvent(customEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  computeCardNumber(cardNumberFromInput) {
    if (typeof cardNumberFromInput === "string") {
      const emptyCardNumber = Array.from(["0", "0", "0", "0"], () => ["0", "0", "0", "0"]);
      const cardNumberAsArray = emptyCardNumber.map((group, groupIndex) => {
        return group.map((char, charIndex) => {
          const currentIndex = (groupIndex * 4) + charIndex;
          return cardNumberFromInput[currentIndex] ? cardNumberFromInput[currentIndex].toUpperCase() : char;
        });
      });
      return cardNumberAsArray.reduce((cardNumberAsString, group, groupIndex) => {
        return `${cardNumberAsString}${groupIndex <= 0 ? "" : " "}${group.join("")}`;
      }, "");
    } else {
      throw new Error("invalid parameter");
    }
  } 
}

export default AppFormCardNumber;