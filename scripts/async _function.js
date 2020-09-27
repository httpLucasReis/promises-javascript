/*A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction. */

async function f(){
    return 1;
    // O que está acontecendo é 
    // return Promise.resolve(1);
}

// Ela sempre retorna uma promise 

f().then((number)=>{
    console.log(number);
});


/* 
    A palavra-reservada await faz o javascript esperar até que 
    a promise seja resolvida e retorne seu resultado
*/

async function f2(){
    // Declarando um promise
    let promise = new Promise(function(resolve,reject){
        setTimeout(() => resolve("Done"), 5000);
    })

    // Esperando a promise ser resolvida 
    let result = await promise;

    // Após a promise ser resolvida podemos continuar
    // com a execução do script.
    console.log(result);
}

f2();


/* NÃO UTILIZE await in funções regulares.
    function f() {
        let promise = Promise.resolve(1);
        let result = await promise; // Syntax error
    }

    isso resulta em um erro, pois o await só funciona com
    funções assíncronas.
*/

// Substituindo .then por chamadas await de uma função assíncrona.


async function createList(){
    // Realizando uma requisão e criando um JSON com o response.
    let response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    let states = await response.json();

    let list = document.createElement("ul");
    states.forEach((state)=>{
        let li = document.createElement("li");
        let content = document.createTextNode(`Nome: ${state.nome}, sigla: ${state.sigla}`);
        li.appendChild(content);
        list.appendChild(li);
    })

    // Esperando 5 segundos
    await new Promise((resolve,reject)=>{setTimeout(resolve, 5000)});

    document.body.appendChild(list);

    return;
}

createList();