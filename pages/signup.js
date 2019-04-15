import { Component } from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import API_URL from '../config/api';
import SignUpForm from "../components/signup_form";
import { Alert } from "reactstrap";


export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <Alert color='danger' isOpen={this.state.error} toggle={this.onDismiss}>
          {this.state.errorMessage}
        </Alert>
        <SignUpForm onFormSubmit={this.onFormSubmit} onError={this.handleError}/>
      </div>
    )
  }

  handleError = message => {
    this.setState({
      error: true,
      errorMessage: message
    })
  };

  onDismiss = () => {
    this.setState({
      error: false,
    })
  };

  async onFormSubmit(formData) {
    const requestBody = {
      user: {
        name: formData.userName,
        email: formData.userEmail,
        password: formData.userPassword,
        password_confirmation: formData.userPasswordConfirm
      },
      account: {
        name: formData.accountName,
        email: formData.accountEmail,
        phone: formData.accountPhone,
        account_type_id: formData.accountType
      },
      condo: {
        name: formData.condoName
      },
      units: {
        qty: parseInt(formData.unitNumber)
      }
    };


    console.log(requestBody);

    try {
      const response = await fetch(API_URL + '/signup', {
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
}
