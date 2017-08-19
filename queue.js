function Queue() {
  var count = 0;
  var head = null;
  var tail = null;

  this.GetCount = function () {
      return count;
  };

  this.Enqueue = function (data) {
      var node = {
          data: data,
          next: head
      };

      if (head == null) {
          tail = node;
      }

      head = node;

      count ++;
  }; 

  this.Dequeue = function () {
      if (head == null) {
          return null;
      }
          var current = head;

      var out = tail;

      for(var i = 0; i< count-1; i++) {
          var previous = current;
          current = current.next;
      }

      if (count > 0) {
          previous.next = null;
          tail = previous;
      } else {
          head = null;
          tail = null;
      }

      count --;

      return out.data;
  }

  this.PeekAt = function (index) {
      if (index > -1 && index < count) {
          var current = head;

          for (var i = 0; i < index; i++) {
              current = current.next;
          }
          return current.data;
      } else {
          return 'Invalid Index';
      }
  }


  this.displayAll = function () {
    if (head == null) {
      return  null;
    }

    var arr = new Array();

    var current = head;

    for(var i = 0; i < count; i++) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

};

var queue = new Queue();

console.info(queue.GetCount());
console.info(queue.Enqueue(1));
console.info(queue.Enqueue(2));
console.info(queue.Enqueue(3));
console.info(queue.GetCount());
console.info(queue.Dequeue());
console.info(queue.Enqueue(3));
console.info(queue.Enqueue(4));
console.info(queue.Enqueue(5));
console.info(queue.PeekAt(4));
console.info(queue.displayAll());