`id`, `apartament_id`, `expense_type_id`, `previous_reading`, `current_reading`, `date`

const database = require('../database/connection')

class ControleIndividualController{

    novaControleIndividual(request,response){
        const {apartament_id, expense_type_id, previous_reading, current_reading, date} = request.body

        database.insert({apartament_id, expense_type_id, previous_reading, current_reading, date}).table("individual_control").then(data =>{
            response.json({message: "Lançamento inserido com sucesso!"})
        }).catch(error =>{
            console.info(error)
        })
    }

    listaControleIndividuais(request,response){
        database.select("*").table("individual_control").then(lancamentos => {
            response.json(lancamentos)
        }).catch(error =>{
            console.info(error)
        })
    }

    listaControleIndividualId(request,response){
        const id = request.params.id
        database("*").table("individual_control").where({id:id}).then(lancamento =>{
            response.json(lancamento)
        }).catch(error =>{
            console.info(error)
        })
    }

    atualizaControleIndividual(request,response){
        const id = request.params.id
        const {apartament_id, expense_type_id, previous_reading, current_reading, date} = request.body

        database.where({id:id}).update({
            apartament_id:apartament_id, expense_type_id:expense_type_id, previous_reading:previous_reading, current_reading:current_reading, date:date
        }).table("individual_control").then(data=>{
            response.json({message: "Dados atualizados com sucesso!"})
        }).catch(error=>{
            console.info(error)
        })
    }

    deletaControleIndividual(request,response){
        const id = request.params.id

        database.where({id:id}).del().table("individual_control").then(data=>{
            response.json({message: "Registro excluído com sucesso!"})
        }).catch(error=>{
            console.info(error)
        })
    }
}

module.exports = new ControleIndividualController()