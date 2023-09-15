/******************************************************************************************************************
 * objetivo: fazer um programa para informar ao cliente o valor de um produto de acordo com a forma de pagamento  *
 * data:25/08/23                                                                                                  *
 * autor: Jessica Pereira dos Santos                                                                              *
 * versão:1.0                                                                                                     *
 *****************************************************************************************************************/

var calculoDesconto = require('./modelo/calculoDesconto.js');
var readline = require('readline');

var EntradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// entrada do valor do produto que o cliente deseja comprar
EntradaDeDados.question('Qual o valor do produto que deseja comprar?: ', function (valorProduto) {
    let valor = valorProduto.replace(',', '.')
    if(valor =='')
        console.log('ERRO: confira se digitou corretamente!!')
    else if(isNaN(valor))
        console.log('ERRO: pOR FAVOR DIGITE APENAS O VALOR')


    // entrada da forma de pagamento para informar o desconto e o valor do produto atualizado
    EntradaDeDados.question('Qual a forma de pagamento?: [1- á vista, 2-á vista no cartão, 3- em 2x sem juros, 4- em 4x com juros]', function (formaDePagamento) {
        let pagamento = formaDePagamento;
        let resultado;

        if (pagamento == '1')
            console.log('voce escolheu pagamento á vista')
        else if (pagamento == '2')
            console.log('voce escolheu pagamento á vista no cartão')
        else if (pagamento == '3')
            console.log('voce escolheu pagamento em 2x sem juros')
        else if (pagamento == '4')
            console.log('voce escolheu o pagamento em 4x com juros')
        else if(pagamento == '')
            console.log('É OBRIGATORIO A ENTRADA DE DADOS!!')

            resultado = calculoDesconto.valorDesconto(valor, pagamento, resultado, )
            if(resultado)
                console.log(resultado);
            
        EntradaDeDados.close();
    });
});