import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
        country: ''
    }
    this.onChangeCountry = this.onChangeCountry.bind(this);
  }
  onChangeCountry(value) {
    this.setState({country: value});
    console.log(value);
  }
  render() {
    return (
      <Row>
        <Input s={12} type='select' onChange={(e, value) =>this.onChangeCountry(value) }>
          <option value='us' disabled>Country</option>
          <option value='us'>United States</option>
          <option value='ca'>Canada</option>
          <option value='nz'>New Zealand</option>
        </Input>
        <Input s={12} label="City" />
        <Input s={12} label="State" disabled/>
        <Input s={12} label="Zip Code"/>
        <Input s={12} label="Permanent Address"/>
        <Input s={12} label="Permanent Address(Line 2)"/>
    </Row>
    );
  }
}

export default App;
