const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const TipoDespesaController = require('../controllers/TipoDespesaController')
const CondominioController = require('../controllers/CondominioController')
const ApartamentoController = require('../controllers/ApartamentoController')
const ControleIndividualController = require('../controllers/ControleIndividualController')
const DespesaController = require('../controllers/DespesaController')

//Tipo Despesa
router.post('/novoTipoDespesa', TipoDespesaController.novoTipoDespesa)
router.get('/tipoDespesas', TipoDespesaController.listarTipoDespesas)
router.get('/tipoDespesaId/:id', TipoDespesaController.listarTipoDespesaId)
router.put('/atualizar/tipodespesa/:id', TipoDespesaController.atualizaTipoDespesa)
router.delete('/deletar/tipodespesa/:id', TipoDespesaController.deletaTipoDespesa)

//Condiminio
router.post('/novoCondominio', CondominioController.novoCondominio)
router.get('/condominios', CondominioController.listaCondominio)
router.get('/condominioId/:id', CondominioController.listaCondominioId)
router.put('/atualizar/condominio/:id', CondominioController.atualizaCondominio)
router.delete('/deletar/condominio/:id', CondominioController.deletaCondominio)


//Apartamento
router.post('/novoApartamento', ApartamentoController.novoApartamento)
router.get('/apartamentos', ApartamentoController.listarApartamentos)
router.get('/apartamentoId/:id', ApartamentoController.listarApartamentoId)
router.put('/atualizar/apartamento/:id', ApartamentoController.atualizarApartamento)
router.delete('/deletar/apartamento/:id', ApartamentoController.deletarApartamento)

//Controle Individual
router.post('/novoLancamento', ControleIndividualController.novaControleIndividual)
router.get('/lancamentos', ControleIndividualController.listaControleIndividuais)
router.get('/lancamentoId/:id', ControleIndividualController.listaControleIndividualId)
router.put('/atualizar/lancamento/:id', ControleIndividualController.atualizaControleIndividual)
router.delete('/deletar/lancamento/:id', ControleIndividualController.deletaControleIndividual)

//Despesas
router.post('/novaDespesa', DespesaController.novaDespesa)
router.get('/despesas', DespesaController.listaDespesas)
router.get('/despesaId/:id', DespesaController.listaDespesaId)
router.put('/atualizar/despesa/:id', DespesaController.atualizaDespesa)
router.delete('/deletar/despesa/:id', DespesaController.deletaDespesa)

module.exports = router