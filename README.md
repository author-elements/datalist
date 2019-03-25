# AuthorDatalistElement [![](https://data.jsdelivr.com/v1/package/npm/@author.io/element-datalist/badge)](https://www.jsdelivr.com/package/npm/@author.io/element-datalist?path=dist) [![Build Status](https://travis-ci.org/author-elements/datalist.svg?branch=master&style=for-the-badge)](https://travis-ci.org/author-elements/datalist)

`author-datalist` is a fully-stylable datalist component. It is designed to match the functionality of browser default datalists while providing flexibility for customization if desired.

`author-datalist` is broken down into several components:

- `author-selected-options`
- `author-options`
- `author-option`

This allows each part of the component to be styled directly. Each of these components can also be used standalone in other applications as well.

![Source Size](https://img.shields.io/github/size/author-elements/datalist/src/element.js.svg?colorB=%23333333&label=Source&logo=JavaScript&logoColor=%23aaaaaa&style=for-the-badge) ![Deliverable Size](https://img.shields.io/bundlephobia/minzip/@author.io/element-datalist.svg?colorB=%23333333&label=Minified-Gzipped&logo=JavaScript&style=for-the-badge) ![npm](https://img.shields.io/npm/v/@author.io/element-datalist.svg?colorB=%23333&label=%40author.io%2Felement-datalist&logo=npm&style=for-the-badge)

We're using BrowserStack to make sure these components work on the browsers developers care about.

<a href="https://browserstack.com"><img src="https://github.com/author-elements/datalist/raw/master/browserstack.png" height="30px"/></a>

## Usage

There are 4 versions of this element:

1. *author-datalist.min.js* (ES6 Minified for Production)
1. _author-datalist.js_ (ES6 Unminified for Debugging)
1. *author-datalist.es5.min.js* (ES5 Minified for Production)
1. _author-datalist.es5.js_ (ES5 Unminified for Debugging)

You only need to choose one of these files. If you need to support Internet Explorer, older versions of Chrome/Firefox/Safari, then you likely need the ES5 version. Each version has it's own source map, so it's always possible to trace activity back to a specific code block in the source.

The simplest way to use `author-datalist` is in combination with [author-control](https://github.com/author-elements/control). This combination makes it simple to create totally stylable datalists. Placing a `datalist` tag inside an `author-control` will automatically generate a fully-functional `author-datalist` element and pair it with a label if provided.

*Via Global CDN*

```html
<html>
  <head>
    <script src="https://cdn.author.io/author-elements/base/1.0.0/author-base.min.js"></script>
    <script src="https://cdn.author.io/author-elements/datalist/x.x.x/author-datalist.min.js"></script>
  </head>
</html>
```

*Via npm*

1. If the [base class](https://github.com/author-elements/base) is not yet installed, install it:

`npm install @author.io/element-base -S`

2. Next, install the datalist module locally:

`npm install @author.io/element-datalist -S`

3. If using with [`author-control`](https://github.com/author-elements/control), install it:

`npm install @author.io/element-control -S`

4. Then include the components in your HTML:

```html
<html>
  <head>
    <script src="./node_modules/@author.io/element-base/dist/author-base.min.js"></script>
    <script src="./node_modules/@author.io/element-base/dist/author-control.min.js"></script>
    <script src="./node_modules/@author.io/element-datalist/dist/author-datalist.min.js"></script>
  </head>

  <body>
    <author-control>
      <label>Basic Datalist</label>
      <input type="text" placeholder="Enter your search query">
      <datalist [placeholder="datalist an Option"]>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </datalist>
    </author-control>
  </body>
</html>
```

If using without `author-control`, lay out `author-datalist` manually using the following markup:

```html
<author-datalist>
  <!-- <slot name="afterbegin"></slot> -->

  <!-- <slot name="beforeinput"></slot> -->
  <input slot="input" type="text" placeholder="Enter your search query">
  <!-- <slot name="afterinput"></slot> -->

  <!-- <slot name="beforeselectedoptions"></slot> -->
  <author-selected-options slot="selectedoptions"></author-selected-options>
  <!-- <slot name="beforeselectedoptions"></slot> -->

  <!-- <slot name="beforeoptions"></slot> -->
  <author-options slot="options">
    <author-option value="Option 1">Option 1</author-option>
    <author-option value="Option 2">Option 2</author-option>
    <author-option value="Option 3">Option 3</author-option>
  </author-options>
  <!-- <slot name="afteroptions"></slot> -->

  <!-- <slot name="beforeend"></slot> -->
</author-datalist>
```

Additional elements can be added to the various slots within the markup if desired.

## Customization and Styling
`author-datalist` is optimized for use with [NGN Chassis](https://github.com/ngn-chassis), a PostCSS-powered CSS Framework and Preprocessor. If using `author-datalist` separately, it and all its child elements can be styled directly with CSS. For a quick start, download the <a href="#">default theme</a>.

The child elements of `author-datalist` can also be used independently to create customized UI components. See also [author-datalist](https://github.com/author-elements/datalist).
