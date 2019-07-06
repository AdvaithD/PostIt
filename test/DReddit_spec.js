const DReddit = require('Embark/contracts/DReddit')
const ipfsHash = 'Qmc5gCcjYypU7y28oCALwfSvxCBskLuPKWpK4qpterKC7z';

config({
    contracts: {
        DReddit: {}
    }
})
contract('DReddit', () => {
    it('should work', () => {
        assert.ok(true)
    })

    it ('should be able to create a post and receive it via contract event', async () => {
        const receipt = await DReddit.methods.createPost(web3.utils.asciiToHex(ipfsHash)).send();
        console.log('description', receipt.events.description)
        const event = receipt.events.NewPost;
        postId = event.returnValues.postId;
        console.log(event)
        console.log('Description', event.returnValues.description)
        assert.equal(web3.utils.hexToAscii(event.returnValues.description), ipfsHash);
      });
});