let turma = String[1] = ["Ana", "Bruno", "Carlos"];
console.log("turma inicial:", turma); 

turma.push("Diana");
console.log("Após push:", turma);
// ["Ana", "Bruno", "Carlos", "Diana"]

let removido = turma.pop();
console.log("Removido:", removido); // "Diana"
console.log("Após pop:", turma);

turma.unshift("Zélia");
console.log("Após unshift", turma);
// ["Zélia", "Ana", "Bruno", "Carlos"]

turma.shift();
console.log("Após shift:", turma);
// ["Ana", "Bruno", "Carlos"]