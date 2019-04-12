webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony default export */ __webpack_exports__["default"] = (USER_FORM_RULES);

/***/ })

})
//# sourceMappingURL=signup.js.768c44039dcd0b78bf24.hot-update.js.map