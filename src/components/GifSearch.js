import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    searchString: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.apiFetch(this.state.searchString)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchString} onChange={event => this.setState({searchString: event.target.value})} />
        </form>
      </div>
    )
  }
}