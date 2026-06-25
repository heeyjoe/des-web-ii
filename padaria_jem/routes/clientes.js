const express = require('express'); 
const router = express.Router(); 
const db = require('../db'); 
// Listar clientes 
router.get('/', (req, res) => { 
  db.query('SELECT * FROM clientes', (err, results) => { 
    if (err) return res.status(500).json({ erro: err }); 
    res.json(results); 
  }); 
}); 
// Criar cliente 
router.post('/', (req, res) => { 
  const { nome, telefone, endereco } = req.body; 
  db.query('INSERT INTO clientes (nome, telefone, endereco) VALUES (?, ?, ?)', 
    [nome, telefone, endereco], 
    (err, result) => { 
      if (err) return res.status(500).json({ erro: err }); 
      res.json({ id: result.insertId, nome, telefone, endereco }); 
    }); 
});  module.exports = router; 