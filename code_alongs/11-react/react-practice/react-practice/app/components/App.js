import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  //constructor = used to create a component
  //method - function that is written inside a class
  constructor(props) {
    super(props)
  }

  //show on the page
  //React takes care of calling the DOM objects
  //when setState is defined (or data is changed), it grabs 
  //and calls the render function automatically

  render() {
    return <div>
      <h1>hello world</h1>
      <label>example component</label>
      <PasswordInput />
    </div>
  }

}
