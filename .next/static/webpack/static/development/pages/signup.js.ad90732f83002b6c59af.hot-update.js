webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./validators/account_form_rules.js":
/*!******************************************!*\
  !*** ./validators/account_form_rules.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ACCOUNT_FORM_RULES = [{
  field: 'accountName',
  method: 'isEmpty',
  validWhen: false,
  message: 'Name is required'
}, {
  field: 'accountEmail',
  method: 'isEmpty',
  validWhen: false,
  message: 'Email is required'
}, {
  field: 'accountEmail',
  method: 'isEmail',
  validWhen: true,
  message: 'This is not a valid email'
}, {
  field: 'accountPhone',
  method: 'isEmpty',
  validWhen: false,
  message: 'Pleave provide a phone number.'
}, {
  field: 'accountPhone',
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
  field: 'userName',
  method: 'isEmpty',
  validWhen: false,
  message: 'Name is required'
}, {
  field: 'userEmail',
  method: 'isEmpty',
  validWhen: false,
  message: 'Email is required'
}, {
  field: 'userEmail',
  method: 'isEmail',
  validWhen: true,
  message: 'This is not a valid email'
}, {
  field: 'userPassword',
  method: 'isEmpty',
  validWhen: false,
  message: 'Password is required.'
}, {
  field: 'userPasswordConfirm',
  method: 'isEmpty',
  validWhen: false,
  message: 'Password confirmation is required.'
}];
/* harmony default export */ __webpack_exports__["default"] = (USER_FORM_RULES);

/***/ })

})
//# sourceMappingURL=signup.js.ad90732f83002b6c59af.hot-update.js.map