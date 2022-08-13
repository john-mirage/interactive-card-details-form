(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const l=document.getElementById("template-app-root");class u extends HTMLElement{constructor(){super(),this.initialCall=!0,this.titleElement=l.content.firstElementChild.cloneNode(!0),this.mainElement=l.content.lastElementChild.cloneNode(!0),this.appCard=this.mainElement.querySelector("app-card"),this.appForm=this.mainElement.querySelector("app-form"),this.handleCardNumber=this.handleCardNumber.bind(this),this.handleCardHolder=this.handleCardHolder.bind(this),this.handleCardExpirationDateMonth=this.handleCardExpirationDateMonth.bind(this),this.handleCardExpirationDateYear=this.handleCardExpirationDateYear.bind(this),this.handleCardCvc=this.handleCardCvc.bind(this)}connectedCallback(){this.initialCall&&(this.classList.add("block","w-full"),this.append(this.titleElement,this.mainElement),this.initialCall=!1),this.addEventListener("update-card-number",this.handleCardNumber),this.addEventListener("update-card-holder",this.handleCardHolder),this.addEventListener("update-card-expiration-date-month",this.handleCardExpirationDateMonth),this.addEventListener("update-card-expiration-date-year",this.handleCardExpirationDateYear),this.addEventListener("update-card-cvc",this.handleCardCvc)}disconnectedCallback(){this.removeEventListener("update-card-number",this.handleCardNumber),this.removeEventListener("update-card-holder",this.handleCardHolder),this.removeEventListener("update-card-expiration-date-month",this.handleCardExpirationDateMonth),this.removeEventListener("update-card-expiration-date-year",this.handleCardExpirationDateYear),this.removeEventListener("update-card-cvc",this.handleCardCvc)}handleCardNumber(e){if(e instanceof CustomEvent){const{cardNumber:t}=e.detail;if(typeof t=="string")this.appCard.appCardFront.cardNumber=t;else throw new Error("The card number is not a string")}else throw new Error("The parameter must be a custom event")}handleCardHolder(e){if(e instanceof CustomEvent){const{holder:t}=e.detail;if(typeof t=="string")this.appCard.appCardFront.cardHolder=t;else throw new Error("The card holder is not a string")}else throw new Error("The parameter must be a custom event")}handleCardExpirationDateMonth(e){if(e instanceof CustomEvent){const{cardExpirationDateMonth:t}=e.detail;if(typeof t=="string")this.appCard.appCardFront.cardExpirationDateMonth=t;else throw new Error("The card expiration date month is not a string")}else throw new Error("The parameter must be a custom event")}handleCardExpirationDateYear(e){if(e instanceof CustomEvent){const{cardExpirationDateYear:t}=e.detail;if(typeof t=="string")this.appCard.appCardFront.cardExpirationDateYear=t;else throw new Error("The card expiration date year is not a string")}else throw new Error("The parameter must be a custom event")}handleCardCvc(e){if(e instanceof CustomEvent){const{cardCvc:t}=e.detail;if(typeof t=="string")this.appCard.appCardBack.cardCvc=t;else throw new Error("The card cvc is not a string")}else throw new Error("The parameter must be a custom event")}}const d=document.getElementById("template-app-card");class E extends HTMLElement{constructor(){super(),this.initialCall=!0,this.appCardBack=d.content.firstElementChild.cloneNode(!0),this.appCardFront=d.content.lastElementChild.cloneNode(!0)}connectedCallback(){this.initialCall&&(this.append(this.appCardBack,this.appCardFront),this.initialCall=!1)}}const h=document.getElementById("template-app-card-back");class f extends HTMLElement{constructor(){super(),this.initialCall=!0,this.imageElement=h.content.firstElementChild.cloneNode(!0),this.svgElement=h.content.lastElementChild.cloneNode(!0),this.cardCvcElement=this.svgElement.querySelector('[data-name="card-cvc"]')}get cardCvc(){return this.hasOwnProperty("_cardCvc")?this._cardCvc:"000"}set cardCvc(e){if(typeof e=="string"){const n=["0","0","0"].map((i,r)=>e[r]?e[r].toUpperCase():i);this._cardCvc=n.join(""),this.cardCvcElement.textContent=this.cardCvc}else throw new Error("invalid parameter")}connectedCallback(){this.initialCall&&(this.append(this.imageElement,this.svgElement),this.initialCall=!1),this.cardCvcElement.textContent=this.cardCvc}}const p=document.getElementById("template-app-card-front");class b extends HTMLElement{constructor(){super(),this.initialCall=!0,this.imageElement=p.content.firstElementChild.cloneNode(!0),this.svgElement=p.content.lastElementChild.cloneNode(!0),this.cardNumberElement=this.svgElement.querySelector('[data-name="card-number"]'),this.cardHolderElement=this.svgElement.querySelector('[data-name="card-holder"]'),this.cardExpirationDateMonthElement=this.svgElement.querySelector('[data-name="card-expiration-date-month"]'),this.cardExpirationDateYearElement=this.svgElement.querySelector('[data-name="card-expiration-date-year"]')}get cardNumber(){return this.hasOwnProperty("_cardNumber")?this._cardNumber:"0000 0000 0000 0000"}get cardHolder(){return this.hasOwnProperty("_cardHolder")?this._cardHolder:"jane appleseed"}get cardExpirationDateMonth(){return this.hasOwnProperty("_cardExpirationDateMonth")?this._cardExpirationDateMonth:"00"}get cardExpirationDateYear(){return this.hasOwnProperty("_cardExpirationDateYear")?this._cardExpirationDateYear:"00"}set cardNumber(e){if(typeof e=="string"){const n=Array.from(["0","0","0","0"],()=>["0","0","0","0"]).map((i,r)=>i.map((s,c)=>{const o=r*4+c;return e[o]?e[o].toUpperCase():s}));this._cardNumber=n.reduce((i,r,s)=>`${i}${s<=0?"":" "}${r.join("")}`,""),this.cardNumberElement.textContent=this.cardNumber}else throw new Error("invalid parameter")}set cardHolder(e){this._cardHolder=e,this.cardHolderElement.textContent=this.cardHolder}set cardExpirationDateMonth(e){if(typeof e=="string"){const n=["0","0"].map((i,r)=>e[r]?e[r].toUpperCase():i);this._cardExpirationDateMonth=n.join(""),this.cardExpirationDateMonthElement.textContent=this.cardExpirationDateMonth}else throw new Error("invalid parameter")}set cardExpirationDateYear(e){if(typeof e=="string"){const n=["0","0"].map((i,r)=>e[r]?e[r].toUpperCase():i);this._cardExpirationDateYear=n.join(""),this.cardExpirationDateYearElement.textContent=this.cardExpirationDateYear}else throw new Error("invalid parameter")}connectedCallback(){this.initialCall&&(this.append(this.imageElement,this.svgElement),this.initialCall=!1),this.cardNumberElement.textContent=this.cardNumber,this.cardHolderElement.textContent=this.cardHolder,this.cardExpirationDateMonthElement.textContent=this.cardExpirationDateMonth,this.cardExpirationDateYearElement.textContent=this.cardExpirationDateYear}}const v=document.getElementById("template-app-form"),C=document.getElementById("template-app-success"),y=[{opacity:0,transform:"translateX(4rem)",offset:0},{opacity:1,transform:"translateX(0)",offset:1}],g=[{opacity:1,transform:"translateX(0)",offset:0},{opacity:0,transform:"translateX(-4rem)",offset:1}],m={duration:300,easing:"ease-in-out"};class I extends HTMLElement{constructor(){super(),this.initialCall=!0,this.formElement=v.content.firstElementChild.cloneNode(!0),this.successElement=C.content.firstElementChild.cloneNode(!0),this.appFormCardHolder=this.formElement.querySelector("app-form-card-holder"),this.appFormCardNumber=this.formElement.querySelector("app-form-card-number"),this.appFormCardExpirationDate=this.formElement.querySelector("app-form-card-expiration-date"),this.appFormCardCvc=this.formElement.querySelector("app-form-card-cvc"),this.buttonElement=this.formElement.querySelector('[data-name="button"]'),this.handleButtonState=this.handleButtonState.bind(this),this.handleButtonClick=this.handleButtonClick.bind(this)}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(e){this._isValid=e,this.isValid?(this.buttonElement.hasAttribute("disabled")&&this.buttonElement.removeAttribute("disabled"),this.buttonElement.classList.contains("bg-very-dark-violet/20")&&this.buttonElement.classList.remove("bg-very-dark-violet/20"),this.buttonElement.classList.contains("bg-very-dark-violet")||this.buttonElement.classList.add("bg-very-dark-violet")):(this.buttonElement.hasAttribute("disabled")||this.buttonElement.setAttribute("disabled",""),this.buttonElement.classList.contains("bg-very-dark-violet")&&this.buttonElement.classList.remove("bg-very-dark-violet"),this.buttonElement.classList.contains("bg-very-dark-violet/20")||this.buttonElement.classList.add("bg-very-dark-violet/20"))}connectedCallback(){this.initialCall&&(this.append(this.formElement),this.initialCall=!1),this.addEventListener("update-form",this.handleButtonState),this.buttonElement.addEventListener("click",this.handleButtonClick)}disconnectedCallback(){this.removeEventListener("update-form",this.handleButtonState),this.buttonElement.removeEventListener("click",this.handleButtonClick)}handleButtonState(){this.appFormCardHolder.isValid&&this.appFormCardNumber.isValid&&this.appFormCardExpirationDate.isValid&&this.appFormCardCvc.isValid?this.isValid=!0:this.isValid=!1}handleButtonClick(){const e=this.formElement.animate(g,m);e.onfinish=()=>{this.replaceChildren(this.successElement),this.successElement.animate(y,m)}}}const L=document.getElementById("template-app-form-card-number");class x extends HTMLElement{constructor(){super(),this.initialCall=!0,this.labelElement=L.content.firstElementChild.cloneNode(!0),this.inputElement=this.labelElement.querySelector('[data-name="input"]'),this.inputBorderElement=this.labelElement.querySelector('[data-name="input-border"]'),this.handleInputKeyUp=this.handleInputKeyUp.bind(this),this.appFormError=document.createElement("app-form-error")}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(e){this._isValid=e,this.isValid?(this.inputBorderElement.classList.contains("before:bg-input-error")&&this.inputBorderElement.classList.remove("before:bg-input-error"),this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.inputBorderElement.classList.add("before:bg-light-grayish-violet"),this.appFormError.isConnected&&this.labelElement.removeChild(this.appFormError)):(this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.inputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.inputBorderElement.classList.contains("before:bg-input-error")||this.inputBorderElement.classList.add("before:bg-input-error"),this.appFormError.isConnected||this.labelElement.append(this.appFormError))}connectedCallback(){this.initialCall&&(this.append(this.labelElement),this.initialCall=!1),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(e){const t=e.target.value;if(typeof t=="string"){this.validateInput();const n=new CustomEvent("update-card-number",{bubbles:!0,detail:{cardNumber:t}}),i=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(n),this.dispatchEvent(i)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.tooShort?this.appFormError.message="Too short":this.inputElement.validity.tooLong?this.appFormError.message="Too long":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format"))}}const B=document.getElementById("template-app-form-card-holder");class w extends HTMLElement{constructor(){super(),this.initialCall=!0,this.labelElement=B.content.firstElementChild.cloneNode(!0),this.inputElement=this.labelElement.querySelector('[data-name="input"]'),this.inputBorderElement=this.labelElement.querySelector('[data-name="input-border"]'),this.handleInputKeyUp=this.handleInputKeyUp.bind(this),this.appFormError=document.createElement("app-form-error")}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(e){this._isValid=e,this.isValid?(this.inputBorderElement.classList.contains("before:bg-input-error")&&this.inputBorderElement.classList.remove("before:bg-input-error"),this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.inputBorderElement.classList.add("before:bg-light-grayish-violet"),this.appFormError.isConnected&&this.labelElement.removeChild(this.appFormError)):(this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.inputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.inputBorderElement.classList.contains("before:bg-input-error")||this.inputBorderElement.classList.add("before:bg-input-error"),this.appFormError.isConnected||this.labelElement.append(this.appFormError))}connectedCallback(){this.initialCall&&(this.append(this.labelElement),this.initialCall=!1),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(e){const t=e.target.value;if(typeof t=="string"){this.validateInput();const n=new CustomEvent("update-card-holder",{bubbles:!0,detail:{holder:t===""?"Jane Appleseed":t}}),i=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(n),this.dispatchEvent(i)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format"))}}const V=document.getElementById("template-app-form-card-expiration-date");class F extends HTMLElement{constructor(){super(),this.initialCall=!0,this.containerElement=V.content.firstElementChild.cloneNode(!0),this.monthInputElement=this.containerElement.querySelector('[data-name="month-input"]'),this.monthInputBorderElement=this.containerElement.querySelector('[data-name="month-input-border"]'),this.yearInputElement=this.containerElement.querySelector('[data-name="year-input"]'),this.yearInputBorderElement=this.containerElement.querySelector('[data-name="year-input-border"]'),this.handleMonthInputKeyUp=this.handleMonthInputKeyUp.bind(this),this.handleYearInputKeyUp=this.handleYearInputKeyUp.bind(this),this.appFormError=document.createElement("app-form-error"),this.isValid=!1}get monthIsValid(){return this.hasOwnProperty("_monthIsValid")?this._monthIsValid:!1}get yearIsValid(){return this.hasOwnProperty("_yearIsValid")?this._yearIsValid:!1}set monthIsValid(e){this._monthIsValid=e,this.monthIsValid?(this.monthInputBorderElement.classList.contains("before:bg-input-error")&&this.monthInputBorderElement.classList.remove("before:bg-input-error"),this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.monthInputBorderElement.classList.add("before:bg-light-grayish-violet")):(this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.monthInputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.monthInputBorderElement.classList.contains("before:bg-input-error")||this.monthInputBorderElement.classList.add("before:bg-input-error"))}set yearIsValid(e){this._yearIsValid=e,this.yearIsValid?(this.yearInputBorderElement.classList.contains("before:bg-input-error")&&this.yearInputBorderElement.classList.remove("before:bg-input-error"),this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.yearInputBorderElement.classList.add("before:bg-light-grayish-violet")):(this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.yearInputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.yearInputBorderElement.classList.contains("before:bg-input-error")||this.yearInputBorderElement.classList.add("before:bg-input-error"))}connectedCallback(){this.initialCall&&(this.append(this.containerElement),this.initialCall=!1),this.monthInputElement.addEventListener("keyup",this.handleMonthInputKeyUp),this.yearInputElement.addEventListener("keyup",this.handleYearInputKeyUp)}disconnectedCallback(){this.monthInputElement.removeEventListener("keyup",this.handleMonthInputKeyUp),this.yearInputElement.removeEventListener("keyup",this.handleYearInputKeyUp)}handleMonthInputKeyUp(e){const t=e.target.value;if(typeof t=="string"){this.validateInputs();const n=new CustomEvent("update-card-expiration-date-month",{bubbles:!0,detail:{cardExpirationDateMonth:t}}),i=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(n),this.dispatchEvent(i)}else throw new Error("the event value is not a string")}handleYearInputKeyUp(e){const t=e.target.value;if(typeof t=="string"){this.validateInputs();const n=new CustomEvent("update-card-expiration-date-year",{bubbles:!0,detail:{cardExpirationDateYear:t}}),i=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(n),this.dispatchEvent(i)}else throw new Error("the event value is not a string")}validateInputs(){const e=this.monthInputElement.validity.valid,t=this.yearInputElement.validity.valid;this.monthIsValid=e,this.yearIsValid=t,e&&t?(this.appFormError.isConnected&&this.containerElement.removeChild(this.appFormError),this.isValid=!0):(this.appFormError.isConnected||this.containerElement.append(this.appFormError),this.isValid=!1,this.monthInputElement.validity.valueMissing||this.yearInputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.monthInputElement.validity.tooShort||this.yearInputElement.validity.tooShort?this.appFormError.message="Too short":(this.monthInputElement.validity.patternMismatch||this.yearInputElement.validity.patternMismatch)&&(this.appFormError.message="Wrong format"))}}const k=document.getElementById("template-app-form-card-cvc");class M extends HTMLElement{constructor(){super(),this.initialCall=!0,this.labelElement=k.content.firstElementChild.cloneNode(!0),this.inputElement=this.labelElement.querySelector('[data-name="input"]'),this.inputBorderElement=this.labelElement.querySelector('[data-name="input-border"]'),this.handleInputKeyUp=this.handleInputKeyUp.bind(this),this.appFormError=document.createElement("app-form-error")}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(e){this._isValid=e,this.isValid?(this.inputBorderElement.classList.contains("before:bg-input-error")&&this.inputBorderElement.classList.remove("before:bg-input-error"),this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.inputBorderElement.classList.add("before:bg-light-grayish-violet"),this.appFormError.isConnected&&this.labelElement.removeChild(this.appFormError)):(this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.inputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.inputBorderElement.classList.contains("before:bg-input-error")||this.inputBorderElement.classList.add("before:bg-input-error"),this.appFormError.isConnected||this.labelElement.append(this.appFormError))}connectedCallback(){this.initialCall&&(this.append(this.labelElement),this.initialCall=!1),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}computeCardCvc(e){if(typeof e=="string")return["0","0","0"].map((i,r)=>e[r]?e[r].toUpperCase():i).join("");throw new Error("invalid parameter")}handleInputKeyUp(e){const t=e.target.value;if(typeof t=="string"){this.validateInput();const n=new CustomEvent("update-card-cvc",{bubbles:!0,detail:{cardCvc:t}}),i=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(n),this.dispatchEvent(i)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.tooShort?this.appFormError.message="Too short":this.inputElement.validity.tooLong?this.appFormError.message="Too long":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format"))}}const D=document.getElementById("template-app-form-error");class N extends HTMLElement{constructor(){super(),this.initialCall=!0,this.paragraphElement=D.content.firstElementChild.cloneNode(!0)}get message(){return this.hasOwnProperty("_message")?this._message:""}set message(e){this._message=e,this.paragraphElement.textContent=this.message}connectedCallback(){this.initialCall&&(this.classList.add("block"),this.append(this.paragraphElement),this.initialCall=!1)}}customElements.define("app-root",u);customElements.define("app-card",E);customElements.define("app-card-back",f);customElements.define("app-card-front",b);customElements.define("app-form",I);customElements.define("app-form-card-holder",w);customElements.define("app-form-card-number",x);customElements.define("app-form-card-expiration-date",F);customElements.define("app-form-card-cvc",M);customElements.define("app-form-error",N);const _=document.getElementById("app"),A=document.createElement("app-root");_.append(A);
