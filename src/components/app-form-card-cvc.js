const template = document.getElementById("template-app-form-card-cvc");

class AppFormCardCvc extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.labelElement = template.content.firstElementChild.cloneNode(true);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.labelElement);
      this.initialCall = false;
    }
  }
}

export default AppFormCardCvc;