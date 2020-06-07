// Any JS in here is automatically ran for us

// Import the React library
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ImageList from './components/image_list'
import axios from 'axios'

// Create a component
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { images: [] }
  }
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
      .then(res => this.setState({images: res.data.data}))
  }
  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
})