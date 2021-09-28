const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TipoDespesaController = require('../controllers/TipoDespesaController')
const CondominioController = require('../controllers/CondominioController')

//Tipo Despesa
router.post('/novoTipoDespesa', TipoDespesaController.novoTipoDespesa)
router.get('/TipoDespesas', TipoDespesaController.listarTipoDespesas)
router.get('/TipoDespesaId/:id', TipoDespesaController.listarTipoDespesaId)
router.put('/atualizar/tipodespesa/:id', TipoDespesaController.atualizaTipoDespesa)
router.delete('/deletar/tipodespesa/:id', TipoDespesaController.deletaTipoDespesa)

//Condiminio
router.post('/novoCondominio', CondominioController.novoCondominio)
router.get('/condominios', CondominioController.listaCondominio)
router.get('/condominioId/:id', CondominioController.listaCondominioId)
router.put('/atualizar/condominio/:id', CondominioController.atualizaCondominio)
router.delete('/deletar/condominio/:id', CondominioController.deletaCondominio)


//Apartamento




module.exports = router