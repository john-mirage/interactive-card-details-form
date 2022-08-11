import "./main.css";

import AppRoot from "@components/app-root";
import AppCard from "@components/app-card";
import AppForm from "@components/app-form";

customElements.define("app-root", AppRoot);
customElements.define("app-card", AppCard);
customElements.define("app-form", AppForm);

const app = document.getElementById("app");
const appRoot = document.createElement("app-root");

app.append(appRoot);