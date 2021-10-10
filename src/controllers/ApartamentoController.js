const database = require('../database/connection')

class ApartamentoController {

    //inserir Apartamento
    novoApartamento(request, response) {
        const { ap_number, responsible, condominium_id } = request.body

        database.insert({ ap_number, responsible, condominium_id }).table("apartaments").then(data => {
            response.json({ message: "Apartamento cadastrado com sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca todos os apartamentos cadastrados
    listarApartamentos(request, response) {
        database.select("*").table("apartaments").then(apartamento => {
            response.json(apartamento)
        }).catch(error => {
            console.log(error)
        })
    }

    //Buscar por ID
    listarApartamentoId(request, response) {
        const id = request.params.id

        database.select("*").table("apartaments").where({ id: id }).then(apartamento => {
            response.json(apartamento)
        }).catch(error => {
            console.log(error)
        })
    }

    //atualiza apartamento
    atualizarApartamento(request, response) {
        const id = request.params.id
        const { ap_number, responsible, condominium_id } = request.body

        database.where({ id: id }).update({ ap_number: ap_number, responsible: responsible, condominium_id: condominium_id }).table("apartaments").then(data => {
            response.json({ message: "Dados apartamento atualizados como sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //deletar dados apartamento
    deletarApartamento(request, response) {
        const id = request.params.id

        database.where({ id: id }).del().table("apartaments").then(data => {
            response.json({ message: "Dados apartamento removidos como sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

}

module.exports = new ApartamentoController()
