function fib(n){
    if(n<=1){
        return n
    }
    return fib(n-2) + fib(n-1)
}

for(let i=0; i<=10; i++){
    console.log(fib(i))
}
