import {MyElement} from '../wh-input-number.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('wh-input-number', () => {
  test('is defined', () => {
    const el = document.createElement('wh-input-number');
    assert.instanceOf(el, MyElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<wh-input-number></wh-input-number>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<wh-input-number name="Test"></wh-input-number>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<wh-input-number></wh-input-number>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
