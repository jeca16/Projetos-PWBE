/***************************************************************************************************************
 * objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada                                          *
 * data: 22/09/23                                                                                              *
 * autor: Jessica Pereira dos Santos                                                                           *
 * versão:1.0                                                                                                  *
 **************************************************************************************************************/

var calculoTabuada = require('./modulo/calcularTabuada')
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada para inicial: ', function (valorInicialtabuada) {
    let tabuada = valorInicialtabuada;

    entradaDeDados.question('digite uma tabuada final: ', function (valorFinalTabuada) {
        let tabuadaFinal = valorFinalTabuada

        entradaDeDados.question('Digite o contador inicial: ', function (valorInicial) {
            let contador = valorInicial;

            entradaDeDados.question('Digite o contador final: ', function (valorFinal) {
                let contadorFinal = valorFinal

                if(tabuada == '')
                calculoTabuada.calcularTabuada(tabuada, tabuadaFinal, contador, contadorFinal)
            })

        })
    })
})

