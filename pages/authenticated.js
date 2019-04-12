import { Component } from 'react';
import Router from "next/router";
import {
  Container,
  Title,
  Content,
  Table,
  Control,
  Button
} from 'bloomer';
import API_URL from "../config/api";


export default class Authenticated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      users: []
    };

    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('token') === null) {
      Router.push('/', '/');
    } else {
      this.setState({ token: localStorage.getItem('token') });

      try {
        const res = await fetch(API_URL + '/users', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        const data = await res.json();

        if (res.ok) {
          this.setState({
            users: data,
          });
        } else {
          console.log(data.message);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    Router.push('/', '/');
  }

  render() {
    return (
      <Container>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <Content>
          <h1>Has accedido correctamente</h1>
        </Content>
        <Control>
          <Table isBordered isStriped>
            <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo Electronico</th>
            </tr>
            </thead>
            <tbody>
            {this.state.users.map(user => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
            </tbody>
          </Table>
        </Control>
        <Button onClick={this.logout} style={{ marginTop: 20 }}>Cerrar sesion</Button>
      </Container>
    );
  }
}