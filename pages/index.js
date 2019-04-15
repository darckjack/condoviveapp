import Link from 'next/link';
import Router from 'next/router'
import { Component } from 'react';
import { Button } from 'reactstrap';


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
      <div className='row'>
        <div className="col-md-2 offset-md-4">
          <Link href='/login'>
            <Button color='primary'>Iniciar sesion</Button>
          </Link>
        </div>
        <div className="col-md-2">
          <Link href='/signup'>
            <Button color='primary'>Registrarse</Button>
          </Link>
        </div>
      </div>
    )
  }
}
