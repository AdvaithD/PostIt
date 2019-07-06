pragma solidity ^0.5.0;

contract DReddit {
    enum Ballot { NONE, UPVOTE, DOWNVOTE }

    struct Post {
        uint creationDate;
        bytes description;
        address owner;
        uint upvotes;
        uint downvotes;
        mapping(address => Ballot) voters;
    }

    Post[] public posts;
    
  
   event NewPost(
       uint indexed postId,
       address owner,
       bytes decription
   )

   event NewVote(
       uint indexed postId,
       address owner,
       uint8 vote
   )

    function createPost(bytes _description) public {
        uint postId = posts.length++;
        posts[postId] = Post({
            creationDate: block.timestamp,
            description: _descriotion,
            owner: msg.sender
            upvotes: 0,
            downvotes: 0
        })
        emit NewPost(postId, msg.sender, _description)
    }
}