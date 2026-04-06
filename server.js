const express = require('express');
const app = express();
// Configuração para lidar com JSON
app.use(express.json());
app.get('/autor', (req, res) => {
    if (req.get('Accept') === 'application/json') {
        res.json({ autor: "Nome do Autor" });
    } else {
        res.send('<h1>Nome do Autor</h1>');
    }
});
// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// GET - Listar todos os temas
app.get('/tema', (req, res) => {
    res.json([{ id: 1, nome: 'Tema 1' }]);
});
// POST - Criar um novo tema
app.post('/tema', (req, res) => {
    const novoTema = req.body;
    res.status(201).json({ nome: novoTema.nome });
});
// PUT - Atualizar tema
app.put('/tema/:id', (req, res) => {
    const id = req.params.id;
    const temaAtualizado = req.body;
    res.json({ id, nome: temaAtualizado.nome });
});
// DELETE - Excluir tema
app.delete('/tema/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `Tema com ID ${id} excluído` });
});

// GET - Listar categorias do tema
app.get('/tema/:id/categorias', (req, res) => {
    res.json([{ id: 1, nome: 'Categoria 1' }]);
});
// POST - Adicionar categoria
app.post('/tema/:id/categorias', (req, res) => {
    const novaCategoria = req.body;
    res.status(201).json({ nome: novaCategoria.nome });
});
// PUT - Atualizar categoria
app.put('/tema/:id/categorias/:categoriaId', (req, res) => {
    const categoriaId = req.params.categoriaId;
    const categoriaAtualizada = req.body;
    res.json({ categoriaId, nome: categoriaAtualizada.nome });
});
// DELETE - Excluir categoria
app.delete('/tema/:id/categorias/:categoriaId', (req, res) => {
    const categoriaId = req.params.categoriaId;
    res.json({ message: `Categoria com ID ${categoriaId} excluída` });
});
