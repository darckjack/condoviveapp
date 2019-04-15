import { Component } from "react";
import {Table} from "bloomer";

export default class UsersTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className='table table-bordered table-striped'>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo Electronico</th>
        </tr>
        </thead>
        <tbody>
        {this.props.users.map(user => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}