import React, { Component } from 'react'
import axios from 'axios'
import Display from './Display'

class Blog extends Component {
  state = {
    data: [],
  };

  componentDidMount () {
    const dataAPI = 'https://jsonplaceholder.typicode.com'
    axios.get(dataAPI + '/posts/')
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch( (error) => {
        console.log(error)
      }
    );
  }

  render() {
    return (
      <Display Data={this.state.data} />
    )
  }
}

export default Blog