function demora500ms() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('demora500ms')
        }, 500);
    })
}

function demora200ms() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('demora200ms')
        }, 200);
    })
}

function jaRejeitada() {
    return Promise.reject('Fui rejeitada')
}

function buscarCEP() {
    return Promise.resolve('65052220');
}

function pegaCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

function extraiEndereco(data) {
    return data.json();
}

function exibeEndereco(endereco) {
    console.log(endereco);
}

function trataErro(error) {
    console.log('Aconteceu um error, ' + error)
}



// Método finally -> novo
// Ele sempre é executado


buscarCEP()
    .then(pegaCEP)
    .then(extraiEndereco)
    .then(exibeEndereco)
    .catch(trataErro)
    .finally(function () {
        console.log('Sempre executado!')
    })


// Como utilizar o Promise.All(array)
// o resultado vem ordenado conforme a posição do array
// retorna o resultado de cada promise

/*Promise.all([
    demora500ms(),
    demora200ms()
]).then (function(promisesJaResolvidas){
    console.log(promisesJaResolvidas);
}) */

// Como realizar a Promise.race(array)
// retornar a primeira promise resolvida ou rejeitada
// A ordem é muito importante

Promise.race([
    jaRejeitada(),
    demora500ms(),
    demora200ms()
]).then(function (promisesJaResolvidas) {
    console.log(promisesJaResolvidas);
}, function (valorRejeitada) {
    console.log(valorRejeitada);
})