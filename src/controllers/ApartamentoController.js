const database = require('../database/connection')

class ApartamentoController {

    //inserir Apartamento
    novoApartamento(request, response) {
        const { numero, responsavel, idcondominio } = request.body

        database.insert({ numero, responsavel, idcondominio }).table("apartamento").then(data => {
            response.json({ message: "Apartamento cadastrado com sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca todos os apartamentos cadastrados
    listarApartamentos(request, response) {
        database.select("*").table("apartamento").then(apartamento => {
            response.json(apartamento)
        }).catch(error => {
            console.log(error)
        })
    }

    //Buscar por ID
    listarApartamentoId(request, response) {
        const id = request.params.id

        database.select("*").table("apartamento").where({ idapartamento: id }).then(apartamento => {
            response.json(apartamento)
        }).catch(error => {
            console.log(error)
        })
    }

    //atualiza apartamento
    atualizarApartamento(request, response) {
        const id = request.params.id
        const { numero, responsavel, idcondominio } = request.body

        database.where({ idapartamento: id }).update({ numero: numero, responsavel: responsavel, idcondominio: idcondominio }).table("apartamento").then(data => {
            response.json({ message: "Dados apartamento atualizados como sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //deletar dados apartamento
    deletarApartamento(request, response) {
        const id = request.params.id

        database.where({ idapartamento: id }).del().table("apartamento").then(data => {
            response.json({ message: "Dados apartamento removidos como sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

}

module.exports = new ApartamentoController()
