/****************************************************************
 * objetivo: fazer uma calculadora, com as 4 operações basicas  *
 * data:11/08/23                                                *
 * autor: Jessica Pereira dos Santos                            *
 * versão:1.0                                                   *
 ***************************************************************/

var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('---------------Bem vindo---------------------')
entradaDeDados.question('digite o primeiro valor da operação: ', function (valorDigitado) {
    let valor1 = valorDigitado.replace(',', '.');

    entradaDeDados.question('digite o segundo valor da operação:', function (valor2Digitado) {
        let valor2 = valor2Digitado.replace(',', '.');

        entradaDeDados.question('qual operação deseja fazer?: [ + , - , / , x]: ', function (operaçãoEscolhida) {
            let operação = operaçãoEscolhida;
            let resultado

            valor1 = Number(valor1)
            valor2 = Number(valor2)

            if (valor1 == '' || valor2 == '') {
                console.log(' por favor insira os dois valores para realizar a operação!! ')
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log(' por favor informe apenas numeros!!')
            } else if (valor1 == '0' || valor2 == '0') {
                console.log(' a operação não pode ser realizada com o numero 0')
            } else if (operação == '+') {
                resultado = valor1 + valor2
            } else if (operação == '-') {
                resultado = valor1 - valor2
            } else if (operação == 'x') {
                resultado = valor1 * valor2
            } else if (operação == '/') {
                resultado = valor1 / valor2

            }

            console.log('resultado: ' + resultado)

            entradaDeDados.close();
        })
    })
})