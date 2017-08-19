function Stack() {
   var top = null;
   var count = 0;
   this.GetCount = function() {
      return count;      
   };

   this.Push = function(data) {
       var node = {
           data: data,
           next: null
       };

       node.next = top;
       top = node;
       count ++;
   };

   this.Pop = function() {
       if (top == null) {
           return null;
       }

       var out = top;
       top = top.next;
       if (count > 0) {
           count --;
       }
       
       return out.data;
   }

   this.DisplayAll = function() {
      if (top == null) {
          return null;
      }

      var arr = new Array();
      var current = top;

      for(var i = 0; i < count; i++) {
        arr.push(current.data);
        current = current.next;
      }

      return arr;
   };

   this.PeekAll = function() {
       if (top ==null) {
           return null;
       }

       return top.data;
   }

}

var stack = new Stack();

console.info(stack.GetCount());
console.info(stack.Push(1), stack.GetCount());
console.info(stack.Push(2), stack.GetCount());
console.info(stack.Push(3), stack.Pop());
console.info(stack.DisplayAll());
console.info(stack.PeekAll());