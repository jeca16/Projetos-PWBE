/*****************************************************************************
 * objetivo: fazer funções que listem as cidades, estados e sua informações  *
 * data: 20/10/23                                                            *
 * autor: Jessica Pereira dos Santos                                         *
 * versão:1.0                                                                *
 ****************************************************************************/

var estados_e_cidades = require('./estados_cidades')
 
const getListaDeEstados = function (){
    let listar_estadosJson = {}
    let listar_estadosArray = []

    estados_e_cidades.estadosCidades.estados.forEach(function(sigla, índice){
        listar_estadosArray.push(estados_e_cidades.estadosCidades.estados[índice].sigla)
    })

    listar_estadosJson.uf = listar_estadosArray
    listar_estadosJson.quantidade = listar_estadosArray.length

    return listar_estadosJson
}

let contador = 0
const getDadosEstado = function(sigla){
    let dados_estadosJson = {}

    estados_e_cidades.estadosCidades.estados.forEach(function(dados_estado){
        if(sigla == estados_e_cidades.estadosCidades.estados[contador].sigla){
            dados_estadosJson.uf = estados_e_cidades.estadosCidades.estados[contador].sigla
            dados_estadosJson.descricao = estados_e_cidades.estadosCidades.estados[contador].nome
            dados_estadosJson.capital = estados_e_cidades.estadosCidades.estados[contador].capital
            dados_estadosJson.regiao = estados_e_cidades.estadosCidades.estados[contador].regiao
        }
        contador++
    })
    return dados_estadosJson
}

let contador2 = 0 
const getCapitalEstado = function(sigla){
    let capital_estadoJson = {}

    estados_e_cidades.estadosCidades.estados.forEach(function(){
        if(sigla == estados_e_cidades.estadosCidades.estados[contador2].sigla){
            capital_estadoJson.uf = estados_e_cidades.estadosCidades.estados[contador2].sigla, capital_estadoJson.descricao = estados_e_cidades.estadosCidades.estados[contador2].nome, capital_estadoJson.capital = estados_e_cidades.estadosCidades.estados[contador2].capital
        }
        contador2 ++
    })
    return capital_estadoJson
}

const getEstadosRegiao = function(regiao){

    regiaoEst = regiao

    let regiao_estadoJson = {}
    let regiao_estadoArray = []


    regiao_estadoJson.regiao = regiao
    estados_e_cidades.estadosCidades.estados.forEach(function(regiao){
        if(regiao.regiao == regiaoEst){

            let estado_regiao_Json = {}
            estado_regiao_Json.uf = regiao.sigla
            estado_regiao_Json.descricao = regiao.nome

            regiao_estadoArray.push(estado_regiao_Json)
        }
    })

    regiao_estadoJson.estados = regiao_estadoArray
    return regiao_estadoJson
}

const getCapitalPais = function(){
    let capital_pais_Json = {}
    let capital_pais_Array = []

    estados_e_cidades.estadosCidades.estados.forEach(function(capitalPais){
        if (capitalPais.capital_pais != undefined){

            let capitalEst = {}
            capitalEst.capital_atual = capitalPais.capital_pais.capital
            capitalEst.uf = capitalPais.sigla
            capitalEst.descricao = capitalPais.nome
            capitalEst.capital = capitalPais.capital
            capitalEst.regiao = capitalPais.regiao
            capitalEst.capital_pais_ano_inicio = capitalPais.capital_pais.ano_inicio
            capitalEst.capital_pais_ano_termino = capitalPais.capital_pais.ano_fim

            capital_pais_Array.push(capitalEst)
        }
    })

    capital_pais_Json.capitalEst = capital_pais_Array
    return capital_pais_Json
}

const getCidades = function(sigla){
    siglaEst = sigla
    let lista_cidades_Array = []
    let lista_cidades_Json = {}

    estados_e_cidades.estadosCidades.estados.forEach(function(cidades){
        if(cidades.sigla.includes(siglaEst )){
            lista_cidades_Json.uf = cidades.sigla
            lista_cidades_Json.descricao = cidades.nome
            lista_cidades_Json.quant_cidade = cidades.cidades.length

            cidades.cidades.forEach(function(cidade){
                let cidades_nome = cidade.nome
                lista_cidades_Array.push(cidades_nome)
            })
        }
    })
    lista_cidades_Json.cidades = lista_cidades_Array
    return lista_cidades_Json
}

module.exports={
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}
