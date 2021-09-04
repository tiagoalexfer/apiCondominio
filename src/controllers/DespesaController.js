const database = require('../database/connection')

class DespesaController {

    novaDespesa(request, response) {
        const {nome, status} = request.body

        console.log(nome, status)

        database.insert({nome,status }).table("despesa").then(data => {
            console.log(data)
            response.json({ message: "Despesa criada com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new DespesaController()