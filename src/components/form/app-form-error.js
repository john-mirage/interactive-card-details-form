class AppFormMessage extends HTMLParagraphElement {
  #message;
  #initialCall = true;

  /**
   * @constructor.
   */
  constructor() {
    super();
  }

  /**
   * Get the message.
   * 
   * @returns {string} The message.
   */
  get message() {
    return this.#message === undefined ? "" : this.#message;
  }

  /**
   * Set the message.
   * 
   * @param {string} message - The message.
   */
  set message(message) {
    this.#message = message;
    this.textContent = this.message;
  }

  /**
   * Connected callback.
   */
  connectedCallback() {
    if (this.#initialCall) {
      this.classList.add("form__error");
      this.#initialCall = false;
    }
  }
}

export default AppFormMessage;