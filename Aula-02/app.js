/*************************************************************
* Objetivo:manipular entrada e saída de dados para o usuário *
* data: 04/08/23                                             *
* autor: Jessica Pereira dos Santos                          *
* versão: 1.0                                                * 
*************************************************************/
// import da biblioteca de entrada de dados via teclado 
var readline = require('readline');

// criando um objeto entradaDeDados para ser uma referencia da biblioteca readline 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// função de callBack que permite apresentar uma mensagem no terminal, e captar a digitação do usuário.
// o dado digitado chegará para dentro da função através do seu argumento (nomeUsuario)


//  var nome = nomeUsuario; - recebe o nome digitado 
// console.log(' Bem vindo ao aplicativo, ' + nome); - exibe uma mensagem no terminal 

// entrada de dados do nome 
entradaDeDados.question('Digite seu nome: ', function (nomeUsuario) {
    var nome = nomeUsuario;

    // entrada de dados da idade 
    entradaDeDados.question('Digite sua idade: ', function (idadeUsuario) {
        var idade = idadeUsuario;

        entradaDeDados.question('Digite seu numero de telefone: ', function (numeroDeTelefone) {
            var telefone = numeroDeTelefone;

            entradaDeDados.question('Digite seu email: ', function (emailUsuario) {
                var email = emailUsuario;

                console.log(' Bem vindo ao aplicativo, ' + nome);
                console.log(' A idade informada foi, ' + idade);
                console.log(' O numero de telefone informado foi, ' + telefone);
                console.log(' O email informado foi, ' + email);

                // ele encerra o procssamento de entrada de dados
                //  com ele não precisa dar ctrl-c todo fim de codigo 
                entradaDeDados.close();
            });
        });
    });
});