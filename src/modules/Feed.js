import React from 'react'
import Photoset from '../components/Photoset'
import request from 'superagent'
import FeedPhotos from '../components/Feed-photos'
import get from '../get-request'
require('../stylesheets/modules/feed.sass')

export default React.createClass({
  setInitialState: function () {
    return {
      photos: []
    }
  },
  loadPhotosFromServer: function() {
    get('http://localhost:3000/api/v1/photos/', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
      console.log('After setting', this.state.photos)
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  },

  render: function () {
    let displayPhotos = []
    if (this.state !== null) {
      displayPhotos = this.state.photos
    }
    return (
      <div>
        <FeedPhotos photos={displayPhotos} />
      </div>
    )
  }
})
