

// Type your code below this line!

function FriendsList() {
  this.names = [];

  this.addFriend = function(name) {
    this.names.push(name);
  };

  this.printList = function() {
    console.log(this.names);
  };
}

const count = parseInt(process.argv[3]);

const myFriends = new FriendsList();

for (let i = 0; i < count; i++) {
  const name = process.argv[4 + i];
  myFriends.addFriend(name);
}

myFriends.printList();


// Type your code above this line!

