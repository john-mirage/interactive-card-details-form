import "./main.css";

import AppRoot from "@components/app-root";
import AppCard from "@components/app-card";
import AppCardBack from "@components/app-card-back";
import AppCardFront from "@components/app-card-front";
import AppForm from "@components/app-form";
import AppFormCardNumber from "@components/app-form-card-number";
import AppFormCardHolder from "@components/app-form-card-holder";
import AppFormCardExpiration from "@components/app-form-card-expiration";
import AppFormCardCvc from "@components/app-form-card-cvc";
import AppFormError from "@components/app-form-error";
import AppFormSuccess from "@components/app-form-success";

customElements.define("app-root", AppRoot, { extends: "main" });
customElements.define("app-card", AppCard, { extends: "div" });
customElements.define("app-card-back", AppCardBack, { extends: "div" });
customElements.define("app-card-front", AppCardFront, { extends: "div" });
customElements.define("app-form", AppForm, { extends: "form" });
customElements.define("app-form-card-holder", AppFormCardHolder, { extends: "label" });
customElements.define("app-form-card-number", AppFormCardNumber, { extends: "label" });
customElements.define("app-form-card-expiration", AppFormCardExpiration, { extends: "div" });
customElements.define("app-form-card-cvc", AppFormCardCvc, { extends: "label" });
customElements.define("app-form-error", AppFormError, { extends: "p" });
customElements.define("app-form-success", AppFormSuccess, { extends: "div" });

const app = document.getElementById("app");
const appRoot = document.createElement("app-root");

app.append(appRoot);