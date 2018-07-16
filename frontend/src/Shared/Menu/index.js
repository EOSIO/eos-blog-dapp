import React, { Component } from "react"
import Display from "./Display"

class Menu extends Component {
  state = {
    open: false,
  };

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <Display handleToggle={this.handleToggle} menuStatus={this.state.open} />
    )
  }
}

export default Menu