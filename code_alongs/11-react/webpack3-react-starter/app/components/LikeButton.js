import React from 'react'
import './LikeButton.scss'

export default class LikeButton extends React.Component {
  constructor(props) {
    //in here the this keyword still refers to the component
    super(props)
    //this refers back to the component
    this.onClick = this.onClick.bind(this)
    this.state = {
      //value: this.props.startValue || 0
      count: 0
    }
  }

  onClick() {
    //the this keyword is not referring to component
    this.setState({ 
      count: this.state.count += 1
    })
  }

  render() {
    // Need to have a root that wraps all components in one
    return <div className="btn-container">
      <div className="like-btn">
        <button 
        onClick={this.onClick}>Like!</button>
      </div>
      <input 
        type="text" 
        value={this.state.count} 
        />
    </div>
  }
}
