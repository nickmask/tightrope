import {ButtonInput, Input} from 'react-bootstrap'
import React from 'react'

export default React.createClass({

  getInitialState: function () {
    return { comment: '' }
  },

  handleCommentChange: function (e) {
    this.setState({comment: e.target.value})
  },

  handleSubmit: function (e) {
    e.preventDefault()
    let comment = this.state.comment.trim()
    if (!comment) {
      return
    }
    this.props.onCommentSubmit({ comment: comment })
    this.setState({comment: ''})
  },

  render: function () {
    return (
      <div>
        <form className='comment-form' onSubmit={this.handleSubmit}>
          <Input
            className='comment-input'
            type='textarea'
            placeholder='Add a comment'
            value={this.state.comment}
            onChange={this.handleCommentChange} />
          <ButtonInput
            className='comment-submit'
            type='submit'
            value='Post' />
        </form>
      </div>
    )
  }
})
