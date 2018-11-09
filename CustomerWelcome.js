import {LitElement, html} from '@polymer/lit-element';

export class CustomerWelcome extends LitElement {

     
    static get properties() {
        return {
          welcomeCounter: Number
        };
      }

      welcomeMessage() {
        if (this.welcomeCounter == 0)
        {
          return "Thanks for coming first time visitor!"; 
        }
        else
        {
          return `Thanks for visiting, you have been here: ${this.welcomeCounter} times`; 
        }
      }
      
      constructor() {
        super();
        this.mood = 'happy';
        let storageCounter = window.localStorage.getItem("welcome-counter");
        if (storageCounter == null)
        {
            this.welcomeCounter = 0;
        }
        else{
            this.welcomeCounter = parseInt(storageCounter);
            this.welcomeCounter = this.welcomeCounter + 1;
        }
        window.localStorage.setItem("welcome-counter", this.welcomeCounter);
       
      }

      
      render() {
        return html`
        <style>
          p.welcome-display {
            display: block;
            padding: 20px;
            border-radius: 5px;
            font-size: 3em;
            border: 1px solid #212121;
            color: #212121;
            background: #fff;
          }
      
          p {
            background: #eb6;
            color: #212121;
            padding: 5px;
          }
        </style>
        <p class="welcome-display">
          <span id="welcome">${this.welcomeMessage()}</span>
        </p>
        <p>
          <!-- A custom description that can be overridden in markup -->
          <slot name="welcome-description">Default welcome description, note the style</slot>
        </p>
      `;
      }

      firstUpdated(changedProperties) {
        console.log("firstUpdated called")

      }

      updated(changedProperties){
          console.log("updated called")
      }

    
    }
    
    customElements.define("customer-welcome", CustomerWelcome);