let n = 432; 

if( n > 99 && n < 1000) { 
let centenas = (n - (n % 100)) / 100; 
console.log(`algarismo das centenas; ${centenas}`);
} else{ 
    console.log("numero fora do intervalo");
}