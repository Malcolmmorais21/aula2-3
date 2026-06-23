let a = [[1,2],[3,4],[5,6],[7,8],[9,10]
]
let soma = 0;

for(let i = 0; i < 5; i++) { 
    for (let j = 0; j < 2; j++) { 
        soma += a[i][j];
        console.log(a[i][j]);
    }
    console.log();
}
console.log(`Média: ${soma / 10}`);
