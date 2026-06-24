class Pessoa {
nome: string;
idade: number;

constructor(nome: string, idade: number) {
this.nome = nome;
this.idade = idade;
}
apresentar(): void {
console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}
}
// Instanciando um objeto da classe Pessoa
let pessoa1 = new Pessoa("Malcolm", 17);
pessoa1.apresentar();
let pessoa2 = new Pessoa("jurema", 17);
pessoa2.apresentar();