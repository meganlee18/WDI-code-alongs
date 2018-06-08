import React from 'react'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    // function is always binded to the correct thing and reassign it
    this.state = {
      value: this.props.startValue || 0
    }
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value 
    }) //setState = function React provides to change the state
  }

  render() {
    return <div>
      <input 
        onChange={this.handleChange}
        value={this.state.value}
        type="range" 
        min="0" 
        max="10" 
        step="1" />
      <input 
        onChange={this.handleChange}
        value={this.state.value}
        type="text" />
    </div>
  }
}


