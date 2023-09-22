/*********************************************************************************
 * objetivo: Realizar calculo de um determinado IMC                              *
 * data:15/09/23                                                                 *
 * autor: Jessica Pereira dos Santos                                             *
 * versão:1.0                                                                    *
 ********************************************************************************/

var calculoImc = require('./modulo/CalculoImc.js')
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu peso: ', function(valorPeso){
    let peso = valorPeso;

    entradaDeDados.question('Digite sua altura: ', function(valorAltura){
        let altura = valorAltura;

        let resultadoImc = calculoImc.calcularImc(peso, altura)
        console.log (calculoImc.situacao(resultadoImc))
        entradaDeDados.close()
            
    })

})
