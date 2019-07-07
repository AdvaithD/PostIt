import React, { Component } from 'react'
import dateformat from 'dateformat'
import EmbarkJS from '../../../embarkArtifacts/embarkjs'

export class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topic: '',
      content: ''
    }
  }

  async componentDidMount () {
    const ipfsHash = web3.utils.toAscii(this.props.description)
    const data = await EmbarkJS.Storage.get(ipfsHash)
    const { topic, content } = JSON.parse(data)
    this.setState({ topic, content })
  }
  
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }
  render () {
    const formattedDate = dateformat(new Date(this.props.creationDate * 1000),'yyyy-mm-dd')
    const { owner, creationDate } = this.props
    const { topic, content } = this.state
    return (
      <React.Fragment>
        <hr />
        <h3>{topic ? topic : 'null'}</h3>
        <p>{content ? content : 'null'}</p>
        <p><small><i>created at {formattedDate ? formattedDate : 'null'} by {owner ? owner : 'null'}</i></small></p>
        <button>Upvote</button>
        <button>Downvote</button>
      </React.Fragment>
    )
  }
}
