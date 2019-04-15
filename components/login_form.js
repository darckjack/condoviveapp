import { Component } from "react";
import FormValidator from "../services/form_validator";
import LOGIN_FORM_RULES from "../validators/login_form_rules";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(LOGIN_FORM_RULES);
    this.submitted = false;

    this.state = {
      email: "",
      password: "",
      validation: this.validator.valid(),
    }
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
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
        <h3>Acceso</h3>
        <div className="row">
          <div className="col">
            <div className={validation.email.isInvalid && 'has-error'}>
              <label htmlFor="email">Correo Electronico</label>
              <input type="email" className="form-control"
                     name="email"
                     placeholder="john@doe.com"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.email.message}</span>
            </div>
          </div>
          <div className="col">
            <div className={validation.password.isInvalid && 'has-error'}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control"
                     name="password"
                     onChange={this.handleInputChange}
              />
              <span className="help-block">{validation.password.message}</span>
            </div>
          </div>
        </div>
        <button type='submit' onClick={this.handleFormSubmit} className="btn btn-primary" style={{ marginTop: 20 }}>
          Acceder
        </button>
      </form>
    )
  }

}