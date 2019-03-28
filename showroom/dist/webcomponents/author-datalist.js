// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-datalist v1.0.1 available at github.com/author-elements/datalist
// Last Build: 3/27/2019, 6:30:16 PM
var AuthorDatalistElement = (function () {
  'use strict';

  if (!window.hasOwnProperty('AuthorBaseElement')) {
              console.error('[ERROR] <author-datalist> Required dependency "AuthorBaseElement" not found.');
              console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
            }
          (function () {
            let missingDependencies = Array.from(new Set(['author-menu','author-options','author-option'])).filter(dep => !customElements.get(dep));
            if (missingDependencies.length > 0) {
              console.error(`[ERROR] <author-datalist> Required dependenc${missingDependencies.length !== 1 ? 'ies' : 'y'} not found: ${missingDependencies.map(d => `<${d}>`).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])}`);
              missingDependencies.forEach((dep, i) => console.info(`${i+1}. <${dep}> is available at ${'https://github.com/author-elements/datalist'.replace('datalist', dep.replace('author-', ''))}`));
            }
          })();
          class AuthorDatalistElement extends AuthorMenuElement {
    constructor () {
      super(`<template><style>@charset "UTF-8"; :host{display:inline-flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(author-options){height:0;overflow:hidden}:host([open]) ::slotted(author-options){height:auto}author-datalist{display:inline-flex;max-width:100%}author-datalist *,author-datalist :after,author-datalist :before{box-sizing:border-box}author-datalist author-options{height:0;overflow:hidden}author-datalist[open] author-options{height:auto}</style><slot name="afterbegin"></slot><slot name="beforeinput"></slot><slot name="input"></slot><slot name="afterinput"></slot><slot name="beforeselectedoptions"></slot><slot name="selectedoptions"></slot><slot name="afterselectedoptions"></slot><slot name="beforeoptions"></slot><slot name="options"></slot><slot name="afteroptions"></slot><slot name="beforeend"></slot></template>`);

      this.UTIL.defineAttributes({
        'case-sensitive': false
      });

      this.UTIL.definePrivateMethods({
        hideAllOptions: () => Array.from(this.options).forEach(option => option.setAttribute('hidden', '')),

        inputFocusHandler: evt => {
          this.inputElement.addEventListener('keydown', this.PRIVATE.inputKeydownHandler);
        },

        clearFilter: () => {
          if (this.optionsElement.hasFilter('query')) {
            this.optionsElement.removeFilter('query');
            this.selectedIndex = -1;
          }
        },

        filterInput: () => {
          this.PRIVATE.clearFilter();

          let query = this.inputElement.value;

          if (!query || query === '') {
            this.PRIVATE.showAllOptions();
            return this.PRIVATE.clearFilter()
          }

          this.optionsElement.addFilter('query', () => {
            let results = this.optionsElement.find(query, this['case-sensitive']);

            if (results.length) {
              return results
            }

            return this.options
          });

          this.PRIVATE.hideAllOptions();
          this.optionsElement.filteredOptions.forEach(option => option.hidden = false);
        },

        inputKeydownHandler: evt => {
          switch (evt[this.keySource]) {
            case 13:
            case 'Enter':
            case 27:
            case 'Escape':
            case 38:
            case 'ArrowUp':
            case 40:
            case 'ArrowDown': break

            case 32:
            case ' ': return

            case 8:
            case 'Backspace':
              if (this.inputElement.value.length === 1) {
                this.open = false;
              }

              break
          }

          this.PRIVATE.keydownHandler(evt);
        },

        showAllOptions: () => Array.from(this.options).forEach(option => option.removeAttribute('hidden'))
      });

      this.UTIL.registerListeners(this, {
        connected: () => {
          this.UTIL.registerListeners(this.inputElement, {
            focus: this.PRIVATE.inputFocusHandler,

            blur: evt => {
              this.inputElement.removeEventListener('keydown', this.PRIVATE.inputKeydownHandler);
            },

            click: evt => this.open = true,

            input: this.PRIVATE.filterInput
          });
        },

        'options.selected': evt => {
          this.inputElement.value = evt.detail.options[0].value;
          this.PRIVATE.filterInput();
        }
      });
    }

    static get observedAttributes () {
      return [...AuthorMenuElement.observedAttributes, 'case-sensitive']
    }

    get value () {
      return this.inputElement.value
    }

    add (option, index) {
      this.optionsElement.addOption(option, index);
      // if (!customElements.get('author-option')) {
      //   return console.error(`author-datalist requires author-option. Please include it in this document's <head> element.`)
      // }
      //
      // if (!option.hasOwnProperty('id')) {
      //   option.id = this.PRIVATE.generateGuid('option')
      // }
      //
      // if (!option.hasOwnProperty('sourceElement') || !(option.sourceElement instanceof HTMLElement)) {
      //   let sourceEl = document.createElement('option')
      //
      //   if (option.hasOwnProperty('innerHTML')) {
      //     sourceEl.innerHTML = option.innerHTML
      //   }
      //
      //   if (option.hasOwnProperty('label')) {
      //     sourceEl.innerHTML = option.label
      //   }
      //
      //   if (option.hasOwnProperty('value')) {
      //     sourceEl.value = option.value
      //   }
      //
      //   if (option.hasOwnProperty('disabled')) {
      //     sourceEl.disabled = typeof option.disabled === 'boolean' && option.disabled
      //   }
      //
      //   option.sourceElement = sourceEl
      // }
      //
      // let label = option.sourceElement.getAttribute('label') || option.sourceElement.textContent.trim()
      // let value = option.sourceElement.getAttribute('value')
      // let disabled = option.sourceElement.disabled
      // let authorOption = document.createElement('author-option')
      //
      // authorOption.style.display = 'none'
      // authorOption.key = option.id
      // authorOption.innerHTML = option.sourceElement.innerHTML
      //
      // dest.appendChild(authorOption)
      // authorOption.addEventListener('click', evt => this.select(authorOption.key))
      //
      // option = {
      //   attributes: { disabled, label, value },
      //   id: option.id,
      //   displayElement: authorOption,
      //   sourceElement: option.sourceElement
      // }
      //
      // if (index) {
      //   this[`${index}`] = option.sourceElement
      //   this.options.splice(index, 0, option)
      //   return
      // }
      //
      // this[`${this.options.length}`] = option.sourceElement
      // this.options.push(option)
    }

    inject (input, select, guid) {
      // Prevent re-injections
      if (this.PRIVATE.injected) {
        return
      }

      input.slot = 'input';
      input.id = guid;

      this.UTIL.defineProperty('inputElement', {
        readonly: true,
        default: input
      });

      this.appendChild(this.inputElement);
      super.inject(select);
    }
  }

  customElements.define('author-datalist', AuthorDatalistElement);

  return AuthorDatalistElement;

}());
//# sourceMappingURL=author-datalist.js.map
