var Deque = function() {
   var head = null;
   var tail = null;
   var count = 0;

   var Node = function(data) {
	 this.data = data;
     this.next = null;
   };

   this.getCount = function() {
       return count;
   };  

   this.addHead = function(data) {
       var node = new Node(data);
       
       node.next = head;
       head = node;

       if (!tail) {
           tail = head;
       }

       count ++;
   };


   this.DisplayHeadToTail = function() {
       if (!head) {
           return null
       };

       var current = head;
       var arr = new Array();
       for(var i = 0 ; i < count; i++) {
           arr.push(current.data);
           current = current.next;
       }

       return arr;

   };

   this.removeHead = function() {
       if (!head) {
           return null;
       }

       if (count ==1) {
           head = null;
           tail = null;
       } else {
           head = head.next;
       }

       count --;
   };

   this.removeTail = function() {
      if (!tail) {
          return null;
      }

      var previous = null;
      var current = head;
      for(var i = 0; i < count -1; i++) {
          previous = current;
          current = current.next;
      }

      previous.next = null;
      tail = previous;
      count --;
   };

   this.DisplayTailToHead = function() {
       if (!head) {
           return null
       };

       return this.DisplayHeadToTail().reverse();

   };

   this.addTail = function(data) {
       var node = new Node(data);

       if (!head) {
           head = node;
       } else {
           tail.next = node;
       }

       tail = node;

       count ++;
   }
};

var deque = new Deque();

console.info(deque.addHead(1));
console.info(deque.addHead(2));
console.info(deque.addHead(3));
console.info(deque.addHead(4));
console.info(deque.addHead(5));
console.info(deque.addHead(6));
console.info(deque.addTail(1));
console.info(deque.removeHead());
console.info(deque.removeTail());
console.info(deque.DisplayHeadToTail());
console.info(deque.DisplayTailToHead());