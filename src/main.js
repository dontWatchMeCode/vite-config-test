import { LitElement, html, css } from "lit";
import { randomNum } from "./lib/random.js";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/scss/bootstrap.scss";


console.log("init");

Fancybox.bind("[data-fancybox]", {});

class MyElement extends LitElement {
    static get styles() {
        return css`
        span {
            color: green;
        }
    `;
    }

    static get properties() {
        return {
            mood: { type: String },
        };
    }

    constructor() {
        super();
        this.mood = "great" + randomNum(1, 100);
    }

    render() {
        return html`Web Components are <span>${this.mood}</span>!`;
    }
}

customElements.define("my-element", MyElement);
