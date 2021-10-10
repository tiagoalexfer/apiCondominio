const database = require('../database/connection')

class TipoDespesaController {

    //Insere nova despesa
    novoTipoDespesa(request, response) {
        const { name, status } = request.body
        database.insert({ name, status }).table("expense_types").then(data => {
            response.json({ message: "Tipo Despesa criada com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca todas as despesas
    listarTipoDespesas(request, response) {
        database.select("*").table("expense_types").then(tipodespesas => {
            response.json(tipodespesas)
        }).catch(error => {
            console.log(error)
        })
    }

    //Busca um tipo tarefa pro ID
    listarTipoDespesaId(request, response) {
        const id = request.params.id
        database.select("*").table("expense_types").where({ id: id }).then(tipodespesa => {
            response.json(tipodespesa)
        }).catch(error => {
            console.log(error)
        })
    }

    //atualiza tipo tarefa
    atualizaTipoDespesa(request, response) {
        const id = request.params.id
        const { name, status } = request.body

        database.where({ id: id }).update({ name: name, status: status }).table("expense_types").then(data => {
            response.json({ message: "Tipo Despesa Atualizado com Sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

    //deletar tipo tarefa
    deletaTipoDespesa(request, response) {
        const id = request.params.id

        database.where({ id: id }).del().table("expense_types").then(data => {
            response.json({ message: "Tipo Despesa removido com Sucesso" })
        }).catch(error => {
            console.log(error)
        })
    }

}

module.exports = new TipoDespesaController()