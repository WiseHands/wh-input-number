/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

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
    `;
  }
	
	render() {
		return html`
      <div class="input-container">
        <input .value=${this.value}  type="${this.type}" name=${this.name} id=${this.name} placeholder="-123.0"
          @input=${(e)=> { this.value = e.target.value; this.validateInput() }}           
        >
        <label for=${this.name}><slot></slot></label>
			</div>
    
    `;
	}

  static get properties() {
    return {
      type: Number,
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
    console.log("inside input", this.value);
  }

}

window.customElements.define('wh-input-number', WhInputNumber);
