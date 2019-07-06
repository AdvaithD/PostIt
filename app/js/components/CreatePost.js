import React, { Component } from 'react'

export class CreatePost extends Component {
  render () {
    return (
      <form>
        <div>
          <label>Topic</label>
          <input type="text" name="topic" />
        </div>
        <div>
          <textarea name="content"></textarea>
        </div>
        <button>Post</button>
      </form>
    )
  }
}
