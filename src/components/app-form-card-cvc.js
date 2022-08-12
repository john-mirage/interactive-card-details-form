const template = document.getElementById("template-app-form-card-cvc");

class AppFormCardCvc extends HTMLElement {
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

  disconnectedCallback() {
    this.inputElement.removeEventListener("keyup", this.handleInputKeyUp);
  }

  handleInputKeyUp(event) {
    const cardCvcFromInput = event.target.value;
    if (typeof cardCvcFromInput === "string") {
      const newCardCvc = this.computeCardCvc(cardCvcFromInput);
      const customEvent = new CustomEvent("update-card-cvc", {
        bubbles: true,
        detail: {
          cardCvc: newCardCvc,
        }
      });
      this.dispatchEvent(customEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  computeCardCvc(cardCvcFromInput) {
    if (typeof cardCvcFromInput === "string") {
      const emptyCardCvc = ["0", "0", "0"];
      const cardCvcAsArray = emptyCardCvc.map((char, charIndex) => {
        return cardCvcFromInput[charIndex] ? cardCvcFromInput[charIndex].toUpperCase() : char;
      });
      return cardCvcAsArray.join("");
    } else {
      throw new Error("invalid parameter");
    }
  }
}

export default AppFormCardCvc;