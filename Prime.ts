function prime(n:number){
   for(let i = 2; i < n;i++){
       if(n%i == 0)
        return 'notPrime';
    }
}
function isPrime(n:number){
    for(let i:number = 2; i <= n; i++){
        let prime = false;
    for(let j:number = 2; j <= i; j++){
        if(i % j == 0 && j != i){
            prime = true;
        }
    }
    if(prime == false) 
    console.log(i);
    
    }
}
isPrime(20);