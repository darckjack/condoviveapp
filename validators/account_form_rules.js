const ACCOUNT_FORM_RULES = [
  {
    field: 'accountName',
    method: 'isEmpty',
    validWhen: false,
    message: 'Name is required'
  },
  {
    field: 'accountEmail',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email is required'
  },
  {
    field: 'accountEmail',
    method: 'isEmail',
    validWhen: true,
    message: 'This is not a valid email'
  },
  {
    field: 'accountPhone',
    method: 'isEmpty',
    validWhen: false,
    message: 'Pleave provide a phone number.'
  },
  {
    field: 'accountPhone',
    method: 'matches',
    args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
    validWhen: true,
    message: 'That is not a valid phone number.'
  }
];

export default ACCOUNT_FORM_RULES;