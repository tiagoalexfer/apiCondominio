const database = require('../database/connection')


class CondominioController {

    //Insere Condiminio
    novoCondominio(request, response) {
        const { nome, endereco, numero, bairro, cidade, estado } = request.body

        console.log(nome, endereco, numero, bairro, cidade, estado)

        database.insert({ nome, endereco, numero, bairro, cidade, estado }).table("condominio").then(data => {
            console.log(data)
            response.json({ message: "Condominio criado com sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //busca todos os condominios
    listaCondominio(request, response) {
        database.select("*").table("condominio").then(condominio => {
            console.log(condominio)
            response.json(condominio)
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca condominio por ID
    listaCondominioId(request, response) {
        const id = request.params.id
        console.log(id)
        database.select("*").table("condominio").where({ idcondominio: id }).then(condominio => {
            console.log(condominio)
            response.json(condominio)
        }).catch(error => {
            console.log(error)
        })
    }

    //atualiza condominio
    atualizaCondominio(request, response) {
        const id = request.params.id
        const { nome, endereco, numero, bairro, cidade, estado } = request.body

        database.where({ idcondominio: id }).update({
            nome: nome, endereco: endereco, numero: numero, bairro: bairro, cidade: cidade, estado: estado
        }).table("condominio").then(data => {
            response.json({ message: "Condominio atualizado com sucesso!!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //deletar condominio
    deletaCondominio(request, response) {
        const id = request.params.id

        database.where({ idcondominio: id }).del().table("condominio").then(data => {
            response.json({ message: "Condomino removido com sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

}

module.exports = new CondominioController()