var main = function() {
    this.callFunction = function(N) {
        for(var i = 0; i<=N; i++) {
            console.info("Maximum Number of A's with %d keystrokes is %d\n", i, this.findoptimal(i))
        }
    };

    this.findoptimal = function(N) {
        if (N <=6) {
            return N;
        }

        var max = 0;
        var b;
        for(b = N-3; b>=1; b--) {
            var current = (N-b-1)*this.findoptimal(b);
            if (current > max) {
                max = current;
            };
        }

        return max;
    } 
};
var s = new main();

s.callFunction(20)