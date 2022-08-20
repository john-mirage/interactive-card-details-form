class AppCard extends HTMLDivElement {
  #initialCall = true;
  appCardBack = document.createElement("div", { is: "app-card-back" });
  appCardFront = document.createElement("div", { is: "app-card-front" });

  /**
   * @constructor.
   */
  constructor() {
    super();
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("card");
      this.append(this.appCardBack, this.appCardFront);
      this.#initialCall = false;
    }
  }
}

export default AppCard;