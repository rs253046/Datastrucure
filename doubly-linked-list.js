function DoublyLinkList() {
  var head = null;
  var tail = null;
  var count = 0;

  this.getHead = function() {
      if (head) {
          return head.data;
      }

      return null;
  };

  this.getTail = function() {
      if (tail) {
          return tail.data;
      }

      return null;
  };

  var Node = function(data) {
      this.data = data;
      this.next = null;
      this.previous = null;
  };

  this.DisplayAll = function() {

      if (!head) {
          return null;
      }

      var arr = new Array();
      var current = head;
      for(var i = 0; i < count; i++) {
          arr[i] = current.data;
          current = current.next;
      }

      return arr;
  };

  this.DisplayAllBackwards = function() {
      if (!head) {
          return null;
      }

      var arr = new Array();
      var current = tail;

      for(var i = 0; i < count; i++) {
          arr[i] = current.data;
          current = current.previous;
      }

      return arr;
  };

  this.DisplayAt = function(index) {
      if (index > -1 && index < count) {
          var current = head;
          for(var i = 0; i < index; i++) {
              current = current.next;
          }

          return current.data;
      } else {
          return null;
      }
  };

  this.AddFirst = function(data) {
      var node = new Node(data);
      node.next = head;

      head = node;

      if ( count == 0) {
          tail = head;
      } else {
          head.next.previous = head;
      }

      count ++;
  };

  this.AddLast = function(data) {
      var node = new Node(data);

      node.previous = tail;
      tail = node;

      if (count == 0) {
        head = tail;
      } else {
          tail.previous.next = tail;
      }

      count ++;
  };


  this.Add = function(data, index) {
      if (index > 0 && index < count) {
          var node = new Node(data);
          current = head;
          for(var i =0; i < index; i++) {
              current = current.next;
          }   

          current.previous.next = node;
          node.previous = current.previous;
          node.next = current;
          current.previous = node;

          count ++;
            
      } else if (index < 1) {
          this.AddFirst(data);
      } else {
          this.AddLast(data);
      }
  };

  this.RemoveAt = function(index) {
      if (index > 0 && index < count -1) {
         var current = head;
         for(var i =0; i < index; i++) {
             current = current.next;
         }

         current.previous.next = current.next;
         current.next.previous = current.previous;

         count --;
      } else if (index < 1) {
         this.RemoveFirst();
      } else {
          this.RemoveLast();
      }
  };

  this.RemoveFirst = function () {
    if (head) {
      head = head.next;
      count--;  

      if (count === 0) {
          tail = null;
      } else {
          head.previous = null;
      }
    }  
  };

  this.RemoveLast = function () {
      if (tail) {
          if (count === 1) {
              head = null;
              tail = null;
          } else {
              tail.previous.next = null;
              tail = tail.previous;
          }

          count --;
      }
  }

};


var dll = new DoublyLinkList();

dll.AddFirst(1);
dll.AddFirst(2);
dll.AddFirst(3);
dll.AddLast(5);
dll.Add(5, 1);
dll.RemoveAt(2);
dll.RemoveFirst();
dll.RemoveLast();
console.info(dll.DisplayAll());
console.info(dll.DisplayAllBackwards());
console.info(dll.DisplayAt(2));