const database = require('../database/connection')


class CondominioController {

    //Insere Condiminio
    novoCondominio(request, response) {
        const { name, address, number, district, city, state } = request.body
        database.insert({ name, address, number, district, city, state }).table("condominiums").then(data => {
            response.json({ message: "Condominio criado com sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //busca todos os condominios
    listaCondominio(request, response) {
        database.select("*").table("condominiums").then(condominio => {
            response.json(condominio)
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca condominio por ID
    listaCondominioId(request, response) {
        const id = request.params.id
        database.select("*").table("condominiums").where({ id: id }).then(condominio => {
            response.json(condominio)
        }).catch(error => {
            console.log(error)
        })
    }

    //atualiza condominio
    atualizaCondominio(request, response) {
        const id = request.params.id
        const { name, address, number, district, city, state } = request.body

        database.where({ id: id }).update({
            name: name, address: address, number: number, district: district, city: city, state: state
        }).table("condominiums").then(data => {
            response.json({ message: "Condominio atualizado com sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //deletar condominio
    deletaCondominio(request, response) {
        const id = request.params.id

        database.where({ id: id }).del().table("condominiums").then(data => {
            response.json({ message: "Condomino removido com sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

}

module.exports = new CondominioController()