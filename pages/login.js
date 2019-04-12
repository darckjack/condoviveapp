import Router from "next/dist/client/router";
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
import fetch from "isomorphic-unfetch";

import API_URL from "../config/api";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
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

  async onFormSubmit(e) {
    try {
      const response = await fetch(API_URL + '/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.auth_token);

        Router.push('/authenticated', '/authenticated');
      }  else {
        console.log(data.message);
      }
    } catch(e) {
      console.log(e.message)
    }
  }

  render() {
    return (
      <Container isFluid style={{ marginTop: 20 }}>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <form onSubmit={this.onFormSubmit}>
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>Acceso</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Input placeholder='Correo electronico' name='email' onChange={this.handleInput} />
              </Field>
              <Field>
                <Input placeholder='Contraseña' type='password' name='password' onChange={this.handleInput} />
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel />
            <FieldBody>
              <Control>
                <Button onClick={this.onFormSubmit}>Ingresar</Button>
              </Control>
            </FieldBody>
          </Field>
        </form>
      </Container>
    );
  }
}
