console.log("Código\tOperação");
console.log("a\tMédia aritmética entre os números digitados");
console.log("b\tDiferença do maior pelo menor");
console.log("c\tProduto entre os números digitados");
console.log("d\tDivisão do primeiro pelo segundo");

let n1 = 10;
let n2 = 5;
let op = "b".toLowerCase();

switch (op) {
  case "a":
    console.log(`Média: ${(n1 + n2) / 2}`);
    break;
  case "b":
    if (n1 >= n2) {
      console.log(`Diferença: ${n1 - n2}`);
    } else {
      console.log(`Diferença: ${n2 - n1}`);
    }
    break;
  case "c":
    console.log(`Diferença: ${n1 * n2}`);
    break;
  case "d":
    console.log(`Diferença: ${n1 / n2}`);
    break;
  default:
    console.log("Opção inválida");
} 
