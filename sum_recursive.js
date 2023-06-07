function sumToOne(n){
    if(n === 1){
        return 1;
    }
    return n + sumToOne(n-1);

}
console.log(sumToOne(4));
/*
sumToOne(1) = 1
sumToOne(2) = 2 + 1 = 2 + sumToOne(1)
sumToOne(3) = 3 + 2 + 1 = 3 + sumToOne(2)
sumToOne(4) = 4 + 3 + 2 + 1 = 4 + sumToOne(3)
So sumToOne(n) = n + sumToOne(n-1)
*/