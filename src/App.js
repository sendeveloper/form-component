import React, { Component } from 'react';
import {UsaStates} from 'usa-states';
import { Row, Input } from 'react-materialize';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
        country: '',
        stateDisable: false,
        originalStates: [],
        states: []
    }
    var usStates = new UsaStates().states;
    for (let i=0;i<usStates.length;i++)
      this.state.originalStates.push(usStates[i].name);
    this.onChangeCountry = this.onChangeCountry.bind(this);
  }
  onChangeCountry(value) {
    this.setState({country: value});
    this.setState({stateDisable: (value === 'us')});
    this.setState({states: (value === 'us') ? this.state.originalStates : []});
  }
  render() {
    return (
      <Row>
        <Input s={12} type='select' onChange={ (e, value) =>this.onChangeCountry(value) }>
          <option value='' disabled selected>Country</option>
          <option value='us'>United States</option>
          <option value='ca'>Canada</option>
          <option value='nz'>New Zealand</option>
          <option value='au'>Australia</option>
          <option value='mx'>Mexico</option>
          <option value='uk'>United Kingdom</option>
        </Input>
        <Input s={12} label="City" />
        <Input s={12} type='select' disabled={!this.state.stateDisable}>
          <option value='' disabled selected>State</option>
          {
            this.state.states.map((state, i) => 
              <option value='' key = {i}>{state} </option>
            )
          }
        </Input>
        <Input s={12} label="Zip Code"/>
        <Input s={12} label="Permanent Address"/>
        <Input s={12} label="Permanent Address(Line 2)"/>
    </Row>
    );
  }
}

export default App;
