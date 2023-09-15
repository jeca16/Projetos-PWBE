/****************************************************************
 * objetivo: fazer uma calculadora, com as 4 operações basicas  *
 * data:18/08/23                                                *
 * autor: Jessica Pereira dos Santos                            *
 * versão:1.0                                                   *
 ***************************************************************/

// import da biblioteca de calculosMatematicos
var calculosMatematicos = require('./modulo/calculosMatematicos.js');

var readline = require('readline');

var EntradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//entrada de dados do primeiro valor
EntradaDeDados.question('Digite o primeiro valor: ', function (numero1) {
    let valor1 = numero1.replace(',', '.');

    //entrada de dados do segundo valor 
    EntradaDeDados.question('Digite o segundo valor: ', function (numero2) {
        let valor2 = numero2.replace(',', '.');

        //entrada de dados para escolher a opção de calculo
        EntradaDeDados.question('escolha uma opção de calculo: [somar | subtrair| multiplicar| dividir]', function (opcao) {

            //toUpperCase() converte uma string para maiusculo
            //toLowerCase() converte uma string para minusculo 
            let operacao = opcao.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '')
                console.log('ERRO: é obrigtorio a entrada de dados nos valores');
            else if (isNaN(valor1) || isNaN(valor2))
                console.log('ERRO: é obrigatoria a entrada somente de numeros')
            else {
                //conversão de string para numero
                valor1 = Number(valor1)
                valor2 = Number(valor2)

                // // validação do tipo de operação matemática
                // if (operacao == 'SOMAR')
                //     resultado = valor1 + valor2;
                // else if (operacao == 'SUBTRAIR')
                //     resultado = valor1 - valor2;
                // else if (operacao == 'MULTIPLICAR')
                //     resultado = valor1 * valor2;
                // else if (operacao == 'DIVIDIR') {
                //     if (valor2 == '0')
                //         console.log(' ERRO: não é possivel realizar uma divisão com 0');
                //     else
                //         resultado = valor1 / valor2;
                // }else 
                //     console.log('ERRO: é obrigatorio escolher apenas as operações listadas!');



                resultado = calculosMatematicos.calculadora(valor1, valor2, operacao);
                //validação da variavel undefined
                if (resultado)
                     console.log(resultado);

            }

            EntradaDeDados.close();

        });
    });
});
