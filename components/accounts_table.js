import API_URL from "../config/api";

export default class AccountsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: []
    }
  }

  async componentWillMount() {
    try {
      const res = await fetch(API_URL + '/users/' + this.props.user_id + '/accounts' , {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      const data = await res.json();

      if (res.ok) {
        this.setState({
          accounts: data,
        });
      } else {
        this.props.onError(data.message);
        console.log(data.message);
      }
    } catch (e) {
      this.props.onError(e.message);
      console.log(e.message);
    }
  }

  render() {
    return(
      <table className='table table-bordered table-striped'>
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo Electronico</th>
          <th>Tipo de cuenta</th>
          <th>Prefijo</th>
        </tr>
        </thead>
        <tbody>
        {this.state.accounts.map(account => {
          return (
            <tr>
              <td>{account.name}</td>
              <td>{account.email}</td>
              <td>{account.state}</td>
              <td>{account.tenant_name}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }

}