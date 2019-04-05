import 'bulma/css/bulma.css';
import { Component } from 'react'
import {Control, Select} from "bloomer";
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
    const res = await fetch(API_URL + '/account_types');
    const data = await res.json();

    this.setState({ types: data });
  }

  render() {
    return (
      <Control>
        <Select onChange={this.handleAccountTypeChange}>
          {this.state.types.map(type => (
              <option value={type.id} key={type.id}>{type.name}</option>
          ))}
        </Select>
      </Control>
    )
  }

  handleAccountTypeChange(e) {
    let accType = e.currentTarget.value;
    this.props.onAccountTypeChange(accType);
  }
}