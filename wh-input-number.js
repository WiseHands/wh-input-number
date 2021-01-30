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
      :host {
        display: flex;
        padding: 16px;
        
      }
      .number-input {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      label {
			  font-size: 15px;
			  padding: 0 0 2px 15px;
			}
      input {
 			  font-size: 20px;
 			  border: none;
				border-bottom: 1px solid gray;
      }
    `;
  }
	
	render() {
		return html`
      <div class="number-input">
		    <label>Only number</label>
		    <input placeholder="-123.0">
			</div>
    
    `;
	}

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  

  _onClick() {
    this.count++;
  }
}

window.customElements.define('wh-input-number', WhInputNumber);
