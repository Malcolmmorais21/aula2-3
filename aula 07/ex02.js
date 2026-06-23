let alunos = [ 
   {nome: "Ian", idade: 20},
{nome: "Don ruan", idade: 22},
   {nome: "Carlão", idade: 20},
{nome: "Pedrão", idade: 18},
{nome: "Malcolm", idade: 17},
]
for(let i = 0; i < alunos.length; i++) { 
  if(alunos[i].idade >= 18) { 
    console.log(`${alunos[i].nome} é maior de idade`);
  } else {
    console.log(`${alunos[i].nome} é menor de idade`)
}
}