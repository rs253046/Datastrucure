var arr = [1,3,4,2,8,9,7,5];


var MergeSort = function (){
    this.mergesort = function(array) {
        var n = array.length;
        
        if (n < 2) return;

        var mid = parseInt(n/2);

        var left = array.slice(0, mid);
        var right = array.slice(mid, arr.length);

        this.mergesort(left);
        this.mergesort(right);
        this.merge(left, right, array);


        return array;
    };

    this.merge = function(L, R, A) {
        var nL = L.length;
        var nR = R.length;

        var i = 0;
        var j = 0;
        var k = 0;
        while(i < nL && j < nR) {
            if (L[i] < R[j]) {
               A[k] = L[i];
               k++;
               i++;
            } else {
                A[k] = R[j];
                k++;
                j++;
            }
        }

        while (i < nL) {
            A[k]= L[i];
            i++;
            k++;
        }        

        while (j < nR) {
            A[k]= R[j];
            j++;
            k++;
        }
    }


};



var merge = new MergeSort();

console.info(merge.mergesort(arr));