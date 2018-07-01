// src/components/PizzaBase.js

import React from 'react'

export default class PizzaElement extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {selection: null};
    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle the form option input and put in local state variable selection
  handleChange = (event) => {
    this.setState({
      selection: event.target.value
    });
  }

  // Handle the submit of the user option selection
  handleSubmit(event) {
    // Prevent perform at initial render or rerender
    event.preventDefault();
    // Call the setOption action creator function passed from the
    // container component to alter the store for the selected option
    this.props.setOption(this.state.selection)
  }

  render() {
    return (
      // Show the option and handle the selected option for the pizza element
      <form className='form' onSubmit={this.handleSubmit}>
      <select onChange={this.handleChange}>
        <option value="">-- {this.props.selectText} --</option>
        {this.props.pizzaElements.map(pizzaElement => {
          return this.props.getOption(pizzaElement)
        })}
      </select>
      <input type="submit" value="Select" />
      </form>
    )
  }
}
