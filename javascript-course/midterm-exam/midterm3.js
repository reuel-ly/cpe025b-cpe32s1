function composePipeline(fns){
    return function newFunc(x){
        let result = x;
        console.log("1",result)
        for(let i = 0; i<fns.length; i++){
            console.log(fns[i])
            result = fns[i](result)
            console.log("Result", result)
        }
        return result;
    };
}

// Test Code
const add2 = x => x + 2;
const sqr = x => x * x;
const half = x => x / 2;
const pipeline = composePipeline([add2, sqr, half]);
console.log(pipeline(4));
