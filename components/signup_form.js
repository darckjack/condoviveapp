import { Component } from 'react';
import FormValidator from "../services/form_validator";
import USER_FORM_RULES from "../validators/user_form_rules";
import ACCOUNT_FORM_RULES from "../validators/account_form_rules";
import CONDO_FORM_RULES from "../validators/condo_form_rules";
import UNIT_FORM_RULES from "../validators/unit_form_rules.js";

import AccountType from "./account_type";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(USER_FORM_RULES.concat(ACCOUNT_FORM_RULES, CONDO_FORM_RULES, UNIT_FORM_RULES));
    this.submitted = false;

    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userPasswordConfirm: '',
      accountName: '',
      accountEmail: '',
      accountPhone: '',
      accountType: 1,
      condoName: '',
      unitNumber: 0,
      validation: this.validator.valid(),
    }
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleError = message => {
    this.props.onError(message);
  };

  handleAccountType = accountType => {
    this.setState({ account: { accountType: parseInt(accountType) }});
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      this.props.onFormSubmit(this.state)
    }
  };

  render() {
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;

    return (
      <form>
        <h3>Usuario</h3>

        <div className="row">
          <div className="col-md-6">
            <div className={validation.userEmail.isInvalid && 'has-error'}>
              <label htmlFor="userEmail">Correo Electronico</label>
              <input type="email" className="form-control"
                     name="userEmail"
                     placeholder="john@doe.com"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.userEmail.message}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className={validation.userName.isInvalid && 'has-error'}>
              <label htmlFor="userName">Nombre</label>
              <input type="text" className="form-control"
                     name="userName"
                     placeholder="Nombre"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.userName.message}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className={validation.userPassword.isInvalid && 'has-error'}>
              <label htmlFor="userPassword">Contraseña</label>
              <input type="password" className="form-control"
                     name="userPassword"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.userPassword.message}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className={validation.userPasswordConfirm.isInvalid && 'has-error'}>
              <label htmlFor="userPasswordConfirm">Confirme su contraseña</label>
              <input type="password" className="form-control"
                     name="userPasswordConfirm"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.userPasswordConfirm.message}</span>
            </div>
          </div>
        </div>

        <h3>Informacion Personal</h3>

        <div className="row">
          <div className="col-md-6">
            <div className={validation.accountName.isInvalid && 'has-error'}>
              <label htmlFor="accountName">Nombre</label>
              <input type="text" className="form-control"
                     name="accountName"
                     placeholder="Nombre"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.accountName.message}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className={validation.accountEmail.isInvalid && 'has-error'}>
              <label htmlFor="accountEmail">Correo Electronico</label>
              <input type="email" className="form-control"
                     name="accountEmail"
                     placeholder="john@doe.com"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.accountEmail.message}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className={validation.accountPhone.isInvalid && 'has-error'}>
              <label htmlFor="accountPhone">Telefono</label>
              <input type="phone" className="form-control"
                     name="accountPhone"
                     placeholder="(xxx)xxx-xxxx"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.accountPhone.message}</span>
            </div>
          </div>
          <div className="col-md-6">
            <AccountType onAccountTypeChange={this.handleAccountType} onError={this.handleError} />
          </div>
        </div>

        <h3>Condominio</h3>
        <div className="row">
          <div className="col-md-6">
            <div className={validation.condoName.isInvalid && 'has-error'}>
              <label htmlFor="condoName">Nombre</label>
              <input type="text" className="form-control"
                     name="condoName"
                     placeholder="Nombre"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.condoName.message}</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className={validation.unitNumber.isInvalid && 'has-error'}>
              <label htmlFor="unitNumber">Unidades</label>
              <input type="number" name="unitNumber"
                     className="form-control"
                     placeholder="No. de unidades"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.unitNumber.message}</span>
            </div>
          </div>
        </div>
        <button type='submit'  onClick={this.handleFormSubmit} className="btn btn-primary" style={{ marginTop: 20 }}>
          Registrarse
        </button>
      </form>
    )
  }
  
}