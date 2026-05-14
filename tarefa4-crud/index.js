const express = require('express');
const app = express();
const { Tarefa } = require('./conn');

app.use(express.json());
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Index
app.get('/', (req, res) => {
    res.send('<p>Desenvolvimento Web</p>');
});

//a) Inserir uma tarefa
app.post('/task', (req, res) => {
    const { titulo } = req.body;
    Tarefa.create({ titulo }).then((nova) => {
        res.status(201).json(nova);
    });
});

//Listar todas as tarefas
app.get('/tasks', (req, res) => {
    const tarefas = Tarefa.findAll();
    Tarefa.findAll().then((tarefas) => {
        res.json(tarefas);
    });;
});

//Procurar tarefa pelo ID
app.get('/task/:id', (req, res) => {
    Tarefa.findByPk(req.params.id).then((tarefa) => {
        if (tarefa) {
            res.json(tarefa);
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        }
    });
});

//d) Alterar uma tarefa
app.put('/task/:id', (req, res) => {
    Tarefa.findByPk(req.params.id).then((tarefa) => {
        if (tarefa) {
            tarefa.titulo = req.body.titulo;
            
            // Salva a alteração no banco e depois responde
            tarefa.save().then((tarefaAtualizada) => {
                res.json(tarefaAtualizada);
            });
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        }
    });
});

//e) Apagar uma tarefa
app.delete('/task/:id', (req, res) => {
    tarefas = tarefas.filter(t => t.id != req.params.id);
    res.json({ message: 'Tarefa apagada com sucesso' });
});
