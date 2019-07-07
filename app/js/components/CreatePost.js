import React, { Component } from 'react'
import DReddit from '../../../embarkArtifacts/contracts/DReddit'
export class CreatePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topic: '',
      content: '',
      loading: false
    }
  }
  handleChange (field, event) {
    this.setState({
      [field]: event.target.value
    })
  }
  async createPost (event) {
    event.preventDefault()
    const ipfsHash = await EmbarkJS.Storage.saveText(JSON.stringify({
      topic: this.state.topic,
      content: this.state.content
    }))
    console.log('Hash created', ipfsHash)

    // get accounts
    const accounts = await web3.eth.getAccounts()

    // create post
    const createPost = DReddit.methods.createPost(web3.utils.toHex(ipfsHash))

    // Get gas estimate
    const estimate = await createPost.estimateGas()

    // Send the transaction from the default account
    await createPost.send({ from: accounts[0], gas: estimate })
    await this.props.afterPostHandler()
    this.setState({ loading: true })

    this.setState({
      topic: '',
      content: '',
      loading: false
    })
  }

  render () {
    return (
      <form onSubmit={e => this.createPost(e)}>
        <div>
          <label>Topic</label>
          <input type="text" name="topic" value={this.state.topic} onChange={e => this.handleChange('topic', e)} />
        </div>
        <div>
          <textarea name="content" value={this.state.content} onChange={e => this.handleChange('content', e)} ></textarea>
        </div>
        <button type="submit">Post</button>
        {this.state.loading &&
            <p>Posting...</p>
        }
      </form>
    )
  }
}
