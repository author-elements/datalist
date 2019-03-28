class AuthorDatalistElement extends AuthorMenuElement {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.defineAttributes({
      'case-sensitive': false
    })

    this.UTIL.definePrivateMethods({
      hideAllOptions: () => Array.from(this.options).forEach(option => option.setAttribute('hidden', '')),

      inputFocusHandler: evt => {
        this.inputElement.addEventListener('keydown', this.PRIVATE.inputKeydownHandler)
      },

      clearFilter: () => {
        if (this.optionsElement.hasFilter('query')) {
          this.optionsElement.removeFilter('query')
          this.selectedIndex = -1
        }
      },

      filterInput: () => {
        this.PRIVATE.clearFilter()

        let query = this.inputElement.value

        if (!query || query === '') {
          this.PRIVATE.showAllOptions()
          return this.PRIVATE.clearFilter()
        }

        this.optionsElement.addFilter('query', () => {
          let results = this.optionsElement.find(query, this['case-sensitive'])

          if (results.length) {
            return results
          }

          return this.options
        })

        this.PRIVATE.hideAllOptions()
        this.optionsElement.filteredOptions.forEach(option => option.hidden = false)
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
              this.open = false
            }

            break
        }

        this.PRIVATE.keydownHandler(evt)
      },

      showAllOptions: () => Array.from(this.options).forEach(option => option.removeAttribute('hidden'))
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        this.UTIL.registerListeners(this.inputElement, {
          focus: this.PRIVATE.inputFocusHandler,

          blur: evt => {
            this.inputElement.removeEventListener('keydown', this.PRIVATE.inputKeydownHandler)
          },

          click: evt => this.open = true,

          input: this.PRIVATE.filterInput
        })
      },

      'options.selected': evt => {
        let option = evt.detail.options[0]
        this.inputElement.value = option.value
        this.PRIVATE.filterInput()
        this.emit('option.selected', option.displayElement)
      }
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
  }

  clear () {
    this.inputElement.value = ''
    this.PRIVATE.showAllOptions()
  }

  focus () {
    this.inputElement.focus()
  }

  inject (input, select, guid) {
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
    super.inject(select)
  }
}

customElements.define('author-datalist', AuthorDatalistElement)

export default AuthorDatalistElement
