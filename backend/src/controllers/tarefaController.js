const db = require('../config/db');

// GET /tarefas
exports.listarTarefas = (req, res) => {
    db.query('SELECT * FROM tarefas ORDER BY data_criacao DESC', (err, results) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(results);
    });
};

// POST /tarefas
exports.cadastrarTarefa = (req, res) => {
    const { descricao } = req.body;
    db.query('INSERT INTO tarefas (descricao) VALUES (?)', [descricao], (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        res.status(201).json({ id: result.insertId, descricao, status: 0 });
    });
};

// PUT /tarefas/:id
exports.alterarStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body; 
    db.query('UPDATE tarefas SET status = ? WHERE id = ?', [status, id], (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Status atualizado com sucesso!' });
    });
};

// DELETE /tarefas/:id
exports.removerTarefa = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tarefas WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Tarefa removida com sucesso!' });
    });
};