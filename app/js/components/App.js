import React, { Component } from 'react'
import { CreatePost } from './CreatePost'
import { Post } from './Post'
import { List } from './List'
import DReddit from '../../../embarkArtifacts/contracts/DReddit'

export class App extends Component {
   constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

   loadPosts = async () => {
     const totalPosts = await DReddit.methods.numPosts().call();

    let list = [];

    if (totalPosts > 0) {
      for (let i = 0; i < totalPosts; i++) {
        const post = DReddit.methods.posts(i).call();
        list.push(post);
      }
    }

    list = await Promise.all(list);
    list = list.map((post, index) => {
      post.id = index;
      return post;
    });

    list;

    this.setState({ posts: list });
   }
   async componentDidMount() {
     await this.loadPosts()
   }
  render () {
    return (
      <React.Fragment>
        <h1>Decentralized Reddit</h1>
        <CreatePost afterPostHandler={this.loadPosts.bind(this)}/>
        <List posts={this.state.posts}/>
      </React.Fragment>
    )
  }
}
