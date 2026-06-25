class Livro {
    autor; 
    titulo;
    quantidade; 
    emprestados;

constructor(autor, titulo, quantidade, emprestados){ 
this.autor = autor;
this.titulo = titulo;
this.quantidade = quantidade; 
this.emprestados = emprestados;

 }
}
let livros = [
    new Livro("franz kafka", "metamorfose", 5, 5),
    new Livro ("Djamila Ribeiro", "manual antirracista", 10, 8),
    new Livro ("Chico Buarque", "Budapeste", 8, 5),
    new Livro ("Eduardo galeano", "caçador de historias", 9, 7), 
    new Livro ("grupo do Racionais", "Racionais", 5, 2),
    new Livro ("Carolina maria de jesus", "Quarto de despejo", 9, 7),
];
function livrosDisponiveis(livro) { 
    return livro.quantidade - livro.emprestados;
}

let disponiveis = 0;
let indisponiveis = 0;
let exemplaresTotal = 0;
let exemplares = 0;

console.log("===Situação dos livros===");

for (let i = 0; i < livros.length; i++){ 
    console.log(`\nLivro ${livros[i].titulo}`)
    if(livrosDisponiveis(livros[i]) > 0) { 
        console.log(`Exemplares disponiveis: ${livrosDisponiveis(livros[i])}`)
        disponiveis++;
        exemplaresTotal += livrosDisponiveis (livros[i])

    }else{ 
        console.log("indisponivel");
        indisponiveis++;
    }
} 
let i = 0;
let livrosComExemplar = 0;

while (i < livros.length){ 
    if (livrosDisponiveis(livros[i]) > 0 ) { 
        livrosComExemplar++;
    }
    i++;
}

console.log("\n==================");
console.log("Resumo");
console.log("=====================");
console.log(`total de livros: ${livros.length}`);
console.log(`total de livros disponiveis ${disponiveis}`);
console.log(`total de exemplares disponiveis: ${exemplaresTotal}`);
console.log(`total de livros indisponiveis: ${indisponiveis}`);
console.log(`Livros com pelo menos um exemplar disponivel: ${livrosComExemplar}`);
{
     
}
