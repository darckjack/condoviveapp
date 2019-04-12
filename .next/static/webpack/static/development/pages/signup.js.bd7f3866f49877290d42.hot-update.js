webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/signup_form.js":
/*!***********************************!*\
  !*** ./components/signup_form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_form_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/form_validator */ "./services/form_validator.js");
/* harmony import */ var _validators_user_form_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validators/user_form_rules */ "./validators/user_form_rules.js");
/* harmony import */ var _validators_account_form_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validators/account_form_rules */ "./validators/account_form_rules.js");
/* harmony import */ var _account_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account_type */ "./components/account_type.js");








var _jsxFileName = "/Users/juangomez/code/condoviveapp/components/signup_form.js";







var SignupForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SignupForm, _Component);

  function SignupForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignupForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SignupForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleInputChange", function (event) {
      event.preventDefault();

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAccountType", function (accountType) {
      _this.setState({
        account: {
          accountType: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(accountType)
        }
      });
    });

    _this.validator = new _services_form_validator__WEBPACK_IMPORTED_MODULE_9__["default"](user_form_rules.concat(account_form_rules));
    _this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      account: {
        name: '',
        email: '',
        phone: '',
        account_type_id: 0
      },
      condo: {
        name: ''
      },
      units: {
        qty: 0
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SignupForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Usuario"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.user.email.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "user.email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Correo Electronico"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "user.email",
        placeholder: "john@doe.com",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, validation.user.email.message))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.user.name.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "user.name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Nombre"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "user.name",
        placeholder: "Nombre",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, validation.user.name.message)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.user.password.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "user.password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Contrase\xF1a"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "user.password",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, validation.user.password.message))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.user.password_confirmation.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "user.password_confirmation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Confirme su contrase\xF1a"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "user.password_confirmation",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, validation.user.password_confirmation.message)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Informacion Personal"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.account.name.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "account.name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Nombre"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "account.name",
        placeholder: "Juan Gomez",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, validation.account.name.message))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.account.email.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "account.email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Correo Electronico"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "account.email",
        placeholder: "john@doe.com",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, validation.account.email.message)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.account.phone.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "account.phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Telefono"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "phone",
        className: "form-control",
        name: "account.phone",
        placeholder: "(xxx)xxx-xxxx",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, validation.account.phone.message))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_account_type__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onAccountTypeChange: this.handleAccountType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Condominio"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.condo.name.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "condo.name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Nombre"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "condo.name",
        placeholder: "Nombre",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "help-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, validation.condo.name.message))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: validation.units.qty.isInvalid && 'has-error',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "units.qty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Unidades"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "number",
        name: "units.qty",
        className: "form-control",
        placeholder: "No. de unidades",
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })))));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_account_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/account_type */ "./components/account_type.js");
/* harmony import */ var _components_user_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/user_form */ "./components/user_form.js");
/* harmony import */ var _components_account_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/account_form */ "./components/account_form.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/api */ "./config/api.js");
/* harmony import */ var _components_signup_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/signup_form */ "./components/signup_form.js");











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
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_17___default()(_config_api__WEBPACK_IMPORTED_MODULE_18__["default"] + '/signup', {
                  method: 'POST',
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(requestBody),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                data = _context.sent;

                if (response.ok) {
                  localStorage.setItem('token', data.auth_token);
                  next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/authenticated', '/authenticated');
                } else {
                  console.log(data.message);
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0.message);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
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
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(bloomer__WEBPACK_IMPORTED_MODULE_13__["Title"], {
        isSize: 1,
        hasTextAlign: "centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Condovive"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_signup_form__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ }),

/***/ "./validators/account_form_rules.js":
/*!******************************************!*\
  !*** ./validators/account_form_rules.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ACCOUNT_FORM_RULES = [{
  field: 'name',
  method: 'isEmpty',
  validWhen: false,
  message: 'Name is required'
}, {
  field: 'email',
  method: 'isEmpty',
  validWhen: false,
  message: 'Email is required'
}, {
  field: 'email',
  method: 'isEmail',
  validWhen: true,
  message: 'This is not a valid email'
}, {
  field: 'phone',
  method: 'isEmpty',
  validWhen: false,
  message: 'Pleave provide a phone number.'
}, {
  field: 'phone',
  method: 'matches',
  args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
  validWhen: true,
  message: 'That is not a valid phone number.'
}];
/* harmony default export */ __webpack_exports__["default"] = (ACCOUNT_FORM_RULES);

/***/ }),

/***/ "./validators/user_form_rules.js":
/*!***************************************!*\
  !*** ./validators/user_form_rules.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var USER_FORM_RULES = [{
  field: 'name',
  method: 'isEmpty',
  validWhen: false,
  message: 'Name is required'
}, {
  field: 'email',
  method: 'isEmpty',
  validWhen: false,
  message: 'Email is required'
}, {
  field: 'email',
  method: 'isEmail',
  validWhen: true,
  message: 'This is not a valid email'
}, {
  field: 'password',
  method: 'isEmpty',
  validWhen: false,
  message: 'Password is required.'
}, {
  field: 'password_confirmation',
  method: 'isEmpty',
  validWhen: false,
  message: 'Password confirmation is required.'
}];
/* harmony default export */ __webpack_exports__["default"] = (user_form_rules);

/***/ })

})
//# sourceMappingURL=signup.js.bd7f3866f49877290d42.hot-update.js.map