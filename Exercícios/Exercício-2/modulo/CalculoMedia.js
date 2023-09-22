/******************************************************************************
* Objetivo:criar um programa que calcule a media do aluno                     *
* data: 22/09/23                                                              *
* autor: Jessica Pereira dos Santos                                           *
* versão: 1.0                                                                 * 
******************************************************************************/

const calcularMedia = function(primNota, segunNota, terNota, quarNota){
    let nota1 = String(primNota).replace(',','.');
    let nota2 = String(segunNota).replace(',','.');
    let nota3 = String(terNota).replace(',','.');
    let nota4 = String(quarNota).replace(',','.');

        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)

        resultado = (nota1 + nota2 + nota3 + nota4)/4
    
    return resultado;
}

const situacao = function(resultadoMedia){
    let status;
    let resultado = Number(resultadoMedia)


    if (resultado >= 70)
        status = 'Aprovado'
    else if (resultado < 50)
        status = 'Reprovado'
    else if(resultado = 50 && resultado < 69)
        status = 'está em exame'

    return status;
}

const novaMedia = function(resultadoMedia, notaExame){
    let resultado = Number(resultadoMedia)
    let nota5 = notaExame
    let novaMedia;
    let situacao;

    novaMedia = (resultado + nota5)/2

    if(novaMedia > 60)
        situacao = 'Aprovado em exame'
    else if( novaMedia < 60)
        situacao = 'Reprovado!!!'

    return situacao
}
module.exports ={
    calcularMedia,
    situacao,
    novaMedia
}