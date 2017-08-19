var arr = [1,7,3,6,4,9,2,8,5,5,5,5,6,6,7,7,5,4,3,7,8, 10];

var QuickSort = function() {
    this.sort = function(arr, start=0, end=arr.length) {
        if (start < end) {
            var partitionIndex = _partition(arr, start, end);
            this.sort(arr, start, partitionIndex -1);
            this.sort(arr , partitionIndex + 1, end);
        }
    };

    function _partition(arr, start, end) {

        var pivot = arr[end];
        var partitionIndex = start;
        for(var i = start; i<end; i++) {
            if (arr[i] < pivot) {
                var temp = arr[i];
                arr[i] = arr[partitionIndex];
                arr[partitionIndex] = temp;
                partitionIndex ++;
            }
              }
                var temp1 = arr[partitionIndex];
                arr[partitionIndex] = arr[end];
                arr[end] = temp1;
                return partitionIndex;

      

        return partitionIndex;
    }

    return arr;
}


var quick = new QuickSort();
console.info(quick.sort(arr));