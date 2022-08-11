const template = document.getElementById("template-app-root");

class AppRoot extends HTMLElement {
  constructor() {
    super();
    this.initialCall = true;
    this.mainElement = template.content.firstElementChild.cloneNode(true);
  }

  connectedCallback() {
    if (this.initialCall) {
      this.append(this.mainElement);
      this.initialCall = false;
    }
  }
}

export default AppRoot;