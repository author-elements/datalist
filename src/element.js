class AuthorDatalistElement extends AuthorMenuElement {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.defineProperties({
      clickCount: {
        private: true,
        default: 0
      }
    })

    this.UTIL.defineAttributes({
      'case-sensitive': false
    })

    this.UTIL.definePrivateMethods({
      find: query => (Array.from(this.options).filter(option => {
        let value = this.hasAttribute('case-sensitive') ? option.value : option.value.toLowerCase()
        let text = this.hasAttribute('case-sensitive') ? option.text : option.text.toLowerCase()
        query = this.hasAttribute('case-sensitive') ? query : query.toLowerCase()

        return value.indexOf(query) >= 0 || text.indexOf(query) >= 0
      })),

      hideAllOptions: () => Array.from(this.options).forEach(option => option.setAttribute('hidden', '')),

      inputFocusHandler: evt => {
        this.inputElement.addEventListener('keydown', this.PRIVATE.inputKeydownHandler)
      },

      inputKeydownHandler: evt => {
        if (!this.open) {
          this.PRIVATE.showAllOptions()
          this.open = true
          return
        }

        this.PRIVATE.keydownHandler(evt)
      },

      showAllOptions: () => Array.from(this.options).forEach(option => option.removeAttribute('hidden'))
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        this.inputElement.addEventListener('focus', this.PRIVATE.inputFocusHandler)

        this.UTIL.registerListeners(this.inputElement, {
          blur: evt => {
            this.PRIVATE.clickCount = 0
            this.inputElement.removeEventListener('keydown', this.PRIVATE.inputKeydownHandler)
          },

          click: evt => {
            this.PRIVATE.clickCount++

            if (this.PRIVATE.clickCount === 2) {
              this.PRIVATE.showAllOptions()
              this.open = true
            }
          },

          input: evt => {
            this.PRIVATE.hideAllOptions()
            let query = this.inputElement.value

            if (!query) {
              return
            }

            let results = this.PRIVATE.find(query)

            if (results.length) {
              results.forEach(result => result.removeAttribute('hidden'))
              this.open = true
              return
            }

            if (this.open) {
              this.open = false
            }

            this.PRIVATE.hideAllOptions()
          }
        })
      },

      disconnected: () => {
        this.inputElement.removeEventListener('focus', this.PRIVATE.inputFocusHandler)
      },

      'options.selected': evt => this.inputElement.value = evt.detail.options[0].value
    })
  }

  static get observedAttributes () {
    return [...AuthorMenuElement.observedAttributes, 'case-sensitive']
  }

  get value () {
    return this.inputElement.value
  }

  add (option, index) {
    this.optionsElement.addOption(option, index)
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

  inject (input, datalist, guid) {
    // Prevent re-injections
    if (this.PRIVATE.injected) {
      return
    }

    input.slot = 'input'
    input.id = guid

    this.UTIL.defineProperty('inputElement', {
      readonly: true,
      default: input
    })

    this.appendChild(this.inputElement)
    super.inject(datalist)
  }
}

customElements.define('author-datalist', AuthorDatalistElement)

export default AuthorDatalistElement
