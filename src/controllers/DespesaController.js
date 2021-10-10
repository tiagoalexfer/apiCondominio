const database = require('../database/connection')

class DespesaController{

    novaDespesa(request,response){
        const{description, value, date_occurrence, date_due, date_payment, cash_in, expense_type_id} = request.body

        database.insert({description, value, date_occurrence, date_due, date_payment, cash_in, expense_type_id}).table("expenses").then(data => {
            response.json({message: 'Despesa cadastrada com sucesso!!'})
        }).catch(error => {
            console.info(error)
        })
    }

    listaDespesas(request,response){
        database.select("*").table("expenses").then(contas =>{
            response.json(contas)
        }).catch(error =>{
            console.info(error)
        })
    }

    listaDespesaId(request,response){
        const id = request.params.id
        database.select("*").table("expenses").where({id: id}).then(despesa =>{
            response.json(despesa)
        }).catch(error =>{
            console.info(error)
        })
    }

    atualizaDespesa(request,response){
        const id = request.params.id
        const{description, value, date_occurrence, date_due, date_payment, cash_in, expense_type_id} = request.body

        database.where({id:id}).update({description: description, value: value, date_occurrence:date_occurrence, date_due:date_due, date_payment: date_payment, cash_in: cash_in, expense_type_id: expense_type_id}).table("expenses").then(data => {
            response.json({ message: "Despesa atualizada com sucesso!!"})
        }).catch(error =>{
            console.info(error)
        })
    }

    deletaDespesa(request,response){
        const id = request.params.id

        database.where({id:id}).del().table("expenses").then(data =>{response.json({ message: "Despesa removida com sucesso"})
        }).catch(error =>{
            console.info(error)
        })
    }
}

module.exports = new DespesaController()