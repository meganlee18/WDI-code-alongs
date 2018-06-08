import React from 'react'
import LikeButton from './LikeButton'
import DumbLikeButton from './DumbLikeButton'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    // this.handleLike = this.handleLike.bind(this)
    //this.handleAddTask = this.handleAddTask.bind(this)
    //this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      //likeCount: 7
      tasks: ['have breakfast','have brunch','have a snack'],
      newTaskValue: '',
    }
  }

  // handleLike(event){
  //   this.setState({
  //     likeCount: this.state.likeCount + 1
  //   })
  // }

  handleAddTask = (event) => {
    //console.log("add class")
    event.preventDefault() //this is needed if submitting using form
    const {tasks, newTaskValue} = this.state
    //try to write immutable code - make copies 
    const newTasks = tasks.slice(0) //=> cloning existing array + make new one
    newTasks.push(newTaskValue)

    this.setState((prevState, props) => {
     return {
       tasks: [...tasks, newTaskValue] //put the original 3 elements in the new array instead of nested array of the entire element
     }
    })
  }

  handleInputChange = (event) => {
    this.setState({newTaskValue: event.target.value})
  }

  //es 7 feature-> adding arrow function and it won't need the binding
  handleDelete = (index) => {
    const {tasks} = this.state
    console.log(index)
    
    this.setState({
      //look up index of elem in the array and delete accordingly
      //get a copy of array back
      tasks: tasks.filter((task, i) => i !== index)
    }) 
  }

  handleCrossOut = (event) => {
    console.log(event.target)

    this.setState(prevState => ({
      cross_out: !prevState.cross_out
    }));

  }

  render() {
    // var { likeCount } = this.state
    // var paragraph = <p>yay</p> //p('yay')
    // var list=["mistyrose","purple","plum"] //map transform
    // var list=<p>mistyrose</p><p>purple</p><p>plum</p>
    const {tasks} = this.state

    return <div>
      {/* <p>{list.map(elem => <p>{elem}</p>)}</p>
      <LikeButton />
      <DumbLikeButton 
        onLike={this.handleLike} 
        count={likeCount} /> */}

      {/* With form, there is no need to add onClick to button */}

      <form>
      <input onChange={this.handleInputChange} type="text" />
      <button onClick={this.handleAddTask}>Add</button>
      </form>

      <ul>
        {tasks.map((task,index) => { 
          return <li style={{}} onClick={this.handleCrossOut} key={index}>{task}{this.state.cross_out ? true : false} 
            <button onClick={() => this.handleDelete(index)}>X</button>
          </li>
        })}
      </ul>
    </div>
  }
}
