const  arr1=[2,3,3,2,1];
const arr2=[2,3,4,5,6];
const combine= [...arr1,1222,12,112,223,233];
console.log(combine);


//rest parameter

function mult (...args){
    
    console.log(args.reduce(function(acc,currvalue){
        return acc * currvalue;
    }));
    
}
mult(2,4);
mult(4,5,3);