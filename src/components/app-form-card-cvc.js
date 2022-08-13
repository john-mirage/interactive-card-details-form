const template = document.getElementById("template-app-form-card-cvc");

class AppFormCardCvc extends HTMLElement {
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

  handleInputKeyUp(event) {
    const cvc = event.target.value;
    if (typeof cvc === "string") {
      const newCvc = this.computeCardCvc(cvc);
      const customEvent = new CustomEvent("update-card-cvc", {
        bubbles: true,
        detail: {
          cvc: newCvc,
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

export default AppFormCardCvc;