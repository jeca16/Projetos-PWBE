/**********************************************************************************
 * objetivo: Arquivo de funções para calcular uma tabuada                         *
 * data:01/09/23                                                                  *
 * autor: Jessica Pereira dos Santos                                              *
 * versão:1.0                                                                     *
 *********************************************************************************/

const calcularTabuada = function (valortabuada, contadorInicial, contadorFinal) {
    let tabuada = String(valortabuada).replace(',', '.');
    let contInicial = String(contadorInicial).replace(',', '.');
    let contFinal = String(contadorFinal).replace(',', '.');
    let resultado;
    let status = false;
    // let valorAuxiliar;

    if (Number(contFinal) < Number(contInicial)) {
        // valorAuxiliar = contInicial;
        // contInicial = contFinal;
        // contFinal = valorAuxiliar;

        contFinal = contadorInicial;
        contInicial = contadorFinal;
    }

    if (tabuada == '' || contInicial == '' || contFinal == '')
        console.log('ERRO: é obrigatório a entrada de todos os valores');
    else if (isNaN(tabuada) || isNaN(contInicial) || isNaN(contFinal))
        console.log('ERRO: é obrigatório a entrada somente números');
    else {
        contInicial = Number(contInicial);
        contFinal = Number(contFinal);
        tabuada = Number(tabuada);

        // // exemplo usando o while
        // while (contInicial <= contFinal) {
        //     resultado = tabuada * contInicial;
        //     console.log(tabuada + 'x' + contInicial + '=' + resultado);
        //     contInicial ++;
        //     status = true;
        // }

        // exemplo usando for 
        for( ; contInicial < contFinal; contInicial++){
                resultado = tabuada * contInicial;
                console.log(tabuada + 'x' + contInicial + '=' + resultado)
                status = true;
        }
    }

    return status;

}

module.exports={
    calcularTabuada
}
// console.log(calcularTabuada(2,0,10));
