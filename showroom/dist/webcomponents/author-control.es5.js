// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-control v1.0.15 available at github.com/author-elements/control
// Last Build: 4/6/2019, 3:13:30 AM
var AuthorFormControlElement = (function () {
  'use strict';

  if (!window.hasOwnProperty('AuthorBaseElement')) {
              console.error('[ERROR] <author-control> Required dependency "AuthorBaseElement" not found.');
              console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
            }
          var AuthorFormControlElement = /*@__PURE__*/(function (superclass) {
              function AuthorFormControlElement () {
      var this$1 = this;

      superclass.call(this, "<template><style>@charset \"UTF-8\"; :host{display:block;contain:style;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}author-control{display:block;contain:style;max-width:100%}author-control *,author-control :after,author-control :before{box-sizing:border-box}</style><slot></slot></template>");

      this.UTIL.defineAttributes({
        type: ''
      });

      this.UTIL.defineProperties({
        initialized: {
          private: true,
          default: false
        },

        initialValue: {
          default: null
        },

        labels: {
          readonly: true,
          get: function () { return this$1.PRIVATE.labelElements; }
        },

        labelElements: {
          private: true,
          default: []
        },

        datalist: {
          readonly: true,
          get: function () { return this$1.PRIVATE.datalistElement; }
        },

        datalistElement: {
          private: true,
          default: null
        },

        datalistSourceElement: {
          private: true,
          default: null
        },

        input: {
          readonly: true,
          get: function () { return this$1.PRIVATE.inputElement; }
        },

        inputElement: {
          private: true,
          default: null
        },

        inputSourceElement: {
          private: true,
          default: null
        },

        fieldInputTypes: {
          readonly: true,
          private: true,
          default: [
            'color',
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week',
            'textarea'
          ]
        },

        toggleInputTypes: {
          readonly: true,
          private: true,
          default: [
            'checkbox',
            'radio'
          ],
        },

        supportedTypes: {
          readonly: true,
          private: true,
          default: [
            'field',
            'toggle',
            'select'
          ]
        }
      });

      this.UTIL.definePrivateMethods({
        catalogChild: function (node) {
          switch (node.nodeName) {
            case 'LABEL':
              node.htmlFor = this$1.PRIVATE.guid;
              this$1.PRIVATE.labelElements.push(node);
              return

            case 'INPUT':
            case 'TEXTAREA':
              node.id = this$1.PRIVATE.guid;
              this$1.PRIVATE.inputSourceElement = node;
              return

            case 'SELECT':
              this$1.PRIVATE.inputSourceElement = node;
              return

            case 'DATALIST':
              this$1.PRIVATE.datalistSourceElement = node;
              return

            default: if (node.children.length > 0) {
              return Array.from(node.children).forEach(function (child) { return this$1.PRIVATE.catalogChild(child); })
            }
          }
        },

        init: function () {
          this$1.initialValue = this$1.PRIVATE.inputSourceElement.value;

          switch (this$1.PRIVATE.inputSourceElement.nodeName) {
            case 'INPUT':
              this$1.PRIVATE.inputElement = this$1.PRIVATE.inputSourceElement;

              if (this$1.PRIVATE.datalistSourceElement) {
                this$1.type = 'datalist';

                if (!customElements.get('author-datalist')) {
                  this$1.PRIVATE.initDefaultDatalist();
                  break
                }

                this$1.PRIVATE.initAuthorDatalist();

              } else if (this$1.PRIVATE.fieldInputTypes.indexOf(this$1.PRIVATE.inputElement.type) >= 0) {
                this$1.type = 'field';
              } else if (this$1.PRIVATE.toggleInputTypes.indexOf(this$1.PRIVATE.inputElement.type) >= 0) {
                this$1.type = 'toggle';
              }

              break

            case 'TEXTAREA':
              this$1.PRIVATE.inputElement = this$1.PRIVATE.inputSourceElement;
              this$1.type = 'textarea';
              break

            case 'SELECT':
              this$1.type = 'select';

              if (!customElements.get('author-select')) {
                this$1.PRIVATE.initDefaultSelect();
                break
              }

              this$1.PRIVATE.initAuthorSelect();
              break
          }

          this$1.PRIVATE.initialized = true;
          this$1.emit('initialized');
        },

        initAuthorDatalist: function () {
          var ref = this$1.PRIVATE;
          var datalistSourceElement = ref.datalistSourceElement;
          var inputElement = ref.inputElement;
          var guid = ref.guid;

          var authorDatalist = document.createElement('author-datalist');

          Array.from(datalistSourceElement.attributes).forEach(function (attr) {
            if (attr.specified) {
              authorDatalist.setAttribute(attr.name, attr.value);

              if (attr.name === 'autofocus') {
                datalistSourceElement.removeAttribute(attr.name);
              }
            }
          });

          this$1.removeChild(inputElement);

          // Use a select as sourceElement to preserve option indexes, since
          // datalist doesn't assign indexes to child options
          var surrogate = document.createElement('select');
          Array.from(datalistSourceElement.children).forEach(function (option) { return surrogate.add(option); });
          surrogate.selectedIndex = -1;

          authorDatalist.inject(inputElement, surrogate, guid);
          this$1.replaceChild(authorDatalist, datalistSourceElement);
          this$1.PRIVATE.inputElement = authorDatalist;
        },

        initDefaultDatalist: function () {
          var ref = this$1.PRIVATE;
          var datalistSourceElement = ref.datalistSourceElement;
          var inputElement = ref.inputElement;
          var guid = ref.guid;

          datalistSourceElement.id = guid + "_datalist";
          inputElement.setAttribute('list', datalistSourceElement.id);

          this$1.PRIVATE.datalistElement = datalistSourceElement;
        },

        initDefaultSelect: function () {
          var ref = this$1.PRIVATE;
          var inputSourceElement = ref.inputSourceElement;

          inputSourceElement.id = this$1.PRIVATE.guid;
          inputSourceElement.setAttribute('role', 'menu');

          this$1.PRIVATE.inputElement = inputSourceElement;
        },

        initAuthorSelect: function () {
          var ref = this$1.PRIVATE;
          var inputSourceElement = ref.inputSourceElement;
          var authorSelect = document.createElement('author-select');

          authorSelect.id = this$1.PRIVATE.guid;

          Array.from(inputSourceElement.attributes).forEach(function (attr) {
            if (attr.specified) {
              authorSelect.setAttribute(attr.name, attr.value);

              if (attr.name === 'autofocus') {
                inputSourceElement.removeAttribute(attr.name);
              }
            }
          });

          authorSelect.inject(inputSourceElement, this$1.labels);

          this$1.replaceChild(authorSelect, inputSourceElement);
          this$1.PRIVATE.inputElement = authorSelect;

          // This is required for label clicks to focus author-select
          this$1.labels.forEach(function (label) {
            this$1.UTIL.registerListener(label, 'click', function (evt) { return this$1.PRIVATE.inputElement.focus(); });
          });
        }
      });

      this.UTIL.registerListeners(this, {
        connected: function () { return this$1.PRIVATE.guid = this$1.UTIL.generateGuid('control_'); },
        rendered: function () {
          Array.from(this$1.children).forEach(function (child) { return this$1.PRIVATE.catalogChild(child); });
          this$1.PRIVATE.init();
        }
      });
    }

              if ( superclass ) AuthorFormControlElement.__proto__ = superclass;
              AuthorFormControlElement.prototype = Object.create( superclass && superclass.prototype );
              AuthorFormControlElement.prototype.constructor = AuthorFormControlElement;

              var staticAccessors = { observedAttributes: { configurable: true } };

    staticAccessors.observedAttributes.get = function () {
      return ['disabled']
    };

              Object.defineProperties( AuthorFormControlElement, staticAccessors );

              return AuthorFormControlElement;
            }(AuthorBaseElement(HTMLElement)));

  customElements.define('author-control', AuthorFormControlElement);

  return AuthorFormControlElement;

}());
//# sourceMappingURL=author-control.es5.js.map
