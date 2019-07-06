import React, { Component } from 'react'
import { Post } from './Post'

export class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  render () {
    return (
      <React.Fragemnt>
        {this.state.posts.map(post => {
          return (
            <Post
              key={post.id}
              description={post.description}
              creationDate={post.creatioNDate}
              owner={post.owner}
            />
          )
        })}
      </React.Fragemnt>
    )
  }
}
