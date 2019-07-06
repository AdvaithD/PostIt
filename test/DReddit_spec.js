/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */
const DReddit = require('Embark/contracts/DReddit')
const ipfsHash = 'Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z'

config({
  contracts: {
    DReddit: {}
  }
}, (err, _accounts) => {
  accounts = _accounts
})

// eslint-disable-next-line no-undef
contract('DReddit', () => {
  it('should work', () => {
    assert.ok(true)
  })

  it('should be able to create a post and receive it via contract event', async () => {
    const receipt = await DReddit.methods.createPost(web3.utils.asciiToHex(ipfsHash)).send()
    const event = receipt.events.NewPost
    // postId now available globally
    postId = event.returnValues.postId
    assert.equal(web3.utils.hexToAscii(event.returnValues.description), ipfsHash)
  })

  it('Post should have correct data', async () => {
    const post = await DReddit.methods.posts(postId).call()
    assert.equal(web3.utils.hexToAscii(post.description), ipfsHash)
    assert.equal(post.owner, accounts[0])
  })
})
