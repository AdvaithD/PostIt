import React, { Component } from 'react'
import { Post } from './Post'

export class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  async componentDidMount () {
    const totalPosts = await DReddit.methods.numPosts().call()

    let list = []

    for (let i = 0; i < totalPosts; i++) {
      const post = DReddit.methods.posts(i).call()
      list.push(post)
    }
    // Wait for all promises to get resolved
    list = await Promise.all(list)
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
