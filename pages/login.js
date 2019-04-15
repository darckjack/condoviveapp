import Router from "next/dist/client/router";
import fetch from "isomorphic-unfetch";

import API_URL from "../config/api";
import LoginForm from "../components/login_form";
import { Alert } from "reactstrap";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      error: false,
      errorMessage: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState( prevState => {
      return {
        [name]: value
      }
    });
  }

  onDismiss = () => {
    this.setState({
      error: false
    })
  };

  async onFormSubmit(formData) {
    const requestBody = {
      email: formData.email,
      password: formData.password
    };


    console.log(requestBody);

    try {
      const response = await fetch(API_URL + '/login', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.auth_token);

        Router.push('/authenticated', '/authenticated');
      } else {
        this.setState({
          error: true,
          errorMessage: data.message
        });
        console.log(data.message);
      }
    } catch (e) {
      this.setState({
        error: true,
        errorMessage: e.message
      });
      console.log(e.message);
    }
  }

  render() {
    return (
      <div>
        <Alert color='danger' isOpen={this.state.error} toggle={this.onDismiss}>
          {this.state.errorMessage}
        </Alert>
        <LoginForm onFormSubmit={this.onFormSubmit} />
      </div>
  );
  }
}
