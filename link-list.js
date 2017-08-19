function LinkList() {
   var head = null;
   var count = 0;

   this.getCount = function() {
      return count;
   };

   this.displayAll = function() {
      if (head == null) {
        return null;
      }
      
      var current = head;
      var arr = new Array();
      for(var i = 0; i < count; i++) {
          arr.push(current.data);
          current = current.next;
      }

      return arr;
   }

   this.displayAt = function(index) {
       if (index > -1 && index < count) {
           var current = head;
           for (var i = 0; i < index; i++) {
               current = current.next;
           }
           return current.data;
       } else {
           return null;
       }
   }

   this.addFirst = function(data) {
       var node = {
          data: data,
          next: head  
       }; 
       head = node;
       count ++;
   };

   this.removeFirst = function() {
       if (head == null) {
          return null;
       }
       var out = head;
       head = head.next;
       count--;
       return out;
   };
   
   this.add = function(data, index) {
       if (index == 0) {
           this.AddFirst(data);
       } else if (index > -1 && index < count) {
          var node = {
              data: data,
              next: null
          }; 

          var current = head;
          var previous = null;

          for(var i = 0; i < index; i++) {
               previous = current;
               current = current.next;
          }

          previous.next = node;
          node.next = curent.next;
          count ++;

       } else {
           return 'Out of range';
       }
   };
   
   this.remove = function(index) {
       if (index == 0) {
           this.removeFirst(data);
       } else if (index > -1 && index < count) {
         
          var current = head;
          var previous = null;

          for(var i = 0; i < index; i++) {
               previous = current;
               current = current.next;
          }
          
          previous.next = curent.next;
          count --;
          
       } else {
           return 'Out of range';
       }
   } 

};

var list = new LinkList();

console.info(list.addFirst(1));
console.info(list.addFirst(2));
console.info(list.addFirst(3));
console.info(list.addFirst(4));
console.info(list.addFirst(5));
console.info(list.addFirst(6));
console.info(list.displayAll());