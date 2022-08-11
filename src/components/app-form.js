const template = document.getElementById("template-app-form");

class AppForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.initialCall) {
      this.initialCall = false;
    }
  }
}

export default AppForm;