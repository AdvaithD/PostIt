import React, { Component } from 'react'
import DReddit from '../../../embarkArtifacts/contracts/DReddit'
// eslint-disable-next-line no-unused-vars
import { Post } from './Post'

export class List extends Component {
    _isMounted = false;
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
        this._isMounted = true;
    
  }
  render () {
   const { posts } = this.state
    return (
      <React.Fragment>
      {this.props.posts.map(post => {
       return (<Post
              key={post.id}
              description={post.description}
              creationDate={post.creationDate}
              owner={post.owner}
            />)
      })}
      
        
      </React.Fragment>
    )
  }
}
