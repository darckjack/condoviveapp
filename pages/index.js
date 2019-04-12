import Link from 'next/link';
import Router from 'next/router'
import { Component } from 'react';
import { Container, Title, Button, Columns, Column } from 'bloomer';


export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      Router.push('/authenticated', '/authenticated');
    }
  }


  render() {
    return (
      <Container isFluid style={{ marginTop: 20 }}>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <Columns>
          <Column></Column>
          <Column></Column>
          <Column hasTextAlign='centered'>
            <Link href='/login'>
              <Button isColor='primary' hasTextAlign='centered'>Iniciar sesion</Button>
            </Link>
          </Column>
          <Column hasTextAlign='centered'>
            <Link href='/signup'>
              <Button isColor='primary' hasText_align='centered'>Registrarse</Button>
            </Link>
          </Column>
          <Column></Column>
          <Column></Column>
        </Columns>
      </Container>
    )
  }
}
