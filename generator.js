function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

lowes = {
    getCheckDigit: function(preCheck){
        let result = 0;
        //First, loop through string one char at a time
        for(let i = 1; i < preCheck.length+1; i++){
            let digit = preCheck.charAt(i-1);
            if (i%2 == 0) {
                //Even digits * 3
                result += parseInt(digit)*3;
            } else {
                //Odd digits * 1
                result += parseInt(digit);
            }
        }
        return 10-result%10;
    },
    generateCoupon: function(code){
        let preCheck = "47000"+pad(getRandomInt(0,55000),5,"0")+pad(code,4,"0");
        return preCheck + this.getCheckDigit(preCheck);
    }
};