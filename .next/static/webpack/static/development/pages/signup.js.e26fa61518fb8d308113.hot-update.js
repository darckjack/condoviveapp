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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_account_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/account_type */ "./components/account_type.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/api */ "./config/api.js");









var _jsxFileName = "/Users/juangomez/code/condoviveapp/pages/signup.js";








var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Signup, _Component);

  function Signup(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Signup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup).call(this, props));
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
    _this.handleAccountType = _this.handleAccountType.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleInput = _this.handleInput.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onFormSubmit = _this.onFormSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup, [{
    key: "handleInput",
    value: function handleInput(e) {
      var value = e.target.value;
      var name = e.target.name;
      this.setState(function (prevState) {
        if (name === "unitNumber") {
          return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(value));
        } else {
          return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value);
        }
      });
    }
  }, {
    key: "handleAccountType",
    value: function handleAccountType(accountType) {
      this.setState({
        accountType: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(accountType)
      });
    }
  }, {
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var requestBody = {
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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(_config_api__WEBPACK_IMPORTED_MODULE_14__["default"] + '/signup', {
        method: 'POST',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(requestBody),
        headers: {}
      });
      console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(requestBody));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        isFluid: true,
        style: {
          marginTop: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Title"], {
        isSize: 1,
        hasTextAlign: "centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Condovive"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Usuario")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Nombre",
        name: "userName",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Correo electronico",
        name: "userEmail",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "password",
        placeholder: "Contrase\xF1a",
        name: "userPassword",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "password",
        placeholder: "Confirme su contrase\xF1a",
        name: "userPasswordConfirm",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        isHorizontal: true,
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Informacion personal")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Nombre",
        name: "accountName",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Correo electronico",
        name: "accountEmail",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Telefono",
        name: "accountPhone",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_account_type__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onAccountTypeChange: this.handleAccountType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        isHorizontal: true,
        style: {
          marginTop: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Condominio")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Nombre",
        name: "condoName",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        placeholder: "Numero de unidades",
        name: "unitNumber",
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Field"], {
        isHorizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["FieldBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Control"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        onClick: this.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Registrarse")))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=signup.js.e26fa61518fb8d308113.hot-update.js.map