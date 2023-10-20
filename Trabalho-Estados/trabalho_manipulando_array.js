/*****************************************************************************
 * objetivo: fazer funções que listem as cidades, estados e sua informações  *
 * data: 20/10/23                                                            *
 * autor: Jessica Pereira dos Santos                                         *
 * versão:1.0                                                                *
 ****************************************************************************/

var estados_e_cidades = require('./modulo/estados_cidades')
 
const getListaDeEstados = function (){
    let listar_estadosJson = {}
    let listar_estadosArray = []

    estados_e_cidades.estadosCidades.estados.forEach(function(sigla, índice){
        listar_estadosArray.push(estados_e_cidades.estadosCidades.estados[índice].sigla)
    })

    listar_estadosJson.uf = listar_estadosArray
    listar_estadosJson.quantidade = listar_estadosArray.length

    console.log(listar_estadosJson)
    return listar_estadosJson
}

// getListaDeEstados()

const getDadosEstado = function(){
    let dados_estadosJson = {}
    let dados_estadosArray = []

    
}

getDadosEstado()