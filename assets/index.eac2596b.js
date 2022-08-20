var D=Object.defineProperty;var X=(r,s,t)=>s in r?D(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var e=(r,s,t)=>(X(r,typeof s!="symbol"?s+"":s,t),t),K=(r,s,t)=>{if(!s.has(r))throw TypeError("Cannot "+t)};var i=(r,s,t)=>(K(r,s,"read from private field"),t?t.call(r):s.get(r)),o=(r,s,t)=>{if(s.has(r))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(r):s.set(r,t)},d=(r,s,t,n)=>(K(r,s,"write to private field"),n?n.call(r,t):s.set(r,t),t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var I;class q extends HTMLElement{constructor(){super();o(this,I,!0);e(this,"titleElement",document.createElement("h1"));e(this,"appCard",document.createElement("div",{is:"app-card"}));e(this,"appForm",document.createElement("form",{is:"app-form"}));this.handleCardNumberUpdate=this.handleCardNumberUpdate.bind(this),this.handleCardHolderUpdate=this.handleCardHolderUpdate.bind(this),this.handleCardExpirationMonthUpdate=this.handleCardExpirationMonthUpdate.bind(this),this.handleCardExpirationYearUpdate=this.handleCardExpirationYearUpdate.bind(this),this.handleCardCvcUpdate=this.handleCardCvcUpdate.bind(this)}connectedCallback(){i(this,I)&&(this.classList.add("page__container"),this.append(this.appCard,this.appForm),d(this,I,!1)),this.addEventListener("update-card-number",this.handleCardNumberUpdate),this.addEventListener("update-card-holder",this.handleCardHolderUpdate),this.addEventListener("update-card-expiration-date-month",this.handleCardExpirationMonthUpdate),this.addEventListener("update-card-expiration-date-year",this.handleCardExpirationYearUpdate),this.addEventListener("update-card-cvc",this.handleCardCvcUpdate)}disconnectedCallback(){this.removeEventListener("update-card-number",this.handleCardNumberUpdate),this.removeEventListener("update-card-holder",this.handleCardHolderUpdate),this.removeEventListener("update-card-expiration-date-month",this.handleCardExpirationMonthUpdate),this.removeEventListener("update-card-expiration-date-year",this.handleCardExpirationYearUpdate),this.removeEventListener("update-card-cvc",this.handleCardCvcUpdate)}handleCardNumberUpdate(t){if(t instanceof CustomEvent){const{cardNumber:n}=t.detail;if(typeof n=="string")this.appCard.appCardFront.cardNumber=n;else throw new Error("The card number is not a string")}else throw new Error("The parameter must be a custom event")}handleCardHolderUpdate(t){if(t instanceof CustomEvent){const{holder:n}=t.detail;if(typeof n=="string")this.appCard.appCardFront.cardHolder=n;else throw new Error("The card holder is not a string")}else throw new Error("The parameter must be a custom event")}handleCardExpirationMonthUpdate(t){if(t instanceof CustomEvent){const{cardExpirationMonth:n}=t.detail;if(typeof n=="string")this.appCard.appCardFront.cardExpirationMonth=n;else throw new Error("The card expiration month is not a string")}else throw new Error("The parameter must be a custom event")}handleCardExpirationYearUpdate(t){if(t instanceof CustomEvent){const{cardExpirationYear:n}=t.detail;if(typeof n=="string")this.appCard.appCardFront.cardExpirationYear=n;else throw new Error("The card expiration year is not a string")}else throw new Error("The parameter must be a custom event")}handleCardCvcUpdate(t){if(t instanceof CustomEvent){const{cardCvc:n}=t.detail;if(typeof n=="string")this.appCard.appCardBack.cardCvc=n;else throw new Error("The card cvc is not a string")}else throw new Error("The parameter must be a custom event")}}I=new WeakMap;var A;class O extends HTMLDivElement{constructor(){super();o(this,A,!0);e(this,"appCardBack",document.createElement("div",{is:"app-card-back"}));e(this,"appCardFront",document.createElement("div",{is:"app-card-front"}))}connectedCallback(){i(this,A)&&(this.classList.add("card"),this.append(this.appCardBack,this.appCardFront),d(this,A,!1))}}A=new WeakMap;const j="/interactive-card-details-form/assets/bg-card-back.503939c0.png",Y="http://www.w3.org/2000/svg";var c,w;class W extends HTMLDivElement{constructor(){super();o(this,c,void 0);o(this,w,!0);e(this,"imageElement",document.createElement("img"));e(this,"svgElement",document.createElementNS(Y,"svg"));e(this,"cvcElement",document.createElementNS(Y,"text"))}get cardCvc(){return i(this,c)===void 0?"000":i(this,c)}set cardCvc(t){if(typeof t=="string"){const n=t.replaceAll(/[^0-9]+/g,""),l=["0","0","0"].map((m,p)=>n[p]?n[p].toUpperCase():m);d(this,c,l.join("")),this.cvcElement.textContent=this.cardCvc}else throw new Error("invalid parameter")}connectedCallback(){i(this,w)&&(this.classList.add("card__face","card__face--back"),this.imageElement.classList.add("card__image"),this.svgElement.classList.add("card__overlay"),this.cvcElement.classList.add("card__text","card__text--body","card__text--uppercase"),this.imageElement.setAttribute("src",j),this.imageElement.setAttribute("alt","bank card back illustration"),this.imageElement.setAttribute("draggable","false"),this.svgElement.setAttribute("viewbox","0 0 447 245"),this.cvcElement.setAttribute("x","360"),this.cvcElement.setAttribute("y","126"),this.svgElement.append(this.cvcElement),this.append(this.imageElement,this.svgElement),d(this,w,!1)),this.cvcElement.textContent=this.cardCvc}}c=new WeakMap,w=new WeakMap;const z="/interactive-card-details-form/assets/bg-card-front.5aca8db4.png",J="/interactive-card-details-form/assets/card-logo.c6ba498c.svg",h="http://www.w3.org/2000/svg";var u,E,f,b,F;class Z extends HTMLDivElement{constructor(){super();o(this,u,void 0);o(this,E,void 0);o(this,f,void 0);o(this,b,void 0);o(this,F,!0);e(this,"imageElement",document.createElement("img"));e(this,"svgElement",document.createElementNS(h,"svg"));e(this,"svgImageElement",document.createElementNS(h,"image"));e(this,"numberElement",document.createElementNS(h,"text"));e(this,"holderElement",document.createElementNS(h,"text"));e(this,"expirationElement",document.createElementNS(h,"text"));e(this,"expirationMonthElement",document.createElementNS(h,"tspan"));e(this,"expirationYearElement",document.createElementNS(h,"tspan"))}get cardNumber(){return i(this,u)===void 0?"0000 0000 0000 0000":i(this,u)}get cardHolder(){return i(this,E)===void 0?"jane appleseed":i(this,E)}get cardExpirationMonth(){return i(this,f)===void 0?"00":i(this,f)}get cardExpirationYear(){return i(this,b)===void 0?"00":i(this,b)}set cardNumber(t){if(typeof t=="string"){const n=t.replaceAll(/[^0-9]+/g,""),l=Array.from(["0","0","0","0"],()=>["0","0","0","0"]).map((m,p)=>m.map((H,$)=>{const S=p*4+$;return n[S]?n[S].toUpperCase():H}));d(this,u,l.reduce((m,p,H)=>`${m}${H<=0?"":" "}${p.join("")}`,"")),this.numberElement.textContent=this.cardNumber}else throw new Error("invalid parameter")}set cardHolder(t){const n=t.length<=0?"Jane Appleseed":t.replaceAll(/[^a-zA-Z ]+/g,"").trim();d(this,E,n),this.holderElement.textContent=this.cardHolder.length<=0?"Jane Appleseed":this.cardHolder}set cardExpirationMonth(t){if(typeof t=="string"){const n=t.replaceAll(/[^0-9]+/g,""),l=["0","0"].map((m,p)=>n[p]?n[p].toUpperCase():m);d(this,f,l.join("")),this.expirationMonthElement.textContent=this.cardExpirationMonth}else throw new Error("invalid parameter")}set cardExpirationYear(t){if(typeof t=="string"){const n=t.replaceAll(/[^0-9]+/g,""),l=["0","0"].map((m,p)=>n[p]?n[p].toUpperCase():m);d(this,b,l.join("")),this.expirationYearElement.textContent=this.cardExpirationYear}else throw new Error("invalid parameter")}connectedCallback(){i(this,F)&&(this.classList.add("card__face","card__face--front"),this.imageElement.classList.add("card__image"),this.svgElement.classList.add("card__overlay"),this.numberElement.classList.add("card__text","card__text--heading"),this.holderElement.classList.add("card__text","card__text--body","card__text--uppercase"),this.expirationElement.classList.add("card__text","card__text--body"),this.imageElement.setAttribute("src",z),this.imageElement.setAttribute("alt","bank card front illustration"),this.imageElement.setAttribute("draggable","false"),this.svgElement.setAttribute("viewBox","0 0 447 245"),this.svgImageElement.setAttribute("x","32"),this.svgImageElement.setAttribute("y","32"),this.svgImageElement.setAttribute("href",J),this.svgImageElement.setAttribute("width","84"),this.svgImageElement.setAttribute("height","47"),this.numberElement.setAttribute("x","32"),this.numberElement.setAttribute("y","164"),this.holderElement.setAttribute("x","32"),this.holderElement.setAttribute("y","208"),this.expirationElement.setAttribute("x","364"),this.expirationElement.setAttribute("y","208"),this.expirationElement.append(this.expirationMonthElement,"/",this.expirationYearElement),this.svgElement.append(this.svgImageElement,this.numberElement,this.holderElement,this.expirationElement),this.append(this.imageElement,this.svgElement),d(this,F,!1)),this.numberElement.textContent=this.cardNumber,this.holderElement.textContent=this.cardHolder,this.expirationMonthElement.textContent=this.cardExpirationMonth,this.expirationYearElement.textContent=this.cardExpirationYear}}u=new WeakMap,E=new WeakMap,f=new WeakMap,b=new WeakMap,F=new WeakMap;const G=[{opacity:0,transform:"translateX(4rem)",offset:0},{opacity:1,transform:"translateX(0)",offset:1}],R=[{opacity:1,transform:"translateX(0)",offset:0},{opacity:0,transform:"translateX(-4rem)",offset:1}],P={duration:300,easing:"ease-in-out"};var v,U;class Q extends HTMLFormElement{constructor(){super();o(this,v,void 0);o(this,U,!0);e(this,"appFormCardHolder",document.createElement("label",{is:"app-form-card-holder"}));e(this,"appFormCardNumber",document.createElement("label",{is:"app-form-card-number"}));e(this,"appFormCardExpirationDate",document.createElement("div",{is:"app-form-card-expiration"}));e(this,"appFormCardCvc",document.createElement("label",{is:"app-form-card-cvc"}));e(this,"buttonElement",document.createElement("button"));e(this,"formSuccessElement",document.createElement("div",{is:"app-form-success"}));this.handleButtonState=this.handleButtonState.bind(this),this.handleButtonClick=this.handleButtonClick.bind(this)}get isValid(){return i(this,v)===void 0?!1:i(this,v)}set isValid(t){d(this,v,t),this.isValid?(this.buttonElement.hasAttribute("disabled")&&this.buttonElement.removeAttribute("disabled"),this.buttonElement.classList.contains("form__button--disabled")&&this.buttonElement.classList.remove("form__button--disabled"),this.buttonElement.classList.contains("form__button--enabled")||this.buttonElement.classList.add("form__button--enabled")):(this.buttonElement.hasAttribute("disabled")||this.buttonElement.setAttribute("disabled",""),this.buttonElement.classList.contains("form__button--enabled")&&this.buttonElement.classList.remove("form__button--enabled"),this.buttonElement.classList.contains("form__button--disabled")||this.buttonElement.classList.add("form__button--disabled"))}connectedCallback(){i(this,U)&&(this.classList.add("form"),this.buttonElement.classList.add("form__button","form__button--disabled"),this.buttonElement.setAttribute("type","button"),this.buttonElement.setAttribute("disabled",""),this.buttonElement.textContent="Confirm",this.append(this.appFormCardHolder,this.appFormCardNumber,this.appFormCardExpirationDate,this.appFormCardCvc,this.buttonElement),d(this,U,!1)),this.addEventListener("update-form",this.handleButtonState),this.buttonElement.addEventListener("click",this.handleButtonClick)}disconnectedCallback(){this.removeEventListener("update-form",this.handleButtonState),this.buttonElement.removeEventListener("click",this.handleButtonClick)}handleButtonState(){this.appFormCardHolder.isValid&&this.appFormCardNumber.isValid&&this.appFormCardExpirationDate.isValid&&this.appFormCardCvc.isValid?this.isValid=!0:this.isValid=!1}handleButtonClick(){const t=this.animate(R,P);t.onfinish=()=>{this.replaceChildren(this.formSuccessElement),this.formSuccessElement.animate(G,P)}}}v=new WeakMap,U=new WeakMap;var C,k;class tt extends HTMLLabelElement{constructor(){super();o(this,C,void 0);o(this,k,!0);e(this,"labelElement",document.createElement("label"));e(this,"titleElement",document.createElement("span"));e(this,"inputContainerElement",document.createElement("span"));e(this,"inputElement",document.createElement("input"));e(this,"inputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));this.handleInputKeyUp=this.handleInputKeyUp.bind(this)}get isValid(){return i(this,C)===void 0?!1:i(this,C)}set isValid(t){d(this,C,t),this.isValid?(this.inputElement.classList.contains("form__input--error")&&this.inputElement.classList.remove("form__input--error"),this.appFormError.isConnected&&this.removeChild(this.appFormError)):(this.inputElement.classList.contains("form__input--error")||this.inputElement.classList.add("form__input--error"),this.appFormError.isConnected||this.append(this.appFormError))}connectedCallback(){i(this,k)&&(this.classList.add("form__section"),this.titleElement.classList.add("form__title"),this.inputContainerElement.classList.add("form__input-container"),this.inputElement.classList.add("form__input"),this.inputBorderElement.classList.add("form__input-border"),this.titleElement.textContent="card number",this.inputElement.setAttribute("type","text"),this.inputElement.setAttribute("name","cardNumber"),this.inputElement.setAttribute("placeholder","e.g. 1234 5678 9123 0000"),this.inputElement.setAttribute("required",""),this.inputElement.setAttribute("minlength","19"),this.inputElement.setAttribute("maxlength","19"),this.inputElement.setAttribute("pattern","^(?:[0-9]{4} ){3}[0-9]{4}$"),this.inputContainerElement.append(this.inputElement,this.inputBorderElement),this.append(this.titleElement,this.inputContainerElement),d(this,k,!1)),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(t){const n=t.target.value;if(typeof n=="string"){this.validateInput();const a=new CustomEvent("update-card-number",{bubbles:!0,detail:{cardNumber:n}}),l=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(l)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.tooShort?this.appFormError.message="Too short":this.inputElement.validity.tooLong?this.appFormError.message="Too long":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format, numbers only"))}}C=new WeakMap,k=new WeakMap;var g,M;class et extends HTMLLabelElement{constructor(){super();o(this,g,void 0);o(this,M,!0);e(this,"titleElement",document.createElement("span"));e(this,"inputContainerElement",document.createElement("span"));e(this,"inputElement",document.createElement("input"));e(this,"inputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));this.handleInputKeyUp=this.handleInputKeyUp.bind(this)}get isValid(){return i(this,g)===void 0?!1:i(this,g)}set isValid(t){d(this,g,t),this.isValid?(this.inputElement.classList.contains("form__input--error")&&this.inputElement.classList.remove("form__input--error"),this.appFormError.isConnected&&this.removeChild(this.appFormError)):(this.inputElement.classList.contains("form__input--error")||this.inputElement.classList.add("form__input--error"),this.appFormError.isConnected||this.append(this.appFormError))}connectedCallback(){i(this,M)&&(this.classList.add("form__section"),this.titleElement.classList.add("form__title"),this.inputContainerElement.classList.add("form__input-container"),this.inputElement.classList.add("form__input"),this.inputBorderElement.classList.add("form__input-border"),this.titleElement.textContent="cardholder name",this.inputElement.setAttribute("type","text"),this.inputElement.setAttribute("name","cardHolder"),this.inputElement.setAttribute("placeholder","e.g. Jane Appleseed"),this.inputElement.setAttribute("required",""),this.inputElement.setAttribute("pattern","^(?:[a-zA-Z]+ ){1,2}[a-zA-Z]+$"),this.inputContainerElement.append(this.inputElement,this.inputBorderElement),this.append(this.titleElement,this.inputContainerElement),d(this,M,!1)),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(t){const n=t.target.value;if(typeof n=="string"){this.validateInput();const a=new CustomEvent("update-card-holder",{bubbles:!0,detail:{holder:n}}),l=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(l)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format, letters and spaces only"))}}g=new WeakMap,M=new WeakMap;var _,y,V;class nt extends HTMLDivElement{constructor(){super();o(this,_,void 0);o(this,y,void 0);o(this,V,!0);e(this,"titleElement",document.createElement("div"));e(this,"rowElement",document.createElement("div"));e(this,"monthLabelElement",document.createElement("label"));e(this,"monthTitleElement",document.createElement("span"));e(this,"monthInputElement",document.createElement("input"));e(this,"monthInputBorderElement",document.createElement("span"));e(this,"yearLabelElement",document.createElement("label"));e(this,"yearTitleElement",document.createElement("span"));e(this,"yearInputElement",document.createElement("input"));e(this,"yearInputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));e(this,"isValid",!1);this.handleMonthInputKeyUp=this.handleMonthInputKeyUp.bind(this),this.handleYearInputKeyUp=this.handleYearInputKeyUp.bind(this)}get monthIsValid(){return i(this,_)===void 0?!1:i(this,_)}get yearIsValid(){return i(this,y)===void 0?!1:i(this,y)}set monthIsValid(t){d(this,_,t),this.monthIsValid?this.monthInputElement.classList.contains("form__input--error")&&this.monthInputElement.classList.remove("form__input--error"):this.monthInputElement.classList.contains("form__input--error")||this.monthInputElement.classList.add("form__input--error")}set yearIsValid(t){d(this,y,t),this.yearIsValid?this.yearInputElement.classList.contains("form__input--error")&&this.yearInputElement.classList.remove("form__input--error"):this.yearInputElement.classList.contains("form__input--error")||this.yearInputElement.classList.add("form__input--error")}connectedCallback(){i(this,V)&&(this.classList.add("form__section","form__section--row"),this.titleElement.classList.add("form__title"),this.rowElement.classList.add("form__row"),this.monthLabelElement.classList.add("form__input-container"),this.monthTitleElement.classList.add("form__hidden-title"),this.monthInputElement.classList.add("form__input","form__input--uppercase"),this.monthInputBorderElement.classList.add("form__input-border"),this.yearLabelElement.classList.add("form__input-container"),this.yearTitleElement.classList.add("form__hidden-title"),this.yearInputElement.classList.add("form__input","form__input--uppercase"),this.yearInputBorderElement.classList.add("form__input-border"),this.monthInputElement.setAttribute("type","text"),this.monthInputElement.setAttribute("name","cardExpirationMonth"),this.monthInputElement.setAttribute("placeholder","mm"),this.monthInputElement.setAttribute("required",""),this.monthInputElement.setAttribute("minlength","2"),this.monthInputElement.setAttribute("maxlength","2"),this.monthInputElement.setAttribute("pattern","^0[0-9]$|^1[0-2]$"),this.yearInputElement.setAttribute("type","text"),this.yearInputElement.setAttribute("name","cardExpirationYear"),this.yearInputElement.setAttribute("placeholder","yy"),this.yearInputElement.setAttribute("required",""),this.yearInputElement.setAttribute("minlength","2"),this.yearInputElement.setAttribute("maxlength","2"),this.yearInputElement.setAttribute("pattern","^[2-9][2-9]$"),this.titleElement.textContent="exp. date (mm/yy)",this.monthTitleElement.textContent="expiration month",this.yearTitleElement.textContent="expiration year",this.monthLabelElement.append(this.monthTitleElement,this.monthInputElement,this.monthInputBorderElement),this.yearLabelElement.append(this.yearTitleElement,this.yearInputElement,this.yearInputBorderElement),this.rowElement.append(this.monthLabelElement,this.yearLabelElement),this.append(this.titleElement,this.rowElement),d(this,V,!1)),this.monthInputElement.addEventListener("keyup",this.handleMonthInputKeyUp),this.yearInputElement.addEventListener("keyup",this.handleYearInputKeyUp)}disconnectedCallback(){this.monthInputElement.removeEventListener("keyup",this.handleMonthInputKeyUp),this.yearInputElement.removeEventListener("keyup",this.handleYearInputKeyUp)}handleMonthInputKeyUp(t){const n=t.target.value;if(typeof n=="string"){this.validateInputs();const a=new CustomEvent("update-card-expiration-date-month",{bubbles:!0,detail:{cardExpirationMonth:n}}),l=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(l)}else throw new Error("the event value is not a string")}handleYearInputKeyUp(t){const n=t.target.value;if(typeof n=="string"){this.validateInputs();const a=new CustomEvent("update-card-expiration-date-year",{bubbles:!0,detail:{cardExpirationYear:n}}),l=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(l)}else throw new Error("the event value is not a string")}validateInputs(){const t=this.monthInputElement.validity.valid,n=this.yearInputElement.validity.valid;this.monthIsValid=t,this.yearIsValid=n,t&&n?(this.appFormError.isConnected&&this.removeChild(this.appFormError),this.isValid=!0):(this.appFormError.isConnected||this.append(this.appFormError),this.isValid=!1,this.monthInputElement.validity.valueMissing||this.yearInputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.monthInputElement.validity.tooShort||this.yearInputElement.validity.tooShort?this.appFormError.message="Too short":(this.monthInputElement.validity.patternMismatch||this.yearInputElement.validity.patternMismatch)&&(this.appFormError.message="Wrong format, dates only"))}}_=new WeakMap,y=new WeakMap,V=new WeakMap;var x,T;class it extends HTMLLabelElement{constructor(){super();o(this,x,void 0);o(this,T,!0);e(this,"titleElement",document.createElement("span"));e(this,"inputContainerElement",document.createElement("span"));e(this,"inputElement",document.createElement("input"));e(this,"inputBorderElement",document.createElement("span"));e(this,"appFormError",document.createElement("p",{is:"app-form-error"}));this.handleInputKeyUp=this.handleInputKeyUp.bind(this)}get isValid(){return i(this,x)===void 0?!1:i(this,x)}set isValid(t){d(this,x,t),this.isValid?(this.inputElement.classList.contains("form__input--error")&&this.inputElement.classList.remove("form__input--error"),this.appFormError.isConnected&&this.removeChild(this.appFormError)):(this.inputElement.classList.contains("form__input--error")||this.inputElement.classList.add("form__input--error"),this.appFormError.isConnected||this.append(this.appFormError))}connectedCallback(){i(this,T)&&(this.classList.add("form__section","form__section--row"),this.titleElement.classList.add("form__title"),this.inputContainerElement.classList.add("form__input-container"),this.inputElement.classList.add("form__input"),this.inputBorderElement.classList.add("form__input-border"),this.titleElement.textContent="cvc",this.inputElement.setAttribute("type","text"),this.inputElement.setAttribute("name","cardCvc"),this.inputElement.setAttribute("placeholder","e.g. 123"),this.inputElement.setAttribute("required",""),this.inputElement.setAttribute("minlength","3"),this.inputElement.setAttribute("maxlength","3"),this.inputElement.setAttribute("pattern","^[0-9]{3}$"),this.inputContainerElement.append(this.inputElement,this.inputBorderElement),this.append(this.titleElement,this.inputContainerElement),d(this,T,!1)),this.inputElement.addEventListener("keyup",this.handleInputKeyUp)}disconnectedCallback(){this.inputElement.removeEventListener("keyup",this.handleInputKeyUp)}handleInputKeyUp(t){const n=t.target.value;if(typeof n=="string"){this.validateInput();const a=new CustomEvent("update-card-cvc",{bubbles:!0,detail:{cardCvc:n}}),l=new CustomEvent("update-form",{bubbles:!0});this.dispatchEvent(a),this.dispatchEvent(l)}else throw new Error("the event value is not a string")}validateInput(){this.inputElement.validity.valid?this.isValid=!0:(this.isValid=!1,this.inputElement.validity.valueMissing?this.appFormError.message="Can't be blank":this.inputElement.validity.tooShort?this.appFormError.message="Too short":this.inputElement.validity.tooLong?this.appFormError.message="Too long":this.inputElement.validity.patternMismatch&&(this.appFormError.message="Wrong format, numbers only"))}}x=new WeakMap,T=new WeakMap;var L,N;class st extends HTMLParagraphElement{constructor(){super();o(this,L,void 0);o(this,N,!0)}get message(){return i(this,L)===void 0?"":i(this,L)}set message(t){d(this,L,t),this.textContent=this.message}connectedCallback(){i(this,N)&&(this.classList.add("form__error"),d(this,N,!1))}}L=new WeakMap,N=new WeakMap;const rt="/interactive-card-details-form/assets/icon-complete.0e154f18.svg";var B;class at extends HTMLDivElement{constructor(){super();o(this,B,!0);e(this,"imageElement",document.createElement("img"));e(this,"titleElement",document.createElement("h2"));e(this,"descriptionElement",document.createElement("p"));e(this,"buttonElement",document.createElement("button"))}connectedCallback(){i(this,B)&&(this.classList.add("success-view","form__section"),this.imageElement.classList.add("success-view__icon"),this.titleElement.classList.add("success-view__title"),this.descriptionElement.classList.add("success-view__description"),this.buttonElement.classList.add("success-view__button"),this.imageElement.setAttribute("src",rt),this.imageElement.setAttribute("draggable","false"),this.imageElement.setAttribute("alt","Icon complete"),this.buttonElement.setAttribute("type","button"),this.titleElement.textContent="thank you!",this.descriptionElement.textContent="We've added your card details",this.buttonElement.textContent="Continue",this.append(this.imageElement,this.titleElement,this.descriptionElement,this.buttonElement),d(this,B,!1))}}B=new WeakMap;customElements.define("app-root",q,{extends:"main"});customElements.define("app-card",O,{extends:"div"});customElements.define("app-card-back",W,{extends:"div"});customElements.define("app-card-front",Z,{extends:"div"});customElements.define("app-form",Q,{extends:"form"});customElements.define("app-form-card-holder",et,{extends:"label"});customElements.define("app-form-card-number",tt,{extends:"label"});customElements.define("app-form-card-expiration",nt,{extends:"div"});customElements.define("app-form-card-cvc",it,{extends:"label"});customElements.define("app-form-error",st,{extends:"p"});customElements.define("app-form-success",at,{extends:"div"});const lt=document.getElementById("app"),ot=document.createElement("main",{is:"app-root"});lt.append(ot);