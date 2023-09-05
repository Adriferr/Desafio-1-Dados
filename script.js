// exercício 1
// crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = "dia";

if(dia === "dia"){
    console.log("claro");
}else{
    console.log("de noite");
}

// exercício 2
// Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for(let numeroPar = 0; numeroPar <= 20; numeroPar+=2){
    console.log(numeroPar);
}

// exercício 3
// crie uma função que exiba uma mensagem no console

function exibirMensagem(){
    console.log("Bom dia Brasil");
}
exibirMensagem();

// exercício 4
// crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(nome){
    nome = "Adriano";
    console.log(nome);
}
exibirNome();

// exercício 5
// crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function pessoa(nome, idade, estiloMusical){
    nome = "Adriano";
    idade = "20 anos";
    estiloMusical = "pop e eletronica";
    console.log(nome + " " + idade + " " + estiloMusical);
}
pessoa();

// exercício 6
// crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function midia(filme, musica){
    filme = "Elementos";
    musica = "Ariana Grande - Tattooed Heart (Live from London)"
    console.log("filme: " + filme + " " + "música: " + musica);
}
midia();

// exercício 7
// crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero){
    console.log(numero*3);
}
triplo(3);

// exercício 8
// crie uma função que verifique se uma variável é true ou false

function verificacao(valor, conclusao){
    if(valor == 3){
        conclusao = true;
    }else{
        conclusao = false;
    }
    console.log(conclusao);
}
verificacao();

// exercício 9
// Crie um array que receba 5 itens e exiba no console.

let listaDeCompras = ["leite condensado", "doce de leite", "macarrão", "peito de frango", "molho de tomate"];
console.log(listaDeCompras);

// exercício 10
// Utilize um método para adicionar um nome ao inicio do array.
listaDeCompras.unshift("creme de leite");
console.log(listaDeCompras);


// exercício 11
// Utilize um método para remover o último nome do array.
listaDeCompras.pop();
console.log(listaDeCompras);


// exercício 12
// Utilize um método para adicionar dois nomes ao fim do array.
listaDeCompras.push("ketchup", "mostarda");
console.log(listaDeCompras);


// exercício 13
// Utilize um método para remover o primeiro nome do array.
listaDeCompras.shift();
console.log(listaDeCompras);

// exercício 14
// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort());

// exercício 15
// Crie um objeto que receba ao menos três propriedades sobre você.

let usuario = {
    nome: "Adriano",
    idade: "20 anos",
    estiloMusical: "pop e eletronica"
};

// exercício 16
// Adicione uma nova propriedade sem alterar seu objeto inicial.
usuario.corDosOlhos = "castanhos";

// exercício 17
// Remova uma propriedade desse objeto.
delete usuario.estiloMusical;

// exercício 18
// Mostre no console todas as propriedades desse objeto.
console.log(usuario);

// exercício 19
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    {
        nome: "Adriano",
        idade: "20 anos",
        telefone: "512",
        amigos: ["Nathalia", "Roberta", "Jamille", "Kauan"]
    },

    {
        nome: "Felipe",
        idade: "29 anos",
        telefone: "923",
        amigos: ["Manuella", "Matheus", "Rayla", "Arthur"]
    },

    {
        nome: "Eduarda",
        idade: "18 anos",
        telefone: "912",
        amigos: ["Lu", "Adriano", "Lucas", "Edsson"]
    },

    {
        nome: "Lu",
        idade: "18 anos",
        telefone: "012",
        amigos:["Guilherme", "Lucas", "Adriano", "Edsson"]
    },

    {
        nome: "Marcelo",
        idade: "18 anos",
        telefone: "753",
        amigos: ["Lucas", "Adriano", "Edsson", "Eduarda"]
    }
]

// exercício 20
// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[3]);
console.log(cadastro[2].amigos[1]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[0]);