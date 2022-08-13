import "./main.css";

import AppRoot from "@components/app-root";
import AppCard from "@components/app-card";
import AppCardBack from "@components/app-card-back";
import AppCardFront from "@components/app-card-front";
import AppForm from "@components/app-form";
import AppFormCardNumber from "@components/app-form-card-number";
import AppFormCardHolder from "@components/app-form-card-holder";
import AppFormCardExpirationDate from "@components/app-form-card-expiration-date";
import AppFormCardCvc from "@components/app-form-card-cvc";
import AppFormError from "@components/app-form-error";

customElements.define("app-root", AppRoot);
customElements.define("app-card", AppCard);
customElements.define("app-card-back", AppCardBack);
customElements.define("app-card-front", AppCardFront);
customElements.define("app-form", AppForm);
customElements.define("app-form-card-holder", AppFormCardHolder);
customElements.define("app-form-card-number", AppFormCardNumber);
customElements.define("app-form-card-expiration-date", AppFormCardExpirationDate);
customElements.define("app-form-card-cvc", AppFormCardCvc);
customElements.define("app-form-error", AppFormError);

const app = document.getElementById("app");
const appRoot = document.createElement("app-root");

app.append(appRoot);