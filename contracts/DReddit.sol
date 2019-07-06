pragma solidity ^0.5.0;

contract DReddit {

    struct Post {
        uint creationDate;
        bytes description;
        address owner;
    }

    Post[] public posts;
  
   event NewPost(
       uint indexed postId,
       address owner,
       bytes decription
   )

    function createPost(bytes _description) public {
        uint postId = posts.length++;
        posts[postId] = Post({
            creationDate: block.timestamp,
            description: _descriotion,
            owner: msg.sender
        })
        emit NewPost(postId, msg.sender, _description)
    }
}