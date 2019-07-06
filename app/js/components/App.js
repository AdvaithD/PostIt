import React, { Component } from 'react'
import { CreatePost } from './CreatePost'
import { Post } from './Post'

export class App extends Component {
  render () {
    return (
      <React.Fragment>
        <h1>DReddit</h1>
        <CreatePost />
        <Post
          description="0x516d655338444b53464546725369656a747751426d683377626b56707566335770636e4c715978726b516e4b5250"
          creationDate="1550073772"
          owner="0x00000000000"
        />
      </React.Fragment>
    )
  }
}
