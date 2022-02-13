function prime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0)
            return 'notPrime';
    }
}
function isPrime(n) {
    for (var i = 2; i <= n; i++) {
        var prime_1 = false;
        for (var j = 2; j <= i; j++) {
            if (i % j == 0 && j != i) {
                prime_1 = true;
            }
        }
        if (prime_1 == false)
            console.log(i);
    }
}
isPrime(20);
