import { LitElement, html, css } from "lit";
import { randomNum } from "./lib/random.js";

console.log("init");

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
