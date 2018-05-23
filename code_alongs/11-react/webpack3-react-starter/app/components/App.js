import React from 'react'
import TweetBox from './TweetBox'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      // class is taken on JS so use className
    return <div>
      <TweetBox />
    </div>
  }
}
