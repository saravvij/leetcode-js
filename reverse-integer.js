const reverse = function(x) {
   
    let reversed = 0;
        
    while( x !== 0){
        reversed = Math.trunc((reversed * 10) + (x % 10));
        if( reversed > Number.MAX_SAFE_INTEGER || reversed < Number.MIN_SAFE_INTEGER)
            return 0;
        x = Math.trunc(x / 10 );
    }
        
    return reversed;
 };

 console.log(reverse(123));
