const express = require('express');
const app = express();

app.use(express.json());  // Para poder ler o corpo da requisição

// GET - index
app.get('/', (req, res) => {
    res.send('<p>API Desenvolvimento Web</p>');
});

// Usuário pré-definido
const username = 'admin';
const password = 'senha123';
app.post('/login', (req, res) => {
    const { user, pass } = req.body;
    // Verifica se o nome de usuário e a senha estão corretos
    if (user === username && pass === password) {
        return res.json({ message: 'Login bem-sucedido', token: 'seu-token-simples' });
    } else {
        return res.status(401).json({ message: 'Usuário ou senha incorretos' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/tasks', (req, res) => {
    const token = req.headers['authorization'];
    // Verifica se o token existe e é válido
    if (token === 'seu-token-simples') {
        return res.json({ tasks: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'] });
    } else {
        return res.status(403).json({ message: 'Acesso proibido. Token inválido.' });
    }
});
