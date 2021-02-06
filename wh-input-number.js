import {LitElement, html, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class WhInputNumber extends LitElement {

  static get styles() {
    return css`
      * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

      input {
        box-sizing: border-box;
        padding: 0px 12px;
        width: 100%;
        height: 56px;
        background: #fff;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        position: relative;
        font-size: 16pt;
        z-index: 1;
        -webkit-appearance: none;
        transition: border 0.2s cubic-bezier(1, 0, 0, 1);
      }
      input:focus {
        outline: none;
        border: 1px solid #6200ee;
      }
      input:focus ~ label {
        color: #6200ee;
        font-weight: 500;
      }     
      label {
        z-index: 2;
        position: absolute;
        top: 18px;
        left: 2px;
        color: #222;
        background: #fff;
        transition: transform 0.2s cubic-bezier(1, 0, 0, 1), font-size 0.2s cubic-bezier(1, 0, 0, 1), color 0.2s cubic-bezier(1, 0, 0, 1);
        transform: translate(4px, -27px);
        font-size: 12px;
        pointer-events: none;
      }
      label,
      label supports:placeholder-shown {
        transform: translate(0px, 0px);
        font-size: 1rem;
        color: rgba(0,0,0,.6);
        padding: 0 4px;
      }
      input:focus ~ label,
      input:not(:placeholder-shown) ~ label {
        transform: translate(4px, -27px);
        font-size: 12px;
      }
      .input-container {
        position: relative;
        margin-top: 12px;
      }   
      .error-span {
          color: red;
          min-height: 1.2em;
      }         
    `;
  }
	
	render() {
    return html`
      <link rel="stylesheet" href="node_modules/material-icons/iconfont/material-icons.css">
      <span class="material-icons">home</span>
      <div class="input-container">        
        <input id=${this.name} type="text" .value=${this.value} name=${this.name} 
          pattern="^[0-9]*\.?[0-9]*$" placeholder="-123.0"
          @input=${(event)=> { this.value = event.target.value; this.validateInput(event) }}
          required           
        >    
        <label for=${this.name}><slot></slot></label>    
      </div>
      <span class="error-span" >${this.errorMessage}</span>
    
    `;
	}

  static get properties() {
    return {
      errorMessage: {
        type: String,
        value: ''
      },
      value: String,
      name: String
    };
  }

  

  constructor() {
    
    super();
    if (this.value == undefined) {
      this.value = '';
    }    
  } 
  
  validateInput() {
    const isMath = /^[-+]?\d+(\.\d+)?$/.test(this.value)
    
    if (!isMath) {
      this.showValidation();
    } else {
      this.errorMessage = '';
    }
    
  }

  showValidation() {
    this.errorMessage = 'Only numbers';
  }

}

window.customElements.define('wh-input-number', WhInputNumber);
