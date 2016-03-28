import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import get from '../get-request'
require('../stylesheets/modules/feed.sass')

export default React.createClass({

  // getInitialState ?
  setInitialState: function () {
    return {
      photos: []
    }
  },

  loadPhotosFromServer: function () {
    // does this load all photos or photos from users that the user follows?
    get('http://localhost:3000/api/v1/photos/', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  render: function () {
    // use getInitialState to set state.photos as an empty array and avoid the 29-32
    let displayPhotos = []
    if (this.state !== null) {
      displayPhotos = this.state.photos
    }
    return (
      <div>
        <h1 id='test'>test</h1>
        <FeedPhotos photos={displayPhotos} />
      </div>
    )
  }
})
