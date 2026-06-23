let numeros = [10, 25, 37, 42, 58];

for (let i = 0; i < numeros.length; i++) { 
    console.log("índice " + i + ":"+ numeros[i]);
}

for(let num of numeros){ 
    console.log(num)
}

numeros.forEach((num, i ) => { 
    console.log(`posição ${i}: ${num}`);
});