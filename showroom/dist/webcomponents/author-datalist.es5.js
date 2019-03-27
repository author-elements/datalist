// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-datalist v1.0.0 available at github.com/author-elements/datalist
// Last Build: 3/27/2019, 12:34:32 AM
var AuthorDatalistElement = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  if (!window.hasOwnProperty('AuthorBaseElement')) {
    console.error('[ERROR] <author-datalist> Required dependency "AuthorBaseElement" not found.');
    console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
  }

  (function () {
    var missingDependencies = Array.from(new Set(['author-menu', 'author-options', 'author-option'])).filter(function (dep) {
      return !customElements.get(dep);
    });

    if (missingDependencies.length > 0) {
      console.error("[ERROR] <author-datalist> Required dependenc".concat(missingDependencies.length !== 1 ? 'ies' : 'y', " not found: ").concat(missingDependencies.map(function (d) {
        return "<".concat(d, ">");
      }).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])));
      missingDependencies.forEach(function (dep, i) {
        return console.info("".concat(i + 1, ". <").concat(dep, "> is available at ").concat('https://github.com/author-elements/datalist'.replace('datalist', dep.replace('author-', ''))));
      });
    }
  })();

  var AuthorDatalistElement =
  /*#__PURE__*/
  function (_AuthorMenuElement) {
    _inherits(AuthorDatalistElement, _AuthorMenuElement);

    function AuthorDatalistElement() {
      var _this;

      _classCallCheck(this, AuthorDatalistElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorDatalistElement).call(this, "<template><style>@charset \"UTF-8\"; :host{display:inline-flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(author-options){height:0;overflow:hidden}:host([open]) ::slotted(author-options){height:auto}author-datalist{display:inline-flex;max-width:100%}author-datalist *,author-datalist :after,author-datalist :before{box-sizing:border-box}author-datalist author-options{height:0;overflow:hidden}author-datalist[open] author-options{height:auto}</style><slot name=\"afterbegin\"></slot><slot name=\"beforeinput\"></slot><slot name=\"input\"></slot><slot name=\"afterinput\"></slot><slot name=\"beforeselectedoptions\"></slot><slot name=\"selectedoptions\"></slot><slot name=\"afterselectedoptions\"></slot><slot name=\"beforeoptions\"></slot><slot name=\"options\"></slot><slot name=\"afteroptions\"></slot><slot name=\"beforeend\"></slot></template>"));

      _this.UTIL.defineProperties({
        clickCount: {
          private: true,
          default: 0
        }
      });

      _this.UTIL.definePrivateMethods({
        find: function find(query) {
          return Array.from(_this.options).filter(function (option) {
            var value = _this.hasAttribute('case-sensitive') ? option.value : option.value.toLowerCase();
            var text = _this.hasAttribute('case-sensitive') ? option.text : option.text.toLowerCase();
            query = _this.hasAttribute('case-sensitive') ? query : query.toLowerCase();
            return value.indexOf(query) >= 0 || text.indexOf(query) >= 0;
          });
        },
        hideAllOptions: function hideAllOptions() {
          return Array.from(_this.options).forEach(function (option) {
            return option.setAttribute('hidden', '');
          });
        },
        inputFocusHandler: function inputFocusHandler(evt) {
          _this.inputElement.addEventListener('keydown', _this.PRIVATE.inputKeydownHandler);
        },
        inputKeydownHandler: function inputKeydownHandler(evt) {
          if (!_this.open) {
            _this.PRIVATE.showAllOptions();

            _this.open = true;
            return;
          }

          _this.PRIVATE.keydownHandler(evt);
        },
        showAllOptions: function showAllOptions() {
          return Array.from(_this.options).forEach(function (option) {
            return option.removeAttribute('hidden');
          });
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        connected: function connected() {
          _this.inputElement.addEventListener('focus', _this.PRIVATE.inputFocusHandler);

          _this.UTIL.registerListeners(_this.inputElement, {
            blur: function blur(evt) {
              _this.PRIVATE.clickCount = 0;

              _this.inputElement.removeEventListener('keydown', _this.PRIVATE.inputKeydownHandler);
            },
            click: function click(evt) {
              _this.PRIVATE.clickCount++;

              if (_this.PRIVATE.clickCount === 2) {
                _this.PRIVATE.showAllOptions();

                _this.open = true;
              }
            },
            input: function input(evt) {
              _this.PRIVATE.hideAllOptions();

              var query = _this.inputElement.value;

              if (!query) {
                return;
              }

              var results = _this.PRIVATE.find(query);

              if (results.length) {
                results.forEach(function (result) {
                  return result.removeAttribute('hidden');
                });
                _this.open = true;
                return;
              }

              if (_this.open) {
                _this.open = false;
              }

              _this.PRIVATE.hideAllOptions();
            }
          });
        },
        disconnected: function disconnected() {
          _this.inputElement.removeEventListener('focus', _this.PRIVATE.inputFocusHandler);
        },
        'options.selected': function optionsSelected(evt) {
          return _this.inputElement.value = evt.detail.options[0].value;
        }
      });

      return _this;
    }

    _createClass(AuthorDatalistElement, [{
      key: "add",
      value: function add(option, index) {
        this.optionsElement.addOption(option, index); // if (!customElements.get('author-option')) {
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
    }, {
      key: "inject",
      value: function inject(input, datalist, guid) {
        // Prevent re-injections
        if (this.PRIVATE.injected) {
          return;
        }

        input.slot = 'input';
        input.id = guid;
        this.UTIL.defineProperty('inputElement', {
          readonly: true,
          default: input
        });
        this.appendChild(this.inputElement);

        _get(_getPrototypeOf(AuthorDatalistElement.prototype), "inject", this).call(this, datalist);
      }
    }, {
      key: "value",
      get: function get() {
        return this.inputElement.value;
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(AuthorMenuElement.observedAttributes), ['case-sensitive']);
      }
    }]);

    return AuthorDatalistElement;
  }(AuthorMenuElement);

  customElements.define('author-datalist', AuthorDatalistElement);

  return AuthorDatalistElement;

}());
//# sourceMappingURL=author-datalist.es5.js.map
