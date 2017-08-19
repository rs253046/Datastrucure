var BubbleSort = function () {

    this.sort = function(arr, n = arr.length) {
        for(var i=1; i< n-1; i++) {
            flag = 0;
            for(var j=0; j <n-i-1 ; j++) {
                if (arr[j] > arr[j+1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    flag = 0;
                }
            }
            if (flag==0) break;

        }

        return arr;
    }
}

var bubble = new BubbleSort();

console.info(bubble.sort([1,2,4]));