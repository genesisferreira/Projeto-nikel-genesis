const nome = "genesis";
let nome2 = "";
let pessoa ={
    nome:"genesis ferreira",
    idade:"33",
    trabalho:"programador",
}


function alterarNome() {
nome2="marcia"
console.log("valor alterado");
console.log(nome2);
}


function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome");
    console.log(nome2)
}



console.log(pessoa);

console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("profissao:");
console.log(pessoa.trabalho);

//recebeEalteraNome("ivan");
//recebeEalteraNome("miguel");
//alterarNome();

