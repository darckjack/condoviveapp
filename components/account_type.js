import { Component } from 'react'
import fetch from "isomorphic-unfetch";
import API_URL from "../config/api";


export default class AccountType extends Component{
  constructor(props) {
    super(props);

    this.state = {
      types: [],
    };

    this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch(API_URL + '/account_types');
      const data = await res.json();

      if (res.ok) {
        this.setState({ types: data });
      } else {
        console.log(data.message);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="account_type">Tipo de Cuenta</label>
        <select className="form-control" onChange={this.handleAccountTypeChange}>
          {this.state.types.map(type => (
            <option value={type.id} key={type.id}>{type.name}</option>
          ))}
        </select>
      </div>
    )
  }

  handleAccountTypeChange(e) {
    let accType = e.currentTarget.value;
    this.props.onAccountTypeChange(accType);
  }
}