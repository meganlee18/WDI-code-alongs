import React from 'react'
import Tweetbox from './TweetBox.scss'
import SvgBar from './SvgBar'

const secret = 42

export default class TweetBox extends React.Component {

  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      content: ''
    }
  }

  handleTextChange(event) {
    //will give back what you typed
    event.target.value
    // setting content to event.target.value
    this.setState({ content: event.target.value })

    //Tips: This method will be better if there is a previous state
    // this.setState((prevState, props) => {
    //   return { content: event.target.value }
    // })
  }

  render() {
    //ES6 - deconstruction
    //shorthand in objects - if content (text) is assigned variable content and they match
    const { content: content } = this.state

    const charsLeft = 100 - content.length
    const spanClassName = (charsLeft < 0) ? 'tweetbox__span--warning' : ''
    const isDisabled = content.length == 0 || content.length > 100
    const spanButtonClassName = ((content.length == 0) || (content.length > 100)) ? 'tweetbox__button--disabled' : 'tweetbox__button'


    return (
      <div className="tweetbox">
      
        <SvgBar
          value={charsLeft}
          maxValue={100}
          colorNormal="lime"
          colorWarning="red"
        />

        <textarea className="tweetbox__textarea" onChange={this.handleTextChange}></textarea>
        <footer className="tweetbox__footer">
          <span className={spanClassName}>{100 - content.length}</span>
          <button className={spanButtonClassName} disabled={isDisabled}>Tweet</button>
        
        </footer>
      </div>
    )
  }

}