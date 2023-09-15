// função para calcular o desconto
function valorDesconto(valor, pagamento, resultado, ){

    let valor2;
    

    switch (pagamento) {
        case '1':
            valor2 = valor * 0.08 
            resultado = valor - valor2
            break;

        case '2':
            valor2 = valor * 0.04
            resultado = valor - valor2
            break;

        case '3':
            resultado = valor / 2
            break;

        case '4':
            valor2 = valor / 4
            resultado = valor2 + (valor2*0.08)

            break;

        default:
            console.log('ERRO: é obrigatorio escolher apenas as formas de pagamento listadas!');
            break;
    }
    if (resultado != undefined)
        return Number (resultado).toFixed(2);
    else
        return false;

}
module.exports={
    valorDesconto
}