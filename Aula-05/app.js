/*********************************************************************************
 * objetivo: Realizar calculo de uma determinada tabuada                         *
 * data:01/09/23                                                                 *
 * autor: Jessica Pereira dos Santos                                             *
 * versão:1.0                                                                    *
 ********************************************************************************/

var calculoTabuada = require('./modulo/calculoTabuada.js')
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada: ', function(valortabuada){
    let tabuada = valortabuada;

    entradaDeDados.question('Digite o contador inicial: ', function(valorInicial){
        let contador = valorInicial;

        entradaDeDados.question('Digite o contador final: ', function(valorFinal){
            let contadorFinal = valorFinal

            calculoTabuada.calcularTabuada(tabuada, contador, contadorFinal)
        })

    })
})