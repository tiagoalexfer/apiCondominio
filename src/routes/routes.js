const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const DespesaController = require('../controllers/DespesaController')

router.post('/novaDespesa', DespesaController.novaDespesa)

module.exports = router