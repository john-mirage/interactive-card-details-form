const template = document.getElementById("template-app-form-card-expiration-date");

class AppFormCardExpirationDate extends HTMLElement {
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

export default AppFormCardExpirationDate;