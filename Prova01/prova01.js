class  Produto { 
    Nome;
    preço;
    quantidade;
}
class constructor {
    nome;
    valor;
    quantidade;
    
}
let produtos = [ 
    new Produto("teclado mecanico", 250, 50),
    new Produto("Monitor 4K", 600, 10), 
    new Produto("mouse sem fio", 100, 40),
    new Produto("fone bluetooth", 80, 50),
    new Produto("controle ps4", 300, 4),
    new Produto("Xbox one", 2.800, 4),
    new Produto("PS5", 4.800, 3),
    new Produto("web can", 1000, 5)
];


let preço = 0;
let quantidade = 0;
let estoque = 0;

function calcularValorEstoque(produto){ 
    return(preço * quantidade)
}
for(let i = 0 < 5; i++;){ 
    console.log(`Repor estoque${i}`)
}





