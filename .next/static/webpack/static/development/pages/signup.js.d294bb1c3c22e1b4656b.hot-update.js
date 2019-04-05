webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_account_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/account_type */ "./components/account_type.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../config/api */ "./config/api.js");











var _jsxFileName = "/Users/juangomez/code/condoviveapp/pages/signup.js";








var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Signup, _Component);

  function Signup(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Signup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Signup).call(this, props));
    _this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userPasswordConfirm: '',
      accountName: '',
      accountEmail: '',
      accountPhone: '',
      accountType: 1,
      condoName: '',
      unitNumber: 0
    };
    _this.handleAccountType = _this.handleAccountType.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleInput = _this.handleInput.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.onFormSubmit = _this.onFormSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, [{
    key: "handleInput",
    value: function handleInput(e) {
      var value = e.target.value;
      var name = e.target.name;
      this.setState(function (prevState) {
        if (name === "unitNumber") {
          return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(value));
        } else {
          return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value);
        }
      });
    }
  }, {
    key: "handleAccountType",
    value: function handleAccountType(accountType) {
      this.setState({
        accountType: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_4___default()(accountType)
      });
    }
  }, {
    key: "onFormSubmit",
    value: function () {
      var _onFormSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var requestBody, response, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                requestBody = {
                  user: {
                    name: this.state.userName,
                    email: this.state.userEmail,
                    password: this.state.userPassword,
                    password_confirmation: this.state.userPasswordConfirm
                  },
                  account: {
                    name: this.state.accountName,
                    email: this.state.accountEmail,
                    phone: this.state.accountPhone,
                    account_type_id: this.state.accountType
                  },
                  condo: {
                    name: this.state.condoName
                  },
                  units: {
                    qty: this.state.unitNumber
                  }
                };
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default()(_config_api__WEBPACK_IMPORTED_MODULE_16__["default"] + '/signup', {
                  method: 'POST',
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(requestBody),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                data = _context.sent;
                console.log(data);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onFormSubmit(_x) {
        return _onFormSubmit.apply(this, arguments);
      }

      return onFormSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        isFluid: true,
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Title"], {
        isSize: 1,
        hasTextAlign: "centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Condovive"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Usuario")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Nombre",
        name: "userName",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Correo electronico",
        name: "userEmail",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        type: "password",
        placeholder: "Contrase\xF1a",
        name: "userPassword",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        type: "password",
        placeholder: "Confirme su contrase\xF1a",
        name: "userPasswordConfirm",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        isHorizontal: true,
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Informacion personal")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Nombre",
        name: "accountName",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Correo electronico",
        name: "accountEmail",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Telefono",
        name: "accountPhone",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_account_type__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onAccountTypeChange: this.handleAccountType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        isHorizontal: true,
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Condominio")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Nombre",
        name: "condoName",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        placeholder: "Numero de unidades",
        name: "unitNumber",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Control"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: this.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Registrarse")))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ })

})
//# sourceMappingURL=signup.js.d294bb1c3c22e1b4656b.hot-update.js.map