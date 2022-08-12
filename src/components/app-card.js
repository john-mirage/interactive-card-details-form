const template = document.getElementById("template-app-card");

class AppCard extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.appCardBack = template.content.firstElementChild.cloneNode(true);
    this.appCardFront = template.content.lastElementChild.cloneNode(true);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.appCardBack, this.appCardFront);
      this.initialCall = false;
    }
  }
}

export default AppCard;