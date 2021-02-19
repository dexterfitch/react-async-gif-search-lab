import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  apiFetch = (searchVariable = "searching") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchVariable}&api_key=qVgNh01K9ebr5jsWFXRTFt2S54ofposq`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({
        gifs: data.map(
          gif => ({
            url: gif.images.original.url
          })
        )
      })
    })
  }

  componentDidMount() {
    this.apiFetch()
  }

  render() {
    return (
      <div>
        <GifSearch apiFetch={this.apiFetch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}