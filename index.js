function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const myFunc = function(){}
    return myFunc;
} 

function returnsAnAnonymousFunction (){
    return () => '';
}