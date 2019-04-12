const USER_FORM_RULES = [
  {
    field: 'userName',
    method: 'isEmpty',
    validWhen: false,
    message: 'Name is required'
  },
  {
    field: 'userEmail',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email is required'
  },
  {
    field: 'userEmail',
    method: 'isEmail',
    validWhen: true,
    message: 'This is not a valid email'
  },
  {
    field: 'userPassword',
    method: 'isEmpty',
    validWhen: false,
    message: 'Password is required.'
  },
  {
    field: 'userPasswordConfirm',
    method: 'isEmpty',
    validWhen: false,
    message: 'Password confirmation is required.'
  }
];
export default USER_FORM_RULES;