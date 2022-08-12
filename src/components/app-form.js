const template = document.getElementById("template-app-form");

class AppForm extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.formElement = template.content.firstElementChild.cloneNode(true);
    this.buttonElement = this.formElement.querySelector('[data-name="button"]');
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.formElement);
      this.initialCall = false;
    }
  }
}

export default AppForm;
