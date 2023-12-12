/**********************************************************************************
 * objetivo: Arquivo de funções para calcular uma tabuada                         *
 * data:01/09/23                                                                  *
 * autor: Jessica Pereira dos Santos                                              *
 * versão:1.0                                                                     *
 *********************************************************************************/

const calcularTabuada = function (valorInicialtabuada, valorFinaltabuada, contadorInicial, contadorFinal) {
    let tabuada = String(valorInicialtabuada).replace(',', '.');
    let finalTabuada = String(valorFinaltabuada).replace(',', '.');
    let contInicial = String(contadorInicial).replace(',', '.');
    let contFinal = String(contadorFinal).replace(',', '.');
    let resultado;
    let status = false;


    if (Number(contFinal) < Number(contInicial)) {
        contFinal = contadorInicial;
        contInicial = contadorFinal;
    }

    if (Number(finalTabuada) < Number(tabuada)) {
        finalTabuada = tabuada;
        tabuada = finalTabuada
    }

    if (tabuada == '' || finalTabuada == '' || contInicial == '' || contFinal == '')
        console.log('ERRO: é obrigatório a entrada de todos os valores');
    else if (isNaN(tabuada) || isNaN(finalTabuada) || isNaN(contInicial) || isNaN(contFinal))
        console.log('ERRO: é obrigatório a entrada somente números');
    else {
        contInicial = Number(contInicial);
        contFinal = Number(contFinal);
        tabuada = Number(tabuada);
        finalTabuada = Number(finalTabuada)

        while (finalTabuada <= tabuada) {
            while (contInicial <= contFinal) {
                resultado = tabuada * contInicial;
                console.log(tabuada + 'x' + contInicial + '=' + resultado);
                contInicial++;
                tabuada++;
                status = true;
            }
        }


    }

    return status;

}

module.exports = {
    calcularTabuada
}
