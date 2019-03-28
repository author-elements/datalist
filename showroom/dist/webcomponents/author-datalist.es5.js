// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-datalist v1.0.2 available at github.com/author-elements/datalist
// Last Build: 3/27/2019, 10:07:09 PM
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

      _this.UTIL.defineAttributes({
        'case-sensitive': false
      });

      _this.UTIL.definePrivateMethods({
        hideAllOptions: function hideAllOptions() {
          return Array.from(_this.options).forEach(function (option) {
            return option.setAttribute('hidden', '');
          });
        },
        inputFocusHandler: function inputFocusHandler(evt) {
          _this.inputElement.addEventListener('keydown', _this.PRIVATE.inputKeydownHandler);
        },
        clearFilter: function clearFilter() {
          if (_this.optionsElement.hasFilter('query')) {
            _this.optionsElement.removeFilter('query');

            _this.selectedIndex = -1;
          }
        },
        filterInput: function filterInput() {
          _this.PRIVATE.clearFilter();

          var query = _this.inputElement.value;

          if (!query || query === '') {
            _this.PRIVATE.showAllOptions();

            return _this.PRIVATE.clearFilter();
          }

          _this.optionsElement.addFilter('query', function () {
            var results = _this.optionsElement.find(query, _this['case-sensitive']);

            if (results.length) {
              return results;
            }

            return _this.options;
          });

          _this.PRIVATE.hideAllOptions();

          _this.optionsElement.filteredOptions.forEach(function (option) {
            return option.hidden = false;
          });
        },
        inputKeydownHandler: function inputKeydownHandler(evt) {
          switch (evt[_this.keySource]) {
            case 13:
            case 'Enter':
            case 27:
            case 'Escape':
            case 38:
            case 'ArrowUp':
            case 40:
            case 'ArrowDown':
              break;

            case 32:
            case ' ':
              return;

            case 8:
            case 'Backspace':
              if (_this.inputElement.value.length === 1) {
                _this.open = false;
              }

              break;
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
          _this.UTIL.registerListeners(_this.inputElement, {
            focus: _this.PRIVATE.inputFocusHandler,
            blur: function blur(evt) {
              _this.inputElement.removeEventListener('keydown', _this.PRIVATE.inputKeydownHandler);
            },
            click: function click(evt) {
              return _this.open = true;
            },
            input: _this.PRIVATE.filterInput
          });
        },
        'options.selected': function optionsSelected(evt) {
          var option = evt.detail.options[0];
          _this.inputElement.value = option.value;

          _this.PRIVATE.filterInput();

          _this.emit('option.selected', option.displayElement);
        }
      });

      return _this;
    }

    _createClass(AuthorDatalistElement, [{
      key: "add",
      value: function add(option, index) {
        this.optionsElement.addOption(option, index);
      }
    }, {
      key: "inject",
      value: function inject(input, select, guid) {
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

        _get(_getPrototypeOf(AuthorDatalistElement.prototype), "inject", this).call(this, select);
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
