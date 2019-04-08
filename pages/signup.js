import 'bulma/css/bulma.css';
import { Component } from 'react'
import Router from 'next/router'
import {
  Container, 
  Title, 
  Field, 
  FieldLabel, 
  Label, 
  FieldBody,
  Input,
  Button,
  Control
} from 'bloomer';
import AccountType from "../components/account_type";
import fetch from 'isomorphic-unfetch';
import API_URL from '../config/api';


export default class Signup extends Component {
  constructor(props) {
    super(props);

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

  async onFormSubmit(e) {
    e.preventDefault();
    const requestBody = {
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


    let response = await fetch(API_URL + '/signup', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let data = await response.json();

    localStorage.setItem('token', data.auth_token);

    Router.push('/authenticated', '/authenticated');

  }

  render() {
    return (
      <Container isFluid style={{ marginTop: 20 }}>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <form onSubmit={this.onFormSubmit}>
          <Field isHorizontal>
            <FieldLabel>
              <Label>Usuario</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Input placeholder='Nombre' name="userName" onChange={this.handleInput} />
              </Field>
              <Field>
                <Input placeholder='Correo electronico' name="userEmail" onChange={this.handleInput} />
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel />
            <FieldBody>
              <Field>
                <Input type="password" placeholder='Contraseña' name="userPassword" onChange={this.handleInput} />
              </Field>
              <Field>
                <Input type="password" placeholder='Confirme su contraseña' name="userPasswordConfirm" onChange={this.handleInput} />
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal style={{ marginTop: 50 }}>
            <FieldLabel>
              <Label>Informacion personal</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Input placeholder='Nombre' name="accountName" onChange={this.handleInput} />
              </Field>
              <Field>
                <Input placeholder='Correo electronico' name="accountEmail" onChange={this.handleInput} />
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel />
            <FieldBody>
              <Field>
                <Input placeholder='Telefono' name="accountPhone" onChange={this.handleInput} />
              </Field>
              <Field>
                <AccountType onAccountTypeChange={this.handleAccountType} />
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal style={{ marginTop: 50 }}>
            <FieldLabel>
              <Label>Condominio</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Input placeholder='Nombre' name="condoName" onChange={this.handleInput} />
              </Field>
              <Field>
                <Input placeholder='Numero de unidades' name="unitNumber" onChange={this.handleInput} />
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel />
            <FieldBody>
              <Control>
                <Button onClick={this.onFormSubmit}>Registrarse</Button>
              </Control>
            </FieldBody>
          </Field>
        </form>
      </Container>
    )
  }
}
