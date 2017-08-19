var BST = function() {
   var count = 0;
   var root = null;
    var OrderValue = [];
   
   var Node = function(data) {
       this.data = data;
       this.left = null;
       this.right = null;
   };

   this.inorder = function (current = root){
       if(current){
          this.inorder(current.left);
          OrderValue.push(current.data);
          this.inorder(current.right);
          return OrderValue;
       }
   };


    this.height = function(current = root) {
       if(!current) return -1;
       var leftHeight = this.height(current.left);
       var rightHeight = this.height(current.right);

       return Math.max(leftHeight, rightHeight) + 1;
    }
       
   
   this.minNode = function (test=root) {
       if (!test) {
           return 0;
       }

       if (test.left) {
           return this.minNode(test.left);
       }

       return test.data;
   };

   this.maxNode = function (test=root) {
       if (!test) {
           return 0;
       }

       if (test.right) {
           return this.maxNode(test.right);
       }

       return test.data;
   };

   this.search = function(data, test=root) {
       if (test == null) return false;
       if (test.data == data)  return true;

       if (data <= test.data) {
           return this.search(test.left, data);
       } else {
           return this.search(test.right, data);
       }
   };
       
   this.insert = function(data) {
      if (!root) {
          root = new Node(data);
          return;
      }
      var current = root;
      var newNode = new Node(data);
      while(current) {
          if (data < current.data) {
              if (!current.left) {
                  current.left = newNode;
                  break;
              } else {
                  current = current.left;
              }
          } else {

              if (!current.right) {
                current.right = newNode;
                break;
              } else {
                  current = current.right;
              }
          }
      }
   }
};

var bst = new BST();
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(1);
console.info(bst.inorder());
bst.search(3);
console.info(bst.minNode());
console.info(bst.maxNode());
console.info('xc',bst.height());
console.info('duplicate', bst.duplicate());