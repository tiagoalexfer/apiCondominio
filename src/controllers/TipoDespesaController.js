const database = require('../database/connection')

class TipoDespesaController {

    //Insere nova despesa
    novoTipoDespesa(request, response) {
        const { nome, status } = request.body

        console.log(nome, status)

        database.insert({ nome, status }).table("tipodespesa").then(data => {
            console.log(data)
            response.json({ message: "Tipo Despesa criada com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca todas as despesas
    listarTipoDespesas(request, response) {
        database.select("*").table("tipodespesa").then(tipodespesas => {
            console.log(tipodespesas)
            response.json(tipodespesas)
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca um tipo tarefa pro ID
    listarTipoDespesaId(request, response) {
        const id = request.params.id
        console.log(id)
        database.select("*").table("tipodespesa").where({ iddespesa: id }).then(tipodespesa => {
            console.log(tipodespesa)
            response.json(tipodespesa)
        }).catch(error => {
            console.log(error)
        })
    }

    //atualiza tipo tarefa
    atualizaTipoDespesa(request, response) {
        const id = request.params.id
        const { nome, status } = request.body

        database.where({ iddespesa: id }).update({ nome: nome, status: status }).table("tipodespesa").then(data => {
            response.json({ message: "Tipo Despesa Atualizado com Sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

    //deletar tipo tarefa
    deletaTipoDespesa(request, response) {
        const id = request.params.id

        database.where({ iddespesa: id }).del().table("tipodespesa").then(data => {
            response.json({ message: "Tipo Despesa removido com Sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

}

module.exports = new TipoDespesaController()