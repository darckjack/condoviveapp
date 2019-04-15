import Router from "next/router";
import API_URL from "../config/api";
import UsersTable from "../components/users_table";
import AccountsTable from "../components/accounts_table";
import { Alert } from "reactstrap";


export default class Authenticated extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      users: [],
      loaded: false,
      error: false,
      errorMessage: ''
    };

    this.logout = this.logout.bind(this);
  }

  handleError = message => {
    this.setState({
      error: true,
      errorMessage: message
    })
  };

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
            loaded: true
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

  onDismiss = () => {
    this.setState({
      error: false,
    })
  };

  render() {
    let tables = this.state.users.map(user => {
      return <AccountsTable user_id={ user.id } onError={this.handleError} />
    });
    return (
      <div>
        <Alert color='danger' isOpen={this.state.error} toggle={this.onDismiss}>
          {this.state.errorMessage}
        </Alert>
        <div className="row">
          <div className="col">
            {
              this.state.users.length > 0
              ?
              <UsersTable users={this.state.users} />
              :
              <div className='text-center'>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            }
            <button className="btn btn-primary" onClick={this.logout} style={{ marginTop: 20 }}>Cerrar sesion</button>
          </div>
          <div className="col">
            {
              this.state.users.length > 0
                ?
                tables
                :
                <div className='text-center'>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
            }
          </div>
        </div>

      </div>
    );
  }
}