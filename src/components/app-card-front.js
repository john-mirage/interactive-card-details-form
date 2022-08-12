const template = document.getElementById("template-app-card-front");

class AppCardFront extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.imageElement = template.content.firstElementChild.cloneNode(true);
    this.svgElement = template.content.lastElementChild.cloneNode(true);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.imageElement, this.svgElement);
      this.initialCall = false;
    }
  }
}

export default AppCardFront;