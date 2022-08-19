var V=Object.defineProperty;var k=(s,n,t)=>n in s?V(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var e=(s,n,t)=>(k(s,typeof n!="symbol"?n+"":n,t),t),A=(s,n,t)=>{if(!n.has(s))throw TypeError("Cannot "+t)};var d=(s,n,t)=>(A(s,n,"read from private field"),t?t.call(s):n.get(s)),m=(s,n,t)=>{if(n.has(s))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(s):n.set(s,t)},h=(s,n,t,i)=>(A(s,n,"write to private field"),i?i.call(s,t):n.set(s,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var c;class M extends HTMLElement{constructor(){super();m(this,c,!0);e(this,"titleElement",document.createElement("h1"));e(this,"appCard",document.createElement("div",{is:"app-card"}));e(this,"appForm",document.createElement("form",{is:"app-form"}));this.handleCardNumber=this.handleCardNumber.bind(this),this.handleCardHolder=this.handleCardHolder.bind(this),this.handleCardExpirationDateMonth=this.handleCardExpirationDateMonth.bind(this),this.handleCardExpirationDateYear=this.handleCardExpirationDateYear.bind(this),this.handleCardCvc=this.handleCardCvc.bind(this)}connectedCallback(){d(this,c)&&(this.classList.add("page__container"),this.append(this.appCard,this.appForm),h(this,c,!1)),this.addEventListener("update-card-number",this.handleCardNumber),this.addEventListener("update-card-holder",this.handleCardHolder),this.addEventListener("update-card-expiration-date-month",this.handleCardExpirationDateMonth),this.addEventListener("update-card-expiration-date-year",this.handleCardExpirationDateYear),this.addEventListener("update-card-cvc",this.handleCardCvc)}disconnectedCallback(){this.removeEventListener("update-card-number",this.handleCardNumber),this.removeEventListener("update-card-holder",this.handleCardHolder),this.removeEventListener("update-card-expiration-date-month",this.handleCardExpirationDateMonth),this.removeEventListener("update-card-expiration-date-year",this.handleCardExpirationDateYear),this.removeEventListener("update-card-cvc",this.handleCardCvc)}handleCardNumber(t){if(t instanceof CustomEvent){const{cardNumber:i}=t.detail;if(typeof i=="string")this.appCard.appCardFront.cardNumber=i;else throw new Error("The card number is not a string")}else throw new Error("The parameter must be a custom event")}handleCardHolder(t){if(t instanceof CustomEvent){const{holder:i}=t.detail;if(typeof i=="string")this.appCard.appCardFront.cardHolder=i;else throw new Error("The card holder is not a string")}else throw new Error("The parameter must be a custom event")}handleCardExpirationDateMonth(t){if(t instanceof CustomEvent){const{cardExpirationMonth:i}=t.detail;if(typeof i=="string")this.appCard.appCardFront.cardExpirationMonth=i;else throw new Error("The card expiration date month is not a string")}else throw new Error("The parameter must be a custom event")}handleCardExpirationDateYear(t){if(t instanceof CustomEvent){const{cardExpirationYear:i}=t.detail;if(typeof i=="string")this.appCard.appCardFront.cardExpirationYear=i;else throw new Error("The card expiration date year is not a string")}else throw new Error("The parameter must be a custom event")}handleCardCvc(t){if(t instanceof CustomEvent){const{cardCvc:i}=t.detail;if(typeof i=="string")this.appCard.appCardBack.cardCvc=i;else throw new Error("The card cvc is not a string")}else throw new Error("The parameter must be a custom event")}}c=new WeakMap;var u;class T extends HTMLDivElement{constructor(){super();m(this,u,!0);e(this,"appCardBack",document.createElement("div",{is:"app-card-back"}));e(this,"appCardFront",document.createElement("div",{is:"app-card-front"}))}connectedCallback(){d(this,u)&&(this.classList.add("card"),this.append(this.appCardBack,this.appCardFront),h(this,u,!1))}}u=new WeakMap;const N="/interactive-card-details-form/assets/bg-card-back.503939c0.png",w="http://www.w3.org/2000/svg";var E;class H extends HTMLDivElement{constructor(){super();m(this,E,!0);e(this,"imageElement",document.createElement("img"));e(this,"svgElement",document.createElementNS(w,"svg"));e(this,"cvcElement",document.createElementNS(w,"text"))}get cardCvc(){return this.hasOwnProperty("_cardCvc")?this._cardCvc:"000"}set cardCvc(t){if(typeof t=="string"){const i=t.replaceAll(/[^0-9]+/g,""),r=["0","0","0"].map((o,l)=>i[l]?i[l].toUpperCase():o);this._cardCvc=r.join(""),this.cvcElement.textContent=this.cardCvc}else throw new Error("invalid parameter")}connectedCallback(){d(this,E)&&(this.classList.add("card__back"),this.imageElement.classList.add("card__image"),this.svgElement.classList.add("card__overlay"),this.cvcElement.classList.add("card__text","card__text--body","card__text--uppercase"),this.imageElement.setAttribute("src",N),this.imageElement.setAttribute("alt","bank card back illustration"),this.svgElement.setAttribute("viewbox","0 0 447 245"),this.cvcElement.setAttribute("x","360"),this.cvcElement.setAttribute("y","126"),this.svgElement.append(this.cvcElement),this.append(this.imageElement,this.svgElement),h(this,E,!1)),this.cvcElement.textContent=this.cardCvc}}E=new WeakMap;const U="/interactive-card-details-form/assets/bg-card-front.5aca8db4.png",S="/interactive-card-details-form/assets/card-logo.c6ba498c.svg",p="http://www.w3.org/2000/svg";var b;class K extends HTMLDivElement{constructor(){super();m(this,b,!0);e(this,"imageElement",document.createElement("img"));e(this,"svgElement",document.createElementNS(p,"svg"));e(this,"svgImageElement",document.createElementNS(p,"image"));e(this,"numberElement",document.createElementNS(p,"text"));e(this,"holderElement",document.createElementNS(p,"text"));e(this,"expirationElement",document.createElementNS(p,"text"));e(this,"expirationMonthElement",document.createElementNS(p,"tspan"));e(this,"expirationYearElement",document.createElementNS(p,"tspan"))}get cardNumber(){return this.hasOwnProperty("_cardNumber")?this._cardNumber:"0000 0000 0000 0000"}get cardHolder(){return this.hasOwnProperty("_cardHolder")?this._cardHolder:"jane appleseed"}get cardExpirationMonth(){return this.hasOwnProperty("_cardExpirationMonth")?this._cardExpirationMonth:"00"}get cardExpirationYear(){return this.hasOwnProperty("_cardExpirationYear")?this._cardExpirationYear:"00"}set cardNumber(t){if(typeof t=="string"){const i=t.replaceAll(/[^0-9]+/g,""),r=Array.from(["0","0","0","0"],()=>["0","0","0","0"]).map((o,l)=>o.map((x,F)=>{const I=l*4+F;return i[I]?i[I].toUpperCase():x}));this._cardNumber=r.reduce((o,l,x)=>`${o}${x<=0?"":" "}${l.join("")}`,""),this.numberElement.textContent=this.cardNumber}else throw new Error("invalid parameter")}set cardHolder(t){const i=t.length<=0?"Jane Appleseed":t.replaceAll(/[^a-zA-Z ]+/g,"").trim();this._cardHolder=i,this.holderElement.textContent=this.cardHolder.length<=0?"Jane Appleseed":this.cardHolder}set cardExpirationMonth(t){if(typeof t=="string"){const i=t.replaceAll(/[^0-9]+/g,""),r=["0","0"].map((o,l)=>i[l]?i[l].toUpperCase():o);this._cardExpirationMonth=r.join(""),this.expirationMonthElement.textContent=this.cardExpirationMonth}else throw new Error("invalid parameter")}set cardExpirationYear(t){if(typeof t=="string"){const i=t.replaceAll(/[^0-9]+/g,""),r=["0","0"].map((o,l)=>i[l]?i[l].toUpperCase():o);this._cardExpirationYear=r.join(""),this.expirationYearElement.textContent=this.cardExpirationYear}else throw new Error("invalid parameter")}connectedCallback(){d(this,b)&&(this.classList.add("card__front"),this.imageElement.classList.add("card__image"),this.svgElement.classList.add("card__overlay"),this.numberElement.classList.add("card__text","card__text--heading"),this.holderElement.classList.add("card__text","card__text--body","card__text--uppercase"),this.expirationElement.classList.add("card__text","card__text--body"),this.imageElement.setAttribute("src",U),this.imageElement.setAttribute("alt","bank card front illustration"),this.svgElement.setAttribute("viewBox","0 0 447 245"),this.svgImageElement.setAttribute("x","20"),this.svgImageElement.setAttribute("y","20"),this.svgImageElement.setAttribute("href",S),this.svgImageElement.setAttribute("width","84"),this.svgImageElement.setAttribute("height","47"),this.numberElement.setAttribute("x","20"),this.numberElement.setAttribute("y","164"),this.holderElement.setAttribute("x","20"),this.holderElement.setAttribute("y","214"),this.expirationElement.setAttribute("x","380"),this.expirationElement.setAttribute("y","214"),this.expirationElement.append(this.expirationMonthElement,"/",this.expirationYearElement),this.svgElement.append(this.svgImageElement,this.numberElement,this.holderElement,this.expirationElement),this.append(this.imageElement,this.svgElement),h(this,b,!1)),this.numberElement.textContent=this.cardNumber,this.holderElement.textContent=this.cardHolder,this.expirationMonthElement.textContent=this.cardExpirationMonth,this.expirationYearElement.textContent=this.cardExpirationYear}}b=new WeakMap;const Y=[{opacity:0,transform:"translateX(4rem)",offset:0},{opacity:1,transform:"translateX(0)",offset:1}],P=[{opacity:1,transform:"translateX(0)",offset:0},{opacity:0,transform:"translateX(-4rem)",offset:1}],B={duration:300,easing:"ease-in-out"};var f;class D extends HTMLFormElement{constructor(){super();m(this,f,!0);e(this,"appFormCardHolder",document.createElement("label",{is:"app-form-card-holder"}));e(this,"appFormCardNumber",document.createElement("label",{is:"app-form-card-number"}));e(this,"appFormCardExpirationDate",document.createElement("div",{is:"app-form-card-expiration"}));e(this,"appFormCardCvc",document.createElement("label",{is:"app-form-card-cvc"}));e(this,"buttonElement",document.createElement("button"));e(this,"formSuccessElement",document.createElement("div",{is:"app-form-success"}));this.handleButtonState=this.handleButtonState.bind(this),this.handleButtonClick=this.handleButtonClick.bind(this)}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(t){this._isValid=t,this.isValid?(this.buttonElement.hasAttribute("disabled")&&this.buttonElement.removeAttribute("disabled"),this.buttonElement.classList.contains("form__button--disabled")&&this.buttonElement.classList.remove("form__button--disabled"),this.buttonElement.classList.contains("form__button--enabled")||this.buttonElement.classList.add("form__button--enabled")):(this.buttonElement.hasAttribute("disabled")||this.buttonElement.setAttribute("disabled",""),this.buttonElement.classList.contains("form__button--enabled")&&this.buttonElement.classList.remove("form__button--enabled"),this.buttonElement.classList.contains("form__button--disabled")||this.buttonElement.classList.add("form__button--disabled"))}connectedCallback(){d(this,f)&&(this.classList.add("form"),this.buttonElement.classList.add("form__button","form__button--disabled"),this.buttonElement.setAttribute("type","button"),this.buttonElement.setAttribute("disabled",""),this.buttonElement.textContent="Confirm",this.append(this.appFormCardHolder,this.appFormCardNumber,this.appFormCardExpirationDate,this.appFormCardCvc,this.buttonElement),h(this,f,!1)),this.addEventListener("update-form",this.handleButtonState),this.buttonElement.addEventListener("click",this.handleButtonClick)}disconnectedCallback(){this.removeEventListener("update-form",this.handleButtonState),this.buttonElement.removeEventListener("click",this.handleButtonClick)}handleButtonState(){this.appFormCardHolder.isValid&&this.appFormCardNumber.isValid&&this.appFormCardExpirationDate.isValid&&this.appFormCardCvc.isValid?this.isValid=!0:this.isValid=!1}handleButtonClick(){const t=this.animate(P,B);t.onfinish=()=>{this.replaceChildren(this.formSuccessElement),this.formSuccessElement.animate(Y,B)}}}f=new WeakMap;var v;class O extends HTMLLabelElement{constructor(){super();m(this,v,!0);e(this,"labelElement",document.createElement("label"));e(this,"titleElement",document.createElement("span"));e(this,"inputContainerElement",document.createElement("span"));e(this,"inputElement",document.createElement("input"));e(this,"inputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));this.handleInputKeyUp=this.handleInputKeyUp.bind(this)}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(t){this._isValid=t,this.isValid?(this.inputBorderElement.classList.contains("before:bg-input-error")&&this.inputBorderElement.classList.remove("before:bg-input-error"),this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.inputBorderElement.classList.add("before:bg-light-grayish-violet"),this.appFormError.isConnected&&this.removeChild(this.appFormError)):(this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.inputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.inputBorderElement.classList.contains("before:bg-input-error")||this.inputBorderElement.classList.add("before:bg-input-error"),this.appFormError.isConnected||this.append(this.appFormError))}connectedCallback(){d(this,v)&&(this.classList.add("form__section"),this.titleElement.classList.add("form__title"),this.inputContainerElement.classList.add("form__input-container"),this.inputElement.classList.add("form__input"),this.inputBorderElement.classList.add("form__input-border"),this.titleElement.textContent="card number",this.inputElement.setAttribute("type","text"),this.inputElement.setAttribute("name","cardNumber"),this.inputElement.setAttribute("placeholder","e.g. 1234 5678 9123 0000"),this.inputElement.setAttribute("required",""),this.inputElement.setAttribute("minlength","19"),this.inputElement.setAttribute("maxlength","19"),this.inputElement.setAttribute("pattern","^(?:[0-9]{4} ){3}[0-9]{4}$"),this.inputContainerElement.append(this.inputElement,this.inputBorderElement),this.append(this.titleElement,this.inputContainerElement),h(this,v,!1)),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(t){const i=t.target.value;if(typeof i=="string"){this.validateInput();const a=new CustomEvent("update-card-number",{bubbles:!0,detail:{cardNumber:i}}),r=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(r)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.tooShort?this.appFormError.message="Too short":this.inputElement.validity.tooLong?this.appFormError.message="Too long":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format, numbers only"))}}v=new WeakMap;var g;class $ extends HTMLLabelElement{constructor(){super();m(this,g,!0);e(this,"titleElement",document.createElement("span"));e(this,"inputContainerElement",document.createElement("span"));e(this,"inputElement",document.createElement("input"));e(this,"inputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));this.handleInputKeyUp=this.handleInputKeyUp.bind(this)}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(t){this._isValid=t,this.isValid?(this.inputBorderElement.classList.contains("before:bg-input-error")&&this.inputBorderElement.classList.remove("before:bg-input-error"),this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.inputBorderElement.classList.add("before:bg-light-grayish-violet"),this.appFormError.isConnected&&this.removeChild(this.appFormError)):(this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.inputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.inputBorderElement.classList.contains("before:bg-input-error")||this.inputBorderElement.classList.add("before:bg-input-error"),this.appFormError.isConnected||this.append(this.appFormError))}connectedCallback(){d(this,g)&&(this.classList.add("form__section"),this.titleElement.classList.add("form__title"),this.inputContainerElement.classList.add("form__input-container"),this.inputElement.classList.add("form__input"),this.inputBorderElement.classList.add("form__input-border"),this.titleElement.textContent="cardholder name",this.inputElement.setAttribute("type","text"),this.inputElement.setAttribute("name","cardHolder"),this.inputElement.setAttribute("placeholder","e.g. Jane Appleseed"),this.inputElement.setAttribute("required",""),this.inputElement.setAttribute("pattern","^(?:[a-zA-Z]+ ){1,2}[a-zA-Z]+$"),this.inputContainerElement.append(this.inputElement,this.inputBorderElement),this.append(this.titleElement,this.inputContainerElement),h(this,g,!1)),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(t){const i=t.target.value;if(typeof i=="string"){this.validateInput();const a=new CustomEvent("update-card-holder",{bubbles:!0,detail:{holder:i}}),r=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(r)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format, letters and spaces only"))}}g=new WeakMap;var C;class X extends HTMLDivElement{constructor(){super();m(this,C,!0);e(this,"titleElement",document.createElement("div"));e(this,"rowElement",document.createElement("div"));e(this,"monthLabelElement",document.createElement("label"));e(this,"monthTitleElement",document.createElement("span"));e(this,"monthInputElement",document.createElement("input"));e(this,"monthInputBorderElement",document.createElement("span"));e(this,"yearLabelElement",document.createElement("label"));e(this,"yearTitleElement",document.createElement("span"));e(this,"yearInputElement",document.createElement("input"));e(this,"yearInputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));e(this,"isValid",!1);this.handleMonthInputKeyUp=this.handleMonthInputKeyUp.bind(this),this.handleYearInputKeyUp=this.handleYearInputKeyUp.bind(this)}get monthIsValid(){return this.hasOwnProperty("_monthIsValid")?this._monthIsValid:!1}get yearIsValid(){return this.hasOwnProperty("_yearIsValid")?this._yearIsValid:!1}set monthIsValid(t){this._monthIsValid=t,this.monthIsValid?(this.monthInputBorderElement.classList.contains("before:bg-input-error")&&this.monthInputBorderElement.classList.remove("before:bg-input-error"),this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.monthInputBorderElement.classList.add("before:bg-light-grayish-violet")):(this.monthInputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.monthInputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.monthInputBorderElement.classList.contains("before:bg-input-error")||this.monthInputBorderElement.classList.add("before:bg-input-error"))}set yearIsValid(t){this._yearIsValid=t,this.yearIsValid?(this.yearInputBorderElement.classList.contains("before:bg-input-error")&&this.yearInputBorderElement.classList.remove("before:bg-input-error"),this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.yearInputBorderElement.classList.add("before:bg-light-grayish-violet")):(this.yearInputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.yearInputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.yearInputBorderElement.classList.contains("before:bg-input-error")||this.yearInputBorderElement.classList.add("before:bg-input-error"))}connectedCallback(){d(this,C)&&(this.classList.add("form__section","form__section--row"),this.titleElement.classList.add("form__title"),this.rowElement.classList.add("form__row"),this.monthLabelElement.classList.add("form__input-container"),this.monthTitleElement.classList.add("form__hidden-title"),this.monthInputElement.classList.add("form__input","form__input--uppercase"),this.monthInputBorderElement.classList.add("form__input-border"),this.yearLabelElement.classList.add("form__input-container"),this.yearTitleElement.classList.add("form__hidden-title"),this.yearInputElement.classList.add("form__input","form__input--uppercase"),this.yearInputBorderElement.classList.add("form__input-border"),this.monthInputElement.setAttribute("type","text"),this.monthInputElement.setAttribute("name","cardExpirationDateMonth"),this.monthInputElement.setAttribute("placeholder","mm"),this.monthInputElement.setAttribute("required",""),this.monthInputElement.setAttribute("minlength","2"),this.monthInputElement.setAttribute("maxlength","2"),this.monthInputElement.setAttribute("pattern","^0[0-9]$|^1[0-2]$"),this.yearInputElement.setAttribute("type","text"),this.yearInputElement.setAttribute("name","cardExpirationDateYear"),this.yearInputElement.setAttribute("placeholder","yy"),this.yearInputElement.setAttribute("required",""),this.yearInputElement.setAttribute("minlength","2"),this.yearInputElement.setAttribute("maxlength","2"),this.yearInputElement.setAttribute("pattern","^[2-9][2-9]$"),this.titleElement.textContent="exp. date (mm/yy)",this.monthTitleElement.textContent="expiration date month",this.yearTitleElement.textContent="expiration date year",this.monthLabelElement.append(this.monthTitleElement,this.monthInputElement,this.monthInputBorderElement),this.yearLabelElement.append(this.yearTitleElement,this.yearInputElement,this.yearInputBorderElement),this.rowElement.append(this.monthLabelElement,this.yearLabelElement),this.append(this.titleElement,this.rowElement),h(this,C,!1)),this.monthInputElement.addEventListener("keyup",this.handleMonthInputKeyUp),this.yearInputElement.addEventListener("keyup",this.handleYearInputKeyUp)}disconnectedCallback(){this.monthInputElement.removeEventListener("keyup",this.handleMonthInputKeyUp),this.yearInputElement.removeEventListener("keyup",this.handleYearInputKeyUp)}handleMonthInputKeyUp(t){const i=t.target.value;if(typeof i=="string"){this.validateInputs();const a=new CustomEvent("update-card-expiration-date-month",{bubbles:!0,detail:{cardExpirationMonth:i}}),r=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(r)}else throw new Error("the event value is not a string")}handleYearInputKeyUp(t){const i=t.target.value;if(typeof i=="string"){this.validateInputs();const a=new CustomEvent("update-card-expiration-date-year",{bubbles:!0,detail:{cardExpirationYear:i}}),r=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(r)}else throw new Error("the event value is not a string")}validateInputs(){const t=this.monthInputElement.validity.valid,i=this.yearInputElement.validity.valid;this.monthIsValid=t,this.yearIsValid=i,t&&i?(this.appFormError.isConnected&&this.removeChild(this.appFormError),this.isValid=!0):(this.appFormError.isConnected||this.append(this.appFormError),this.isValid=!1,this.monthInputElement.validity.valueMissing||this.yearInputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.monthInputElement.validity.tooShort||this.yearInputElement.validity.tooShort?this.appFormError.message="Too short":(this.monthInputElement.validity.patternMismatch||this.yearInputElement.validity.patternMismatch)&&(this.appFormError.message="Wrong format, dates only"))}}C=new WeakMap;var y;class j extends HTMLLabelElement{constructor(){super();m(this,y,!0);e(this,"titleElement",document.createElement("span"));e(this,"inputContainerElement",document.createElement("span"));e(this,"inputElement",document.createElement("input"));e(this,"inputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));this.handleInputKeyUp=this.handleInputKeyUp.bind(this)}get isValid(){return this.hasOwnProperty("_isValid")?this._isValid:!1}set isValid(t){this._isValid=t,this.isValid?(this.inputBorderElement.classList.contains("before:bg-input-error")&&this.inputBorderElement.classList.remove("before:bg-input-error"),this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")||this.inputBorderElement.classList.add("before:bg-light-grayish-violet"),this.appFormError.isConnected&&this.removeChild(this.appFormError)):(this.inputBorderElement.classList.contains("before:bg-light-grayish-violet")&&this.inputBorderElement.classList.remove("before:bg-light-grayish-violet"),this.inputBorderElement.classList.contains("before:bg-input-error")||this.inputBorderElement.classList.add("before:bg-input-error"),this.appFormError.isConnected||this.append(this.appFormError))}connectedCallback(){d(this,y)&&(this.classList.add("form__section","form__section--row"),this.titleElement.classList.add("form__title"),this.inputContainerElement.classList.add("form__input-container"),this.inputElement.classList.add("form__input"),this.inputBorderElement.classList.add("form__input-border"),this.titleElement.textContent="cvc",this.inputElement.setAttribute("type","text"),this.inputElement.setAttribute("name","cardCvc"),this.inputElement.setAttribute("placeholder","e.g. 123"),this.inputElement.setAttribute("required",""),this.inputElement.setAttribute("minlength","3"),this.inputElement.setAttribute("maxlength","3"),this.inputElement.setAttribute("pattern","^[0-9]{3}$"),this.inputContainerElement.append(this.inputElement,this.inputBorderElement),this.append(this.titleElement,this.inputContainerElement),h(this,y,!1)),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}computeCardCvc(t){if(typeof t=="string")return["0","0","0"].map((r,o)=>t[o]?t[o].toUpperCase():r).join("");throw new Error("invalid parameter")}handleInputKeyUp(t){const i=t.target.value;if(typeof i=="string"){this.validateInput();const a=new CustomEvent("update-card-cvc",{bubbles:!0,detail:{cardCvc:i}}),r=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(r)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.tooShort?this.appFormError.message="Too short":this.inputElement.validity.tooLong?this.appFormError.message="Too long":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format, numbers only"))}}y=new WeakMap;var _;class q extends HTMLParagraphElement{constructor(){super();m(this,_,!0)}get message(){return this.hasOwnProperty("_message")?this._message:""}set message(t){this._message=t,this.textContent=this.message}connectedCallback(){d(this,_)&&(this.classList.add("form__error"),h(this,_,!1))}}_=new WeakMap;const W="/interactive-card-details-form/assets/icon-complete.0e154f18.svg";var L;class z extends HTMLDivElement{constructor(){super();m(this,L,!0);e(this,"imageElement",document.createElement("img"));e(this,"titleElement",document.createElement("h2"));e(this,"descriptionElement",document.createElement("p"));e(this,"buttonElement",document.createElement("button"))}connectedCallback(){d(this,L)&&(this.classList.add("success-view","form__section"),this.imageElement.classList.add("success-view__icon"),this.titleElement.classList.add("success-view__title"),this.descriptionElement.classList.add("success-view__description"),this.buttonElement.classList.add("success-view__button"),this.imageElement.setAttribute("src",W),this.imageElement.setAttribute("alt","Icon complete"),this.buttonElement.setAttribute("type","button"),this.titleElement.textContent="thank you!",this.descriptionElement.textContent="We've added your card details",this.buttonElement.textContent="Continue",this.append(this.imageElement,this.titleElement,this.descriptionElement,this.buttonElement),h(this,L,!1))}}L=new WeakMap;customElements.define("app-root",M,{extends:"main"});customElements.define("app-card",T,{extends:"div"});customElements.define("app-card-back",H,{extends:"div"});customElements.define("app-card-front",K,{extends:"div"});customElements.define("app-form",D,{extends:"form"});customElements.define("app-form-card-holder",$,{extends:"label"});customElements.define("app-form-card-number",O,{extends:"label"});customElements.define("app-form-card-expiration",X,{extends:"div"});customElements.define("app-form-card-cvc",j,{extends:"label"});customElements.define("app-form-error",q,{extends:"p"});customElements.define("app-form-success",z,{extends:"div"});const J=document.getElementById("app"),Z=document.createElement("main",{is:"app-root"});J.append(Z);