import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      //things you want to store in the current state
      movies: [],
      q: '',
      view: ''
    }
  }

  handleQueryChange = (event) => {
    //whatever that was in the input field
    this.setState({
      q: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    //make ajax request
    const url = `http://www.omdbapi.com/?s=${this.state.q}&apikey=2f6435d9`
    //fetch url, convert json back to JS and console log response
    //using browser to make ajax calls
      fetch(url)
      .then(res => res.json())
      //setting return result in set state
      //print the result in <p></p>
      .then(res => {
        this.setState({
          movies: res.Search //returns an array of movies in JSON
          // title: res.Title,
          // poster: res.Poster
        })
      })
  }

  renderMovieItem = (movie, index) => {
    return <p key={index}>{movie.Title}</p>
  }

  render() {
    // const title = this.state.title
    // const poster = this.state.poster
    const { movies } = this.state

    return <div>
      <h1>react movies</h1>
      <form>
        <input type="text" onChange={this.handleQueryChange}/>
        <button onClick={this.handleSearch}>search</button>
      </form>

      {/* <p>{title}</p>
      <p>{poster}</p> */}
      
      {movies.map(this.renderMovieItem)}
    </div>
  }
}
