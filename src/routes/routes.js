const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TipoDespesaController = require('../controllers/TipoDespesaController')

router.post('/novoTipoDespesa', TipoDespesaController.novoTipoDespesa)
router.get('/TipoDespesas', TipoDespesaController.listarTipoDespesas)
router.get('/TipoDespesaId/:id', TipoDespesaController.listarTipoDespesaId)
router.put('/atualizar/tipodespesa/:id', TipoDespesaController.atualizaTipoDespesa)
router.delete('/deletar/tipodespesa/:id', TipoDespesaController.deletaTipoDespesa)





module.exports = router