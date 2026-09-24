

// Type your code below this line!

function ShoppingList() {
  this.items = [];

  this.addItem = function(name, quantity) {
    this.items.push({ name: name, quantity: quantity });
  };

  this.printList = function() {
    console.log(this.items);
  };
}

const count = parseInt(process.argv[3]);

const myList = new ShoppingList();

for (let i = 0; i < count; i++) {
  const name = process.argv[4 + i * 2];
  const quantity = parseInt(process.argv[5 + i * 2]);
  myList.addItem(name, quantity);
}

myList.printList();


// Type your code above this line!

