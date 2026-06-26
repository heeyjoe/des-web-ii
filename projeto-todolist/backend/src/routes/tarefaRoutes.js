const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefaController');

router.get('/', tarefasController.listarTarefas);
router.post('/', tarefasController.cadastrarTarefa);
router.put('/:id', tarefasController.alterarStatus);
router.delete('/:id', tarefasController.removerTarefa);

module.exports = router;