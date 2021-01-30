---
layout: page.11ty.cjs
title: <wh-input-number> ⌲ Home
---

# &lt;wh-input-number>

`<wh-input-number>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<wh-input-number>` is just an HTML element. You can it anywhere you can use HTML!

```html
<wh-input-number></wh-input-number>
```

  </div>
  <div>

<wh-input-number></wh-input-number>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<wh-input-number>` can be configured with attributed in plain HTML.

```html
<wh-input-number name="HTML"></wh-input-number>
```

  </div>
  <div>

<wh-input-number name="HTML"></wh-input-number>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<wh-input-number>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;wh-input-number&gt;</h2>
  <wh-input-number .name=${name}></wh-input-number>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;wh-input-number&gt;</h2>
<wh-input-number name="lit-html"></wh-input-number>

  </div>
</section>
