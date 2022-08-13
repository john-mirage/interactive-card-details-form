const template = document.getElementById("template-app-form-card-number");

class AppFormCardNumber extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.labelElement = template.content.firstElementChild.cloneNode(true);
    this.inputElement = this.labelElement.querySelector('[data-name="input"]');
    this.inputBorderElement = this.labelElement.querySelector('[data-name="input-border"]');
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.appFormError = document.createElement("app-form-error");
  }

  get isValid() {
    if (this.hasOwnProperty("_isValid")) {
      return this._isValid;
    } else {
      return true;
    }
  }

  set isValid(isValid) {
    const hasChanged = this.isValid !== isValid;
    if (hasChanged) {
      this._isValid = isValid;
      if (this.isValid) {
        this.inputBorderElement.classList.replace("before:bg-input-error", "before:bg-light-grayish-violet");
        this.labelElement.removeChild(this.appFormError);
      } else {
        this.inputBorderElement.classList.replace("before:bg-light-grayish-violet", "before:bg-input-error");
        this.labelElement.append(this.appFormError);
      }
    }
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.labelElement);
      this.initialCall = false;
    }
    this.inputElement.addEventListener("keyup", this.handleInputKeyUp);
    this.inputElement.addEventListener("change", this.handleInputChange);
  }

  disconnectedCallback() {
    this.inputElement.removeEventListener("keyup", this.handleInputKeyUp);
    this.inputElement.removeEventListener("change", this.handleInputChange);
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

  handleInputKeyUp(event) {
    const number = event.target.value;
    if (typeof number === "string") {
      const newNumber = this.computeCardNumber(number);
      const customEvent = new CustomEvent("update-card-number", {
        bubbles: true,
        detail: {
          number: newNumber
        }
      });
      this.dispatchEvent(customEvent);
    } else {
      throw new Error("the event value is not a string");
    }
  }

  handleInputChange() {
    if (this.inputElement.validity.valid) {
      this.isValid = true;
    } else {
      this.isValid = false;
      if (this.inputElement.validity.valueMissing) {
        this.appFormError.message = "Can't be blank";
      } else if (this.inputElement.validity.tooShort) {
        this.appFormError.message = "Too short";
      } else if (this.inputElement.validity.patternMismatch) {
        this.appFormError.message = "Wrong format";
      }
      console.log(this.inputElement.validity);
    }
  }
}

export default AppFormCardNumber;