import { Component } from 'react'
import Router from 'next/router'
import {
  Container, 
  Title
} from 'bloomer';
import fetch from 'isomorphic-unfetch';
import API_URL from '../config/api';
import SignUpForm from "../components/signup_form";


export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: {},
    };

    this.handleAccountType = this.handleAccountType.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState( prevState => {
      if (name === "unitNumber") {
        return {
          [name]: parseInt(value)
        }
      } else {
        return {
          [name]: value
        }
      }
    });
  }

  handleAccountType(accountType) {
    this.setState({ accountType: parseInt(accountType) })
  }

  async onFormSubmit(formData) {
    this.setState({ request: formData });
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
        console.log(data.message);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (
      <Container isFluid style={{ marginTop: 20 }}>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <SignUpForm onFormSubmit={this.onFormSubmit}/>
      </Container>
    )
  }
}
