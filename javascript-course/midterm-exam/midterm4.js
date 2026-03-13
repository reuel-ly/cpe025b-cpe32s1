const memo = {};

function power(base, exp){

    expAbs = Math.abs(exp);
    result = 1;
    for (let i=0; i < expAbs; i++){
        if (`${i}*${base}` in memo){
            result = memo[`${i}*${base}`]
        }
        else{
            result = result * base;
            memo[`${i}*${base}`] = result
        }
        
    }

    if (exp < 0){
        return 1/result;
    }
    else{
        return result;
    }
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2))
