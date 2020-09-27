        /*
            1 - JAVASCRIPT É SINGLE THREAD -> INTERPRETADA.
            2 - IO (INPUT/OUTPUT) NÃO BLOQUEANTE.

            ASSÍNCRONO: OPERAÇÕES QUE NÃO SÃO BLOQUEANTES.
            EX: 
                1 - PEGAR UM CEP DE UM BANCO DE DADOS. 
                2 - PESQUISAR O CEP EM UMA API DO CORREIOS.
                
            FOI A PARTIR DISSO QUE SURGIU A IDEIA DE PROMISES. 

            DEPOIS DE ENTENDER: ASYNC / AWAIT.
        */

        // ENTENDENDO O FUNCIONAMENTO DO MOTOR DO JAVASCRIPT //

        //console.log('Primeiro');

        // Não é javascript que controla o setTimeout, é uma API do browser.
        // Ele adiciona a função em uma fila e depois é lido todo todo o escopo.

        /*
        
        setTimeout(function(){ 
            console.log("Segundo");
        }, 0);

        */

        // console.log('Terceiro');

        /* setTimeout(function(){ 
            console.log("Quarto");
        }, 0); */

        // console.log("Quinto")

        /* Console 
            Primeiro
            Terceiro
            Quinto
            Segundo
            Quarto
        */

        // OS TIPOS DE PROMISES //

        /*
            PENDENTE
            REALIZADA
            REJEITADO
            ESTABELECIDA 
        */

        // A função precisa retornar uma promise
        // É possível passar parâmetros
        function jaRealizada() {
            // resolve -> then
            return Promise.resolve('65052220'); // Utilizada no último exemplo.
        }

        function jaRejeitada() {
            // reject -> catch
            return Promise.reject();
        }

        // Como retornar o resultado de um promise? 
        // A promise também está em uma fila, porém ela é preferencial.
        jaRealizada().then(function (response) {
            console.log('Promise resolvida com sucesso ' + response);
        })

        jaRejeitada().catch(function () {
            console.log('REJEITADA');
        })


        /* 
            FILA DE INVOCAÇÃO 

            1 - CAIXA JAVASCRIPT (CÓDIGO)
            2 - FILA PREFERENCIAL (PROMISES)
            3 - FILA NORMAL (setTimeout, onClick)
        
        */

        // Trabalhando com uma promises // 

        function promiseTrabalhada() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('Hello Word')
                }, 1000);
            })
        }

        // o Then só é executado quando o resolve for chamado
        promiseTrabalhada().then(function (message) {
            console.log(message);
        })

        // Usando fetch -> API de requisição do browser.

        /* É apenas um exemplo 
        
        fetch('https://viacep.com.br/ws/65052220/json/')
        .then((res)=> res.json()) // também é um operação assíncrona.
        .then((data)=> {
            console.log(data);
        }) 
        */

        jaRealizada()
            .then(function (cep) {
                return fetch(`https://viacep.com.br/ws/${cep}/json/`)
            })
            .then(function (data) {
                return data.json()
            })
            .then(function (endereco) {
                console.log(endereco);
            })